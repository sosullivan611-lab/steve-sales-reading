"use client";

import type { Book } from "@/data/curriculum";
import type { ProgressApi } from "@/hooks/use-progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Props = {
  book: Book;
  progress: ProgressApi;
  accent?: "starter" | "default";
};

export function BookPanel({ book, progress, accent = "default" }: Props) {
  const done = progress.isBookDone(book.id);
  const lessonsHit = book.lessons.filter((_, i) =>
    progress.isLessonDone(book.id, i)
  ).length;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6",
        accent === "starter"
          ? "border-[var(--signal)]/40 ring-1 ring-[var(--signal)]/20"
          : "border-[var(--ink)]/8",
        done && "bg-[var(--signal-soft)]/40"
      )}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          checked={done}
          onCheckedChange={() => progress.toggleBook(book.id)}
          aria-label={`Mark ${book.title} complete`}
          className="mt-1"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {accent === "starter" && (
              <Badge className="bg-[var(--signal)] text-[var(--ink)] hover:bg-[var(--signal)]">
                Start here
              </Badge>
            )}
            <Badge variant="outline" className="font-normal">
              {lessonsHit}/{book.lessons.length} lessons
            </Badge>
          </div>
          <h3
            className={cn(
              "mt-2 font-[family-name:var(--font-display)] text-xl leading-tight tracking-tight text-[var(--ink)] sm:text-2xl",
              done && "line-through opacity-70"
            )}
          >
            {book.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--quiet)]">{book.author}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-3 border-t border-[var(--ink)]/8 pt-4">
        {book.lessons.map((lesson, index) => {
          const checked = progress.isLessonDone(book.id, index);
          return (
            <li key={lesson} className="flex gap-3">
              <Checkbox
                checked={checked}
                onCheckedChange={() => progress.toggleLesson(book.id, index)}
                aria-label={`Lesson: ${lesson}`}
                className="mt-0.5"
              />
              <span
                className={cn(
                  "text-sm leading-relaxed text-[var(--ink)]/85",
                  checked && "text-[var(--quiet)] line-through"
                )}
              >
                {lesson}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="flex cursor-pointer gap-3 rounded-xl bg-[var(--paper-deep)]/70 p-3 transition hover:bg-[var(--paper-deep)]">
          <Checkbox
            checked={progress.isDrillDone(book.id)}
            onCheckedChange={() => progress.toggleDrill(book.id)}
            className="mt-0.5"
          />
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--signal-deep)]">
              Field drill
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-[var(--ink)]/80">
              {book.drill}
            </span>
          </span>
        </label>
        <div className="rounded-xl border border-dashed border-[var(--ink)]/15 p-3">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--quiet)]">
            Interview angle
          </span>
          <p className="mt-1 text-sm leading-relaxed text-[var(--ink)]/80">
            {book.interviewAngle}
          </p>
        </div>
      </div>
    </article>
  );
}
