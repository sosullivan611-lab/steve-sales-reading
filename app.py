"""Reading Pipeline — Streamlit app for Streamlit Community Cloud."""

from __future__ import annotations

import streamlit as st

from curriculum_data import (
    ALL_BOOKS,
    MONTHS,
    STARTER_BOOK,
    TOTAL_BOOKS,
    TOTAL_LESSONS,
    WEEKLY_RHYTHM,
)


def _init_state() -> None:
    if "books_done" not in st.session_state:
        st.session_state.books_done = set()
    if "lessons_done" not in st.session_state:
        st.session_state.lessons_done = set()
    if "drills_done" not in st.session_state:
        st.session_state.drills_done = set()
    if "reading_logged" not in st.session_state:
        st.session_state.reading_logged = False


def _lesson_key(book_id: str, index: int) -> str:
    return f"{book_id}::{index}"


def _summary() -> dict[str, int | float]:
    books = len(st.session_state.books_done)
    lessons = len(st.session_state.lessons_done)
    drills = len(st.session_state.drills_done)
    percent = round(
        (books / TOTAL_BOOKS * 0.5)
        + (lessons / TOTAL_LESSONS * 0.35)
        + (drills / TOTAL_BOOKS * 0.15),
        0,
    )
    return {
        "books": books,
        "lessons": lessons,
        "drills": drills,
        "percent": percent,
    }


def _render_book(book: dict, *, starter: bool = False) -> None:
    bid = book["id"]
    with st.container(border=True):
        cols = st.columns([0.08, 0.92])
        with cols[0]:
            done = st.checkbox(
                "Book done",
                value=bid in st.session_state.books_done,
                key=f"book-{bid}",
                label_visibility="collapsed",
            )
            if done:
                st.session_state.books_done.add(bid)
            else:
                st.session_state.books_done.discard(bid)

        with cols[1]:
            if starter:
                st.caption("Start here · Week 0")
            st.markdown(f"### {book['title']}")
            st.caption(book["author"])

        for i, lesson in enumerate(book["lessons"]):
            lk = _lesson_key(bid, i)
            checked = st.checkbox(lesson, value=lk in st.session_state.lessons_done, key=lk)
            if checked:
                st.session_state.lessons_done.add(lk)
            else:
                st.session_state.lessons_done.discard(lk)

        c1, c2 = st.columns(2)
        with c1:
            drill_done = st.checkbox(
                "**Field drill** — " + book["drill"],
                value=bid in st.session_state.drills_done,
                key=f"drill-{bid}",
            )
            if drill_done:
                st.session_state.drills_done.add(bid)
            else:
                st.session_state.drills_done.discard(bid)
        with c2:
            st.markdown("**Interview angle**")
            st.write(book["interview_angle"])


def main() -> None:
    st.set_page_config(
        page_title="Reading Pipeline",
        page_icon="📚",
        layout="wide",
        initial_sidebar_state="expanded",
    )
    _init_state()
    stats = _summary()

    st.title("Reading Pipeline")
    st.subheader("Turn the layoff gap into a sales MBA")
    st.write(
        "30 minutes a day · two books a month · drills that show up in interviews. "
        "Built from George Vitko's six-month modern sales list plus "
        "*Cold Calling Sucks* (30 Minutes to President's Club)."
    )

    with st.sidebar:
        st.header("Scoreboard")
        st.metric("Overall", f"{stats['percent']}%")
        st.metric("Books", f"{stats['books']}/{TOTAL_BOOKS}")
        st.metric("Lessons", f"{stats['lessons']}/{TOTAL_LESSONS}")
        st.metric("Drills", f"{stats['drills']}/{TOTAL_BOOKS}")
        if st.button(
            "Reading logged today" if st.session_state.reading_logged else "Log today's reading",
            use_container_width=True,
        ):
            st.session_state.reading_logged = True
        if st.button("Reset progress", use_container_width=True):
            st.session_state.books_done = set()
            st.session_state.lessons_done = set()
            st.session_state.drills_done = set()
            st.session_state.reading_logged = False
            st.rerun()

    tab_plan, tab_rhythm, tab_curriculum = st.tabs(
        ["Plan overview", "Weekly rhythm", "Curriculum"]
    )

    with tab_plan:
        st.info(
            "**Rule of the gap:** applications before noon, reading after lunch, "
            "practice out loud before networking. Books without reps are entertainment."
        )
        st.markdown(
            "Use checkboxes in **Curriculum** to track books, lessons, and drills. "
            "Progress saves for this browser session on Streamlit Cloud."
        )

    with tab_rhythm:
        for label, time_block, activity in WEEKLY_RHYTHM:
            st.markdown(f"**{label}** · {time_block}")
            st.write(activity)
            st.divider()

    with tab_curriculum:
        st.markdown("## Week 0 — Start with the phone")
        _render_book(STARTER_BOOK, starter=True)
        for month in MONTHS:
            st.markdown(f"## Month {month['number']}: {month['theme']}")
            st.caption(month["focus"])
            for book in month["books"]:
                _render_book(book)


if __name__ == "__main__":
    main()
