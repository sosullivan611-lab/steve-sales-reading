"use client";

import { useProgress } from "@/hooks/use-progress";
import { months, starterBook, weeklyRhythm } from "@/data/curriculum";
import { BookPanel } from "@/components/book-panel";
import { Button } from "@/components/ui/button";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function PlanApp() {
  const progress = useProgress();
  const { summary, hydrated } = progress;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--paper)_0%,_var(--paper-deep)_45%,_#d7e4df_100%)]" />
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[var(--signal)]/25 blur-3xl animate-pulse-slow" />
        <div className="absolute top-[40%] left-[-12%] h-[22rem] w-[22rem] rounded-full bg-[var(--ink)]/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d1b2a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--ink)] sm:text-2xl">
            Reading Pipeline
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--quiet)] sm:inline">
            between roles
          </span>
        </div>
        {hydrated && (
          <div className="flex items-center gap-2 text-sm text-[var(--quiet)]">
            <span className="tabular-nums">{summary.percent}% forged</span>
            {summary.streak > 0 && (
              <Badge variant="secondary" className="bg-white/70">
                {summary.streak}-day streak
              </Badge>
            )}
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-20">
          <div className="animate-rise">
            <p className="font-[family-name:var(--font-display)] text-5xl leading-[0.92] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Reading
              <br />
              <span className="text-[var(--signal-deep)]">Pipeline</span>
            </p>
            <h1 className="mt-6 max-w-xl text-2xl font-medium leading-snug text-[var(--ink)] sm:text-3xl">
              Turn the layoff gap into a sales MBA — 30 minutes a day, two books
              a month, drills that show up in interviews.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--quiet)] sm:text-lg">
              Built from George Vitko&apos;s six-month modern sales list, plus{" "}
              <em>Cold Calling Sucks</em> from 30 Minutes to President&apos;s
              Club so your prospecting muscle never goes soft.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-11 rounded-full bg-[var(--ink)] px-6 text-base text-[var(--paper)] hover:bg-[var(--ink)]/90"
                onClick={() => {
                  progress.startPlan();
                  document
                    .getElementById("starter")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start the plan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-[var(--ink)]/20 bg-white/50 px-6 text-base backdrop-blur"
                onClick={() =>
                  document
                    .getElementById("rhythm")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See weekly rhythm
              </Button>
            </div>
          </div>

          <aside className="animate-rise-delay relative overflow-hidden rounded-[1.75rem] border border-[var(--ink)]/10 bg-[var(--ink)] p-6 text-[var(--paper)] shadow-xl sm:p-8">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[var(--signal)]/30 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal)]">
              Your scoreboard
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-none tracking-tight sm:text-5xl">
              {hydrated ? `${summary.percent}%` : "—"}
            </p>
            <p className="mt-2 text-sm text-white/65">
              13 books · key lessons · field drills · reading streak
            </p>

            <div className="mt-6 space-y-4">
              <StatRow
                label="Books"
                value={`${hydrated ? summary.booksComplete : 0}/${summary.booksTotal}`}
              />
              <StatRow
                label="Lessons locked in"
                value={`${hydrated ? summary.lessonsComplete : 0}/${summary.lessonsTotal}`}
              />
              <StatRow
                label="Drills run"
                value={`${hydrated ? summary.drillsComplete : 0}/${summary.drillsTotal}`}
              />
            </div>

            {hydrated && (
              <div className="mt-6">
                <Progress value={summary.percent} className="text-[var(--paper)]">
                  <ProgressLabel className="text-white/70">Overall</ProgressLabel>
                  <ProgressValue className="text-white/70" />
                </Progress>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                size="sm"
                className={cn(
                  "rounded-full",
                  progress.readToday
                    ? "bg-[var(--signal)] text-[var(--ink)] hover:bg-[var(--signal)]"
                    : "bg-white text-[var(--ink)] hover:bg-white/90"
                )}
                onClick={progress.markReadingToday}
              >
                {progress.readToday ? "Reading logged today" : "Log today's reading"}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="rounded-full text-white/70 hover:bg-white/10 hover:text-white"
                onClick={progress.reset}
              >
                Reset
              </Button>
            </div>
          </aside>
        </section>

        <section
          id="rhythm"
          className="border-y border-[var(--ink)]/8 bg-white/45 py-16 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal-deep)]">
              Between roles
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
              One job: get hired. One craft: get lethal.
            </h2>
            <p className="mt-3 max-w-2xl text-[var(--quiet)]">
              Don&apos;t binge-read and ghost the search. Split the day so reading
              compounds while outreach stays the primary pipeline.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {weeklyRhythm.map((block, i) => (
                <div
                  key={block.label}
                  className="animate-rise rounded-2xl border border-[var(--ink)]/8 bg-[var(--paper)]/80 p-5"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--signal-deep)]">
                    {block.label}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                    {block.time}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--quiet)]">
                    {block.activity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[var(--ink)]/10 bg-[var(--ink)] px-5 py-4 text-sm text-white/80 sm:px-6">
              <strong className="text-[var(--signal)]">Rule of the gap:</strong>{" "}
              applications before noon, reading after lunch, practice out loud
              before networking. Books without reps are entertainment.
            </div>
          </div>
        </section>

        <section id="starter" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal-deep)]">
            Week 0 · recommended add-on
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            Start with the phone
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--quiet)]">
            Alex Murphy (Senior AE, 30MPC) put it plainly: no list is complete
            without this book. Open with it before Month 1 so prospecting fear
            dies early — useful on the job search phones too.
          </p>
          <div className="mt-8">
            <BookPanel book={starterBook} progress={progress} accent="starter" />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--signal-deep)]">
            Six-month curriculum
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            Two books a month. Master modern sales.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--quiet)]">
            Check off chapters&apos; key lessons, run the field drill, and steal
            the interview angle so every book shows up in your next role.
          </p>

          <div className="mt-12 space-y-14">
            {months.map((month) => {
              const monthBooksDone = month.books.filter((b) =>
                progress.isBookDone(b.id)
              ).length;
              return (
                <div key={month.id} id={month.id} className="scroll-mt-8">
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--ink)]/10 pb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--quiet)]">
                        Month {month.number}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] sm:text-3xl">
                        {month.theme}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm text-[var(--quiet)]">
                        {month.focus}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "bg-white/60",
                        monthBooksDone === 2 &&
                          "border-[var(--signal-deep)] text-[var(--signal-deep)]"
                      )}
                    >
                      {monthBooksDone}/2 books
                    </Badge>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-2">
                    {month.books.map((book) => (
                      <BookPanel
                        key={book.id}
                        book={book}
                        progress={progress}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-[var(--ink)]/8 bg-[var(--ink)] py-16 text-[var(--paper)]">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              How to use this while you interview
            </h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "One story per book",
                  d: "After each finish, write a 60-second win/loss story that uses that book's framework. Bring two to every interview.",
                },
                {
                  n: "02",
                  t: "Language transfer",
                  d: "Borrow phrases from Exactly What to Say and Challenger for recruiter screens — curiosity beats corporate filler.",
                },
                {
                  n: "03",
                  t: "Pipeline yourself",
                  d: "Fanatical Prospecting applies to job search: protected outreach hours, multi-channel, no empty weeks.",
                },
              ].map((item) => (
                <li
                  key={item.n}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-[var(--signal)]">{item.n}</span>
                  <p className="mt-2 text-lg font-medium">{item.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.d}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 max-w-2xl text-sm text-white/55">
              Sources: George Vitko&apos;s &ldquo;How to master Modern Sales (in 6
              months)&rdquo; reading plan (Jason AI / Reply), plus{" "}
              <em>Cold Calling Sucks (and that&apos;s why it works)</em> by
              Armand Farrokh &amp; Nick Cegelski — recommended by Alex Murphy at
              30 Minutes to President&apos;s Club.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--ink)] px-5 pb-10 text-center text-xs text-white/40 sm:px-8">
        Reading Pipeline · progress saves in this browser
      </footer>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-2 text-sm">
      <span className="text-white/60">{label}</span>
      <span className="tabular-nums font-medium text-white">{value}</span>
    </div>
  );
}
