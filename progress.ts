"use client";

import { allBooks, TOTAL_BOOKS, TOTAL_LESSONS } from "@/data/curriculum";

const STORAGE_KEY = "reading-pipeline-progress-v1";

export type ProgressState = {
  startedAt: string | null;
  booksDone: string[];
  lessonsDone: string[];
  drillsDone: string[];
  readingDays: string[];
};

export const emptyProgress = (): ProgressState => ({
  startedAt: null,
  booksDone: [],
  lessonsDone: [],
  drillsDone: [],
  readingDays: [],
});

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as ProgressState;
    return { ...emptyProgress(), ...parsed };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function lessonKey(bookId: string, index: number) {
  return `${bookId}::${index}`;
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function summarize(state: ProgressState) {
  const booksComplete = state.booksDone.filter((id) =>
    allBooks.some((b) => b.id === id)
  ).length;
  const lessonsComplete = state.lessonsDone.length;
  const drillsComplete = state.drillsDone.length;
  const streak = computeStreak(state.readingDays);

  return {
    booksComplete,
    booksTotal: TOTAL_BOOKS,
    lessonsComplete,
    lessonsTotal: TOTAL_LESSONS,
    drillsComplete,
    drillsTotal: TOTAL_BOOKS,
    streak,
    percent: Math.round(
      ((booksComplete / TOTAL_BOOKS) * 0.5 +
        (lessonsComplete / TOTAL_LESSONS) * 0.35 +
        (drillsComplete / TOTAL_BOOKS) * 0.15) *
        100
    ),
  };
}

function computeStreak(days: string[]) {
  if (!days.length) return 0;
  const set = new Set(days);
  const cursor = new Date();
  const key = (d: Date) => d.toISOString().slice(0, 10);

  // If today isn't logged, allow streak to count from yesterday
  if (!set.has(key(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!set.has(key(cursor))) return 0;
  }

  let streak = 0;
  while (set.has(key(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function toggleId(list: string[], id: string) {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}
