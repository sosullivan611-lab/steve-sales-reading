"use client";

import { useEffect, useState } from "react";
import {
  emptyProgress,
  lessonKey,
  loadProgress,
  ProgressState,
  saveProgress,
  summarize,
  todayKey,
  toggleId,
} from "@/lib/progress";

function nowIso() {
  return new Date().toISOString();
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(emptyProgress);
  const [hydrated, setHydrated] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    setProgress(loadProgress());
    setToday(todayKey());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveProgress(progress);
  }, [progress, hydrated]);

  const startPlan = () => {
    setProgress((p) => ({
      ...p,
      startedAt: p.startedAt ?? nowIso(),
    }));
  };

  const markReadingToday = () => {
    const day = todayKey();
    setToday(day);
    setProgress((p) => ({
      ...p,
      startedAt: p.startedAt ?? nowIso(),
      readingDays: p.readingDays.includes(day)
        ? p.readingDays
        : [...p.readingDays, day],
    }));
  };

  const toggleBook = (bookId: string) => {
    setProgress((p) => ({
      ...p,
      startedAt: p.startedAt ?? nowIso(),
      booksDone: toggleId(p.booksDone, bookId),
    }));
  };

  const toggleLesson = (bookId: string, index: number) => {
    const id = lessonKey(bookId, index);
    setProgress((p) => ({
      ...p,
      startedAt: p.startedAt ?? nowIso(),
      lessonsDone: toggleId(p.lessonsDone, id),
    }));
  };

  const toggleDrill = (bookId: string) => {
    setProgress((p) => ({
      ...p,
      startedAt: p.startedAt ?? nowIso(),
      drillsDone: toggleId(p.drillsDone, bookId),
    }));
  };

  const reset = () => setProgress(emptyProgress());

  return {
    progress,
    hydrated,
    summary: summarize(progress),
    startPlan,
    markReadingToday,
    toggleBook,
    toggleLesson,
    toggleDrill,
    reset,
    isBookDone: (id: string) => progress.booksDone.includes(id),
    isLessonDone: (bookId: string, index: number) =>
      progress.lessonsDone.includes(lessonKey(bookId, index)),
    isDrillDone: (id: string) => progress.drillsDone.includes(id),
    readToday: Boolean(today) && progress.readingDays.includes(today),
  };
}

export type ProgressApi = ReturnType<typeof useProgress>;
