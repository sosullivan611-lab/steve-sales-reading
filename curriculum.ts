export type Book = {
  id: string;
  title: string;
  author: string;
  lessons: string[];
  drill: string;
  interviewAngle: string;
};

export type Month = {
  id: string;
  number: number;
  theme: string;
  focus: string;
  books: Book[];
};

export type WeekBlock = {
  label: string;
  time: string;
  activity: string;
};

/** George Vitko / Jason AI 6-month modern sales reading plan + 30MPC cold calling book */
export const starterBook: Book = {
  id: "cold-calling-sucks",
  title: "Cold Calling Sucks (and that's why it works)",
  author: "Armand Farrokh & Nick Cegelski",
  lessons: [
    "Cold calling feels terrible for everyone — endurance is the edge.",
    "Win the first 60 seconds with clear talk tracks, not improvisation.",
    "Top reps book ~1 meeting per 3 connected dials when they embrace the suck.",
  ],
  drill:
    "Write a 30-second opener and three objection responses. Rehearse out loud until they sound like you.",
  interviewAngle:
    "In interviews, describe how you structure dial blocks and recover after rejection — hiring managers hire for process under pressure.",
};

export const months: Month[] = [
  {
    id: "month-1",
    number: 1,
    theme: "Prospecting & Pipeline",
    focus: "Fill the top of funnel every day without waiting for inbound.",
    books: [
      {
        id: "fanatical-prospecting",
        title: "Fanatical Prospecting",
        author: "Jeb Blount",
        lessons: [
          "Slumps happen from missed past outreach, not bad luck.",
          "Use phone, email, and social channels together.",
          "Protect your outreach hours every day.",
        ],
        drill:
          "Block a daily 60-minute prospecting hour on your calendar for the next 10 working days. Treat it like a customer meeting.",
        interviewAngle:
          "Tell a story about how you rebuilt pipeline after a dry stretch — numbers and habits beat vague grit.",
      },
      {
        id: "new-sales-simplified",
        title: "New Sales. Simplified.",
        author: "Mike Weinberg",
        lessons: [
          "Avoid acting like a pushy salesperson.",
          "Focus actions entirely on generating revenue.",
          "Target buyer problems during cold calls.",
        ],
        drill:
          "Write a one-page sales story: who you sell to, the problems you solve, and why now. Practice saying it in under 90 seconds.",
        interviewAngle:
          "Use your sales story as the spine of every recruiter screen and AE interview.",
      },
    ],
  },
  {
    id: "month-2",
    number: 2,
    theme: "Discovery & Qualification",
    focus: "Stop chasing ghosts. Find pain, champions, and real decision paths.",
    books: [
      {
        id: "gap-selling",
        title: "Gap Selling",
        author: "Keenan",
        lessons: [
          "Buyers purchase solutions for painful problems.",
          "Sell strategic change, not product features.",
          "Larger business gaps create buying urgency.",
        ],
        drill:
          "For a past deal (won or lost), map Current State → Future State → Gap → Impact. Rewrite your discovery questions from that map.",
        interviewAngle:
          "Walk interviewers through a discovery that uncovered a business gap — not a feature checklist.",
      },
      {
        id: "qualified-sales-leader",
        title: "The Qualified Sales Leader",
        author: "John McMahon",
        lessons: [
          "Qualify hard deals using MEDDICC steps.",
          "Find internal champions to sell internally.",
          "Map decision processes to prevent delays.",
        ],
        drill:
          "Score one open or past opportunity with MEDDICC. Flag the weakest letter and write the next question that would fill it.",
        interviewAngle:
          "Drop MEDDICC naturally when they ask how you forecast — show you qualify ruthlessly.",
      },
    ],
  },
  {
    id: "month-3",
    number: 3,
    theme: "Sales Methodology & Strategy",
    focus: "Teach, reframe, and let buyers argue for the deal themselves.",
    books: [
      {
        id: "challenger-sale",
        title: "The Challenger Sale",
        author: "Matthew Dixon & Brent Adamson",
        lessons: [
          "Teach buyers new and useful insights.",
          "Reframe how prospects view their problems.",
          "Use constructive tension to win deals.",
        ],
        drill:
          "Draft one insight that challenges a common buyer assumption in your target market. Pair it with a takeaway question.",
        interviewAngle:
          "Share a time you taught a buyer something that changed their buying criteria.",
      },
      {
        id: "spin-selling",
        title: "SPIN Selling",
        author: "Neil Rackham",
        lessons: [
          "Ask smart situational and problem questions.",
          "Uncover the consequences of unaddressed pain.",
          "Let buyers state your product's value.",
        ],
        drill:
          "Write 4 Situation, 4 Problem, 3 Implication, and 3 Need-Payoff questions for a role you're targeting.",
        interviewAngle:
          "In mock discovery rounds, lead with implication questions — they sound senior.",
      },
    ],
  },
  {
    id: "month-4",
    number: 4,
    theme: "Influence & Psychology",
    focus: "Reduce buyer fear and indecision without sleazy pressure.",
    books: [
      {
        id: "jolt-effect",
        title: "The JOLT Effect",
        author: "Matthew Dixon & Ted McKenna",
        lessons: [
          "Prospects fear making a bad mistake.",
          "Offer clear recommendations to ease anxiety.",
          "Limit choices to eliminate buyer indecision.",
        ],
        drill:
          "Rewrite a soft close into a clear recommendation with one preferred path and a reason why.",
        interviewAngle:
          "Explain how you help stuck buyers decide — managers love reps who close indecision, not just objections.",
      },
      {
        id: "influence",
        title: "Influence: The Psychology of Persuasion",
        author: "Robert Cialdini",
        lessons: [
          "Leverage social proof to build momentum.",
          "Provide value before making any ask.",
          "Secure small commitments early in sales.",
        ],
        drill:
          "List three proof assets you can use in outreach (peer logos, quantified outcomes, short stories). Build them into one email and one call.",
        interviewAngle:
          "Your job search is influence in practice: reciprocity (helpful notes), social proof (referrals), consistency (follow-ups).",
      },
    ],
  },
  {
    id: "month-5",
    number: 5,
    theme: "Negotiation & Closing",
    focus: "Earn trust, kill surprises, and negotiate for real agreement.",
    books: [
      {
        id: "never-split",
        title: "Never Split the Difference",
        author: "Chris Voss",
        lessons: [
          "Use strategic silence and open questions.",
          "Practice empathy to lower buyer defense.",
          "Aim for authentic agreement over compliance.",
        ],
        drill:
          "Practice labeling: 'It seems like…' / 'It sounds like…' on three recorded mock calls or with a peer.",
        interviewAngle:
          "Use calibrated questions in salary and offer conversations — same muscle, different stake.",
      },
      {
        id: "transparency-sale",
        title: "The Transparency Sale",
        author: "Todd Caponi",
        lessons: [
          "Share product flaws early for trust.",
          "Eliminate surprises to speed up contracts.",
          "Filter out bad prospects very quickly.",
        ],
        drill:
          "Write a 'glass half empty' slide: top 3 limitations of a product you sold and who it's not for.",
        interviewAngle:
          "When asked about a loss, lead with what you'd disclose earlier next time — that signals maturity.",
      },
    ],
  },
  {
    id: "month-6",
    number: 6,
    theme: "Sales Communication & Execution",
    focus: "Say the right words and stay emotionally steady when deals get messy.",
    books: [
      {
        id: "exactly-what-to-say",
        title: "Exactly What to Say",
        author: "Phil M. Jones",
        lessons: [
          "Use specific phrases to guide choices.",
          "Remove words that trigger buyer rejection.",
          "Spark immediate curiosity with verbal cues.",
        ],
        drill:
          "Replace three weak phrases in your talk track ('just checking in', 'sorry to bother', 'I was wondering') with stronger alternatives.",
        interviewAngle:
          "Polish your interview language the same way — curiosity openers beat filler.",
      },
      {
        id: "sales-eq",
        title: "Sales EQ",
        author: "Jeb Blount",
        lessons: [
          "Control your emotions during stressful deals.",
          "Read unstated buyer needs in real-time.",
          "Match process structure with human connection.",
        ],
        drill:
          "After each interview or networking call this week, journal: what was said, what was felt, what you'll do differently next time.",
        interviewAngle:
          "Layoffs and job searches test EQ. Show you can stay process-driven when outcomes are uncertain.",
      },
    ],
  },
];

export const weeklyRhythm: WeekBlock[] = [
  {
    label: "Morning block",
    time: "90 min",
    activity:
      "Job search engine: applications, tailored outreach, and follow-ups while your brain is sharp.",
  },
  {
    label: "Reading block",
    time: "30–45 min",
    activity:
      "One chapter + capture three bullets and one drill. Same time every day so it becomes automatic.",
  },
  {
    label: "Practice block",
    time: "30 min",
    activity:
      "Say it out loud: openers, discovery questions, or interview stories tied to today's chapter.",
  },
  {
    label: "Network block",
    time: "45–60 min",
    activity:
      "Warm intros, LinkedIn notes, and coffee chats. Treat people like pipeline — value first, ask second.",
  },
];

export const allBooks: Book[] = [starterBook, ...months.flatMap((m) => m.books)];

export const TOTAL_BOOKS = allBooks.length;
export const TOTAL_LESSONS = allBooks.reduce((n, b) => n + b.lessons.length, 0);
