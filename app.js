const STORAGE_KEY = "a-button-for-that/v1";
const MIN_KEYS = 3;
const MAX_KEYS = 6;
const SVG_NS = "http://www.w3.org/2000/svg";
const CX = 320;
const CY = 320;
const R0 = 178;
const R1 = 296;
const AREAS = [
  {
    id: "work",
    label: "Work",
    question: "What hour of work would you give a button?",
    chapter: "Work is where agents were invited first. The inbox, the calendar, the message that asks for a reply before you have understood it. An agent can sort what arrived overnight, draft in a voice close to yours, and hand you back the hour you would have spent deciding. It can also decide, quietly, what counted as urgent. If this color were on your keypad, which hour of work would you automate, and which judgment would you still make yourself?",
    fill: "#e4b15a",
    ink: "#2a2116",
    sample: {
      title: "Inbox",
      hint: "Sorts the mail. You still send it.",
      tale: {
        prose: [
          "Every Monday the inbox opens on everything that arrived while you were away, and an hour goes to deciding which of it can wait. The messages use the same tone for a real deadline and a nervous one, so the sorting is already the work.",
          "A button for that would set aside the people you actually owe, mark the rest as needs you or can wait, and draft the replies that need you. It would stop before anything is sent. The hour returns. The voice that answers does not have to leave you.",
          "What stays human is the meaning of urgent, and the act of sending. An agent can prepare the pile. It should not be the person who decides that a life on the other side of a message can wait.",
        ],
        kept: [
          "You kept the Monday inbox. A button does not sort it, and does not draft in your voice. The hour of deciding which message is real, and which reply you are willing to send, stays with you.",
          "The agent was imaginable. You looked at what it would take, the tone, the urgency, the first sentence, and refused to hand those over.",
        ],
      },
      routine: "Every Monday I open the inbox, star what looks urgent, and lose an hour deciding what can wait.",
      difficulty: "Everything arrives with the same tone. I cannot tell a real deadline from a nervous one.",
      wish: "A button that sorts the weekend mail into needs-me and can-wait, and drafts three replies for me to approve.",
      trigger: "Monday, 9:10, when the inbox is opened",
      inputs: "Unread mail since Friday, the week's calendar, the three people I actually owe",
      steps: [
        "Set aside anything from the three people I owe",
        "Mark the rest as needs-me or can-wait, using the calendar",
        "Draft replies only for needs-me, and stop for approval",
      ],
      outcome: "An hour returned, and no reply sent without me",
      judgement: "I still decide what urgent means, and I send every reply myself.",
    },
  },
  {
    id: "home",
    label: "Home",
    question: "What in the home would you let a button finish?",
    chapter: "Home is the hour that returns whether or not anyone asks for it. The table, the shoes, the sink, the list before someone arrives. An agent can name what is out of place and call the flat ready. Ready is not the same as lived in. If you made a key for this domain, what would you let a button put back, and which mess would you still want to choose?",
    fill: "#e07a5f",
    ink: "#2a1612",
    sample: {
      title: "Tidy",
      hint: "Puts things back. You choose what stays messy.",
      tale: {
        prose: [
          "Every Sunday the flat asks to be walked and put back, and by Tuesday the week has undone it. Some of the tidying is care. Some of it is the performance of a visitor who has not arrived.",
          "A button for that would return the table, the shoes, and the sink to a known state before anyone comes. It would leave one visible mess, so the rooms still look as if a person lives in them.",
          "What stays with you is the choice of that mess. An agent can restore a surface. It should not be the one who decides which disorder is a life and which is only neglect.",
        ],
        kept: [
          "You kept the Sunday walk through the flat. A button does not put the rooms back, and does not decide which mess is allowed to remain.",
          "The hour stays yours because the difference between care and performance is not a state an agent can see.",
        ],
      },
      routine: "Every Sunday I walk the flat with a bag, putting objects back where they belong. The week undoes it by Tuesday.",
      difficulty: "I am tidying for an imagined visitor, and I cannot tell care from performance.",
      wish: "A button that returns the table, the shoes, and the sink to a known state before anyone arrives.",
      trigger: "Sunday afternoon, or the hour before someone comes over",
      inputs: "What is on the table, the shoes by the door, the state of the sink",
      steps: [
        "Name three surfaces that matter today",
        "Put back only what has a place",
        "Leave one visible mess so the flat still looks lived in",
      ],
      outcome: "The flat is ready enough, and I still recognise it",
      judgement: "I decide which mess is allowed to stay.",
    },
  },
  {
    id: "relationships",
    label: "Relationships",
    question: "What part of reaching someone would you automate?",
    chapter: "There is always someone you mean to reach and do not. An agent can remind you, open the line, and even propose the first sentence, so that the week does not pass in rehearsal. It cannot be the person on the other end, and it cannot decide that this week the silence is the truer choice. What part of that reaching would you put on a key, and what would you keep as the call itself?",
    fill: "#e28aa0",
    ink: "#2a141c",
    sample: {
      title: "Sister",
      hint: "Reminds you to call. You do the talking.",
      tale: {
        prose: [
          "Thursday comes, and the call to your sister does not. You rehearse the first sentence until the evening is gone, wanting news of her and not wanting to perform being a good sister.",
          "A button for that would remind you once, offer one question that is not a performance, and start the call only after you press again. Then it would stay quiet.",
          "What remains human is the decision to call at all, and every word after the line opens. An agent can bring you to the threshold. It should not cross it in your voice.",
        ],
        kept: [
          "You kept this call. A button does not dial, and does not speak for you. The rehearsal, the reluctance, and the choice to let the week pass all stay in the relationship.",
          "It was considered as a key, because the reminder is easy to imagine. The talking was not, and so the button was refused.",
        ],
      },
      routine: "I mean to call my sister on Thursday. I rehearse the first sentence, and then I don't.",
      difficulty: "I want news of her, and I don't want to perform being a good sister.",
      wish: "A button that opens the call and suggests one true question, then stays quiet.",
      trigger: "Thursday evening, if we have not spoken in ten days",
      inputs: "The last thing she told me, and the date of our last call",
      steps: [
        "Remind me, once",
        "Offer one question that is not how are you",
        "Start the call only after I press again",
      ],
      outcome: "We actually speak, or I consciously let the week pass",
      judgement: "I decide whether to call, and I do the talking.",
    },
  },
  {
    id: "care",
    label: "Care",
    question: "What part of care would you trust to a button?",
    chapter: "Care is already divided between people and systems that assume one patient, one calendar, and one person who is allowed to speak. An agent can gather the date, the journey, and the question you meant to ask, which is real help. It should not become the voice that talks to the clinic, unless the person being cared for has asked for that. On a keypad of your own, what would you automate, and what stays inside the relationship?",
    fill: "#8fb89a",
    ink: "#14241c",
    sample: {
      title: "Mum",
      hint: "Lists the appointment. She decides what to ask.",
      tale: {
        prose: [
          "Your mother's appointments live first in your head, then in three apps, then in a note you cannot find when the letter arrives. The system that holds them assumes one patient and one calendar. You are two people and a waiting list.",
          "A button for that would read the date, the place, and what to bring, add the journey, and list the questions. It would stop before anyone messages the clinic.",
          "She still decides what is asked. You do not speak for her unless she asks you to. An agent can hold the information. The voice in the room remains a person's.",
        ],
        kept: [
          "You kept this care off the keypad. A button does not gather her appointments, and it does not speak to the clinic.",
          "The help was easy to want. You refused it because the asking, and who is allowed to ask, is the part of care that cannot be delegated without her.",
        ],
      },
      routine: "I keep my mother's appointments in my head, then in three apps, then in a note I cannot find.",
      difficulty: "The system assumes one patient and one calendar. We are two people and a waiting list.",
      wish: "A button that gathers the next appointment, the travel time, and the question I meant to ask.",
      trigger: "The evening before an appointment, or when a letter arrives",
      inputs: "The letter or the clinic text, her questions, how she is getting there",
      steps: [
        "Read the date, the place, and what to bring",
        "Add the travel, and a reminder for her as well as me",
        "List the questions, and stop before anyone messages the clinic",
      ],
      outcome: "We arrive with the questions written down",
      judgement: "She decides what is asked. I do not speak to the clinic unless she asks.",
    },
  },
  {
    id: "creativity",
    label: "Creativity",
    question: "Would the button only make the time, or also the work?",
    chapter: "The unfinished thing loses to anything that arrives with a deadline. An agent can clear twenty minutes, silence the other asks, and put the work in front of you. That is one offer. Another offer is that the agent finishes the line. If you made a key for this domain, would it only protect the time, or would you let it make the work?",
    fill: "#3e6eae",
    ink: "#f6f1e7",
    sample: {
      title: "Drawing",
      hint: "Clears twenty minutes. You make the line.",
      tale: {
        prose: [
          "The drawing stays on the table. You look at it, adjust one line, and then find something else to do, because starting feels like a verdict on the whole thing.",
          "A button for that would silence the other asks for twenty minutes and put the drawing in reach. It would stop when the time ends, even if the work is going well. It would not draw the line.",
          "What stays with you is the judgment of whether the line is any good. The button can make the hour. The work remains the reason the hour existed.",
        ],
        kept: [
          "You kept the drawing. A button does not clear the time, and it does not make the line. The unfinished thing stays on the table until you return to it yourself.",
          "An agent could have protected the twenty minutes. You decided that even that protection was a kind of finishing, and refused it.",
        ],
      },
      routine: "The drawing stays on the table. I look at it, adjust one line, and then find something else to do.",
      difficulty: "Starting feels like a verdict on the whole thing.",
      wish: "A button that clears twenty minutes and puts the drawing in front of me, nothing else.",
      trigger: "A free twenty minutes, while the drawing is still unfinished",
      inputs: "The drawing, a timer, and whatever else is asking for the same twenty minutes",
      steps: [
        "Silence other notifications for twenty minutes",
        "Put the drawing in reach",
        "Stop when the timer ends, even if it is going well",
      ],
      outcome: "The drawing is continued, not finished",
      judgement: "I decide if the line is any good. The button only makes the time.",
    },
  },
  {
    id: "rest",
    label: "Rest",
    question: "What would you let a button end?",
    chapter: "Rest has no incoming task, so it loses to anything that does. An agent can close the feed, dim the room, and refuse to offer you anything new. It can also congratulate you, or score the night, and in doing so turn rest into another job. What would you let a button end, and what would you keep as your own choice to begin again?",
    fill: "#6e6796",
    ink: "#f6f1e7",
    sample: {
      title: "Sleep",
      hint: "Closes the feed. You can open it again.",
      tale: {
        prose: [
          "At eleven you mean to sleep, and instead the feed continues until the day has no edge. Rest arrives with no request of its own, so anything with a small red mark can take it.",
          "A button for that would close the feed and dim the room. It would offer nothing new, and it would not congratulate you for stopping.",
          "If you open the feed again, that remains your choice. An agent can end the supply of the next thing. It should not become the voice that tells you whether the night was a success.",
        ],
        kept: [
          "You kept the night. A button does not close the feed and does not dim the room for you. Stopping, and beginning again, stay decisions you make without a score.",
          "The agent could have been useful exactly because rest is so easy to lose. You refused the button so that rest would not become another task performed correctly.",
        ],
      },
      routine: "At eleven I mean to sleep, and instead I scroll until the day has no edge.",
      difficulty: "Rest has no incoming task, so it loses to anything with a red dot.",
      wish: "A button that ends the feed and dims the room, and does not congratulate me.",
      trigger: "11pm, or when the feed is opened after 10:30",
      inputs: "The time, and whether I have already said I was going to sleep",
      steps: [
        "Close the feed",
        "Dim the screen",
        "Offer nothing new",
      ],
      outcome: "The day ends, without a score",
      judgement: "If I open it again, that is my choice. Do not nag.",
    },
  },
  {
    id: "company",
    label: "Company",
    question: "What part of the asking would you automate?",
    chapter: "Inside a company, a decision often moves only by being asked again, until someone in a meeting is willing to say yes or no. An agent can name the one person who is allowed to decide and stop the question from spreading to everyone else. It cannot be the decision. If this were your key, what would you automate about the asking, and what would you leave with the people who still have to answer?",
    fill: "#7f93a3",
    ink: "#172028",
    sample: {
      title: "Approval",
      hint: "Names who can say yes. They still decide.",
      tale: {
        prose: [
          "A decision needs a yes. You write the note, send it upward, and it sits until a meeting, because nobody is sure who is allowed to answer. Everyone asks someone else, and the asking becomes the work.",
          "A button for that would state the decision in one sentence, name the single person who can say yes, and wait. It would not ask a second person.",
          "The company still decides. The button only stops the question from multiplying. An agent can locate authority. It should not borrow it.",
        ],
        kept: [
          "You kept this decision off the keypad. A button does not name the approver, and it does not say yes. The waiting, and the responsibility for ending it, stay with the people who hold them.",
          "The automation was only of the asking. Even that seemed, on reflection, like a way of pretending the decision had already been made.",
        ],
      },
      routine: "A decision needs sign-off. I write the note, send it upward, and it sits until a meeting.",
      difficulty: "Nobody is sure who is allowed to say yes, so everyone asks someone else.",
      wish: "A button that names the one person who can decide, and stops the thread until they do.",
      trigger: "When a request has been waiting more than two days",
      inputs: "The request, the amount or the risk, and who has already been asked",
      steps: [
        "State the decision in one sentence",
        "Name the single person who can say yes",
        "Wait. Do not ask a second person",
      ],
      outcome: "A yes, a no, or a dated wait",
      judgement: "The company still decides. The button only stops the asking from spreading.",
      symbol: "company",
      decider: "company",
    },
  },
];

const PLAY_CHOICES = [
  {
    id: "list",
    label: "Let a rule fill the grocery list",
    time: "+12 minutes",
    connection: "A small detail still needs a person",
    control: "One preference handed off",
    change: "The checks appear on their own. The cheaper milk lands. Nia comes back for Jo’s oat milk.",
    routine: ["A rule fills the basket", "It swaps Jo’s oat milk for the cheaper one", "Nia corrects one item before Jo arrives"],
  },
  {
    id: "reply",
    label: "Let a button reply to Jo",
    time: "+5 minutes",
    connection: "Jo’s question is still unanswered",
    control: "Nia’s voice handed off",
    change: "A hello leaves in a second. Jo’s question stays on the phone, still waiting.",
    routine: ["A reply goes out in six seconds", "It doesn’t answer Jo’s question", "Nia has to write again, in her own words"],
  },
  {
    id: "human",
    label: "Keep the message human",
    time: "No minutes saved",
    connection: "The plan feels clear between them",
    control: "Nia chooses what to say",
    change: "Nia stays with the message. The clock barely moves. Jo gets the answer and comes to the door.",
    routine: ["Nia reads Jo’s whole message", "She replies that the kid can come", "They know what the evening looks like"],
  },
];

const SYMBOLS = [
  ["work", "Work"],
  ["home", "Home"],
  ["relationships", "Relationships"],
  ["care", "Care"],
  ["creativity", "Make"],
  ["rest", "Rest"],
  ["company", "Company"],
  ["letter", "Letter"],
  ["phone", "Call"],
  ["check", "Yes"],
  ["pause", "Wait"],
  ["clock", "Time"],
  ["plant", "Grow"],
  ["box", "Thing"],
  ["star", "Wish"],
  ["human", "Person"],
];

const DECIDERS = [
  ["me", "Me", "I still decide"],
  ["someone", "Someone else", "Another person has to agree"],
  ["company", "The company", "A role, a policy, or a meeting decides"],
];

const ICONS = {
  work: "M8 7V5h8v2M4 7h16v12H4zM4 12h16",
  home: "M4 11 12 4l8 7v9H4zM10 20v-6h4v6",
  relationships: "M5.5 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM14.5 8.2a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0zM2.8 19.4c.6-2.7 2.1-4 4.3-4 2.1 0 3.6 1.3 4.2 4M12.2 19.4c.4-2.1 1.6-3.2 3.4-3.2 1.7 0 2.9 1.1 3.4 3.2",
  care: "M12 19s-6.5-4-6.5-8.2A3.4 3.4 0 0 1 12 8a3.4 3.4 0 0 1 6.5 2.8C18.5 15 12 19 12 19z",
  creativity: "M14.5 5.5 18 9l-9 9H5.5v-3.5zM12.5 7.5l3 3",
  rest: "M16 4a7.5 7.5 0 1 0 5 12.5A7 7 0 0 1 16 4z",
  company: "M4 21V8l5-4 5 4v13M14 21V11h6v10M7.5 12h2M7.5 16h2M16.5 14h2M16.5 17h2",
  trigger: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18",
  inputs: "M4 12h16v7H4zM4 12l2.5-5h11L20 12",
  steps: "M8 7h12M8 12h12M8 17h12M4.5 7h.1M4.5 12h.1M4.5 17h.1",
  outcome: "M6 20V4h8l4 4v12zM14 4v4h4",
  human: "M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5.5 20c1.2-3.4 3.2-5 6.5-5s5.3 1.6 6.5 5",
  me: "M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5.5 20c1.2-3.4 3.2-5 6.5-5s5.3 1.6 6.5 5",
  someone: "M8 11a2.3 2.3 0 1 0 0-4.6A2.3 2.3 0 0 0 8 11zM16.2 10.2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3.5 19c.7-2.8 2.3-4.2 4.8-4.2 1.1 0 2.1.4 2.9 1M12 19c.5-2 1.7-3.1 3.4-3.1 1.9 0 3.3 1 4.3 3.1",
  letter: "M4 6h16v12H4zM4 7l8 6 8-6",
  phone: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
  check: "M5 12.5 9.5 17 19 7",
  pause: "M8 5v14M16 5v14",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18",
  plant: "M12 21V11M12 15c-4 0-6-2.5-6-6 4 0 6 2.5 6 6zM12 13c4 0 6-2.5 6-6-4 0-6 2.5-6 6z",
  box: "M12 3 20 7v10l-8 4-8-4V7zM12 12v9M4 7l8 5 8-5",
  star: "M12 3.5 14.2 9h5.8l-4.7 3.6 1.8 5.7L12 15.2 6.9 18.3 8.7 12.6 4 9h5.8z",
  custom: "M5 19 8 18 18 8l-2-2L6 16z",
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let state = load();
let playTimer = null;
let playhead = 0;
let pointerDrag = null;
let suppressClick = false;
let wheelSession = 0;
let pressedKey = null;
let rotorFrame = 0;
let storyChoice = null;
let audioContext = null;
let pointerPulseTimer = null;
let soundMuted = false;
let spinDirection = 1;
try { soundMuted = localStorage.getItem("a-button-for-that/muted") === "1"; } catch { /* storage is optional */ }

function uid() {
  if (window.crypto?.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function areaById(id) {
  return AREAS.find((area) => area.id === id) || AREAS[0];
}

function keyName(routine) {
  return routine?.title || "Key";
}

function keyHint(routine) {
  if (!routine) return "This key is empty. Nothing has been given to an agent.";
  const area = areaById(routine.area);
  if (!routine.offshoot && routine.title === area.sample.title && area.sample.tale?.prose?.[0]) {
    return area.sample.tale.prose[0];
  }
  if (routine.offshoot) return routine.routine || `${keyName(routine)}. ${routine.forLine || ""}`.trim();
  if (routine.hint) return routine.hint;
  if (routine.title === area.sample.title && area.sample.hint) return area.sample.hint;
  return area.sample.hint || "A key from the wheel.";
}

function storyBeats(routine) {
  if (!routine) return null;
  const area = areaById(routine.area);
  const yours = routine.disposition === "human";
  if (routine.offshoot) {
    return {
      kicker: `${keyName(routine)}. ${routine.forLine || area.label}`,
      paragraphs: [
        routine.routine || `${area.label}. The button can ${keyName(routine).toLowerCase()}.`,
        "The large wheel chose the part of life. The three small wheels answered three questions: how it feels, who it is for, and what the button can do. That answer is this key.",
        yours
          ? "You kept this one human. It can be read, and it was not handed over."
          : "You can keep this human. The key stays as a note, and the hour stays with a person.",
      ],
    };
  }
  const tale = routine.title === area.sample.title ? area.sample.tale : null;
  if (tale) {
    return { kicker: `${area.label}. ${keyName(routine)}`, paragraphs: yours ? tale.kept : tale.prose };
  }
  const written = [routine.routine, routine.wish, yours ? "You kept this human. It was shaped far enough to see what a button would take, and then refused." : routine.judgement].filter(Boolean);
  return {
    kicker: `${area.label}. ${keyName(routine)}`,
    paragraphs: written.length ? written : ["This is an hour that keeps returning, and a button has been imagined for it."],
  };
}

function renderStory(routine, empty) {
  if (empty) {
    return h("article", { class: "key-story", "aria-live": "polite" },
      h("h2", {}, "An empty key"),
      h("p", {}, "Nothing has been handed to an agent here. On a keypad, an empty key is not a task you forgot to assign. It is a place you looked at and decided to leave open, which is its own account of a life."));
  }
  const beats = storyBeats(routine);
  if (!beats) {
    return h("article", { class: "key-story", "aria-live": "polite" },
      h("h2", {}, "An hour, held"),
      h("p", {}, "Choose a key. The light on it is the part of life from the large wheel. The word is what the button can do. Read who it is for, and what you would still do yourself. A key marked Yours was kept human."));
  }
  return h("article", { class: "key-story", "aria-live": "polite" },
    h("h2", {}, beats.kicker),
    beats.paragraphs.map((paragraph) => h("p", {}, paragraph)));
}

function keyFace(routine) {
  const area = routine ? areaById(routine.area) : null;
  if (!area) return {};
  const glow = routine.tone || area.fill;
  return { "--glow": glow, "--face": "#f4f1ea", "--ink": "#1c1c1c", color: "#1c1c1c" };
}

function defaultState() {
  return {
    version: 1,
    screen: "wheel",
    rotation: 0,
    focusIndex: 0,
    draft: null,
    unfinished: [],
    routines: [],
    keys: Array(MAX_KEYS).fill(null),
    keypadName: "",
    selectedKey: 0,
    panel: { mode: "idle", id: null, keyIndex: null },
    message: "",
    notice: "",
    confirmSample: false,
    confirmReset: false,
    pendingRemove: null,
  };
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return sanitize(JSON.parse(raw));
  } catch {
    return defaultState();
  }
}

function sanitize(saved) {
  const next = defaultState();
  if (!saved || typeof saved !== "object") return next;
  next.rotation = Number.isFinite(Number(saved.rotation)) ? Number(saved.rotation) : 0;
  next.focusIndex = mod(Number(saved.focusIndex) || 0, AREAS.length);
  next.screen = ["wheel", "words", "command", "place"].includes(saved.screen) ? saved.screen : "wheel";
  next.draft = saved.draft && typeof saved.draft === "object" ? saved.draft : null;
  next.unfinished = Array.isArray(saved.unfinished) ? saved.unfinished : [];
  next.routines = Array.isArray(saved.routines) ? saved.routines.filter((item) => item && item.id) : [];
  next.keypadName = typeof saved.keypadName === "string" ? saved.keypadName : "";
  next.selectedKey = mod(Number(saved.selectedKey) || 0, MAX_KEYS);
  next.keys = Array(MAX_KEYS).fill(null);
  if (Array.isArray(saved.keys)) {
    saved.keys.slice(0, MAX_KEYS).forEach((id, index) => { next.keys[index] = id || null; });
  }
  const ids = new Set(next.routines.map((routine) => routine.id));
  next.keys = next.keys.map((id) => (ids.has(id) ? id : null));
  const legacyNames = {
    "Monday inbox": "Inbox",
    "Sunday reset": "Tidy",
    "Call my sister": "Sister",
    "Mum's appointments": "Mum",
    "The unfinished drawing": "Drawing",
    "The 11pm scroll": "Sleep",
    "The approval": "Approval",
  };
  next.routines.forEach((routine) => {
    if (legacyNames[routine.title]) routine.title = legacyNames[routine.title];
    if (routine.offshoot) {
      const words = String(routine.title || "").toLowerCase().split(/\s+/);
      const feelings = { pale: "Calm", calm: "Calm", warm: "Warm", hot: "Urgent", urgent: "Urgent", flare: "Tense", sharp: "Tense", tense: "Tense", cold: "Cold" };
      const acts = { sort: "Sort", reply: "Answer", answer: "Answer", wait: "Wait", yes: "Agree", agree: "Agree" };
      const feel = feelings[words[0]];
      const act = acts[words[1]] || acts[words[0]];
      if (feel && acts[words[1]]) routine.title = act;
      const whoLine = routine.decider === "company" ? "for work" : routine.decider === "someone" ? "for them" : "for you";
      routine.forLine = whoLine;
      if (feel || /pale|flare|sharp|company|someone else|attribute/i.test(routine.routine || "")) {
        routine.routine = `${areaById(routine.area).label}. It feels ${(feel || "warm").toLowerCase()}. It is ${whoLine}. The button can ${String(routine.title).toLowerCase()}.`;
      }
    }
    const area = areaById(routine.area);
    if (!routine.hint && routine.title === area.sample.title) routine.hint = area.sample.hint;
    if (!Array.isArray(routine.steps)) routine.steps = [];
    const idx = next.keys.indexOf(routine.id);
    if (idx >= 0) {
      routine.disposition = "keyed";
      routine.keyIndex = idx;
    } else if (routine.disposition === "keyed") {
      routine.disposition = "unassigned";
      routine.keyIndex = null;
    }
  });
  if (["words", "command", "place"].includes(next.screen) && !next.draft) {
    next.screen = next.routines.length ? "keypad" : "wheel";
  }
  return next;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      rotation: state.rotation,
      focusIndex: state.focusIndex,
      screen: state.screen,
      draft: state.draft,
      unfinished: state.unfinished,
      routines: state.routines,
      keys: state.keys,
      keypadName: state.keypadName,
      selectedKey: state.selectedKey,
    }));
  } catch {
    /* Private mode can refuse storage. The piece still runs. */
  }
}

function announce(text) {
  const live = document.getElementById("live");
  if (live) live.textContent = text;
}

function wakeAudio() {
  if (soundMuted) return;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  if (!audioContext) audioContext = new AudioCtor();
  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
}

function playWheelTick() {
  tickPointer();
  if (soundMuted || !audioContext || audioContext.state !== "running") return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(1180, now);
  oscillator.frequency.exponentialRampToValueAtTime(620, now + 0.026);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.035, now + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.034);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.04);
}

function playWheelBuzzer() {
  if (soundMuted || !audioContext || audioContext.state !== "running") return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(178, now);
  oscillator.frequency.exponentialRampToValueAtTime(112, now + 0.19);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.23);
}

function tickPointer() {
  const notch = document.querySelector(".notch");
  if (!notch) return;
  notch.classList.remove("is-ticking");
  notch.style.setProperty("--tick-angle", spinDirection >= 0 ? "14deg" : "-14deg");
  void notch.offsetWidth;
  notch.classList.add("is-ticking");
  window.clearTimeout(pointerPulseTimer);
  pointerPulseTimer = window.setTimeout(() => notch.classList.remove("is-ticking"), 90);
}

function toggleSound() {
  soundMuted = !soundMuted;
  try { localStorage.setItem("a-button-for-that/muted", soundMuted ? "1" : "0"); } catch { /* sound still works for this visit */ }
  const button = document.getElementById("sound-toggle");
  if (button) {
    button.textContent = soundMuted ? "Sound off" : "Sound on";
    button.setAttribute("aria-label", `Wheel sound ${soundMuted ? "off" : "on"}`);
    button.setAttribute("aria-pressed", String(!soundMuted));
  }
  if (!soundMuted) wakeAudio();
}

function pixelMarks(index, item) {
  const mark = item.ink === "#f6f1e7" ? "#fffdf8" : "#241e18";
  return s("g", { class: "pixel-marks", transform: `rotate(${index * sliceAngle()} ${CX} ${CY})`, "aria-hidden": "true" },
    s("rect", { x: "282", y: "42", width: "8", height: "8", fill: mark }),
    s("rect", { x: "326", y: "57", width: "5", height: "5", fill: mark }),
    s("rect", { x: "296", y: "77", width: "4", height: "4", fill: mark }),
    s("rect", { x: "344", y: "91", width: "7", height: "7", fill: mark }));
}

function h(tag, props = {}, ...children) {
  const node = props.xmlns ? document.createElementNS(props.xmlns, tag) : document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (value == null || value === false || key === "xmlns") continue;
    if (key === "class") node.setAttribute("class", value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
    else if (key === "value" && "value" in node) node.value = value;
    else if (key === "style" && typeof value === "object") {
      for (const [prop, val] of Object.entries(value)) {
        if (prop.startsWith("--")) node.style.setProperty(prop, val);
        else node.style[prop] = val;
      }
    } else node.setAttribute(key, value === true ? "" : String(value));
  }
  for (const child of children.flat(Infinity)) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

function s(tag, props = {}, ...children) {
  return h(tag, { ...props, xmlns: SVG_NS }, ...children);
}

function sliceAngle() {
  return 360 / AREAS.length;
}

function icon(name) {
  return h("svg", {
    xmlns: SVG_NS,
    viewBox: "0 0 24 24",
    class: "icon",
    "aria-hidden": "true",
  }, s("path", {
    d: ICONS[name] || ICONS.star,
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.7",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
  }));
}

function markSvg(mark) {
  const bits = String(mark || "").padEnd(64, "0").slice(0, 64);
  const cells = [];
  for (let i = 0; i < 64; i += 1) {
    if (bits[i] !== "1") continue;
    cells.push(s("rect", {
      x: String(i % 8),
      y: String(Math.floor(i / 8)),
      width: "1",
      height: "1",
      fill: "currentColor",
    }));
  }
  return h("svg", { xmlns: SVG_NS, viewBox: "0 0 8 8", class: "mark", "aria-hidden": "true" }, cells);
}

function hasMark(item) {
  return String(item?.mark || "").includes("1");
}

function glyphFor(item) {
  if (hasMark(item)) return markSvg(item.mark);
  return icon(item?.symbol || item?.area || "star");
}

function deciderLabel(id) {
  return DECIDERS.find(([key]) => key === id)?.[1] || "Me";
}

function getRoutine(id) {
  return state.routines.find((routine) => routine.id === id) || null;
}

function newDraft(areaId) {
  return {
    id: uid(),
    area: areaId,
    title: "",
    routine: "",
    difficulty: "",
    wish: "",
    trigger: "",
    inputs: "",
    steps: ["", "", ""],
    outcome: "",
    judgement: "",
    symbol: areaId,
    mark: "",
    decider: areaId === "company" ? "company" : "me",
    disposition: null,
    keyIndex: null,
    scaffolded: false,
  };
}

function normalizeDraft(draft) {
  if (!draft) return draft;
  if (!Array.isArray(draft.steps) || draft.steps.length === 0) draft.steps = ["", "", ""];
  if (!draft.symbol) draft.symbol = draft.area;
  if (draft.mark == null) draft.mark = "";
  if (!draft.decider) draft.decider = draft.area === "company" ? "company" : "me";
  return draft;
}

function isDirty(draft) {
  if (!draft) return false;
  return [draft.title, draft.routine, draft.difficulty, draft.wish, draft.trigger, draft.inputs, draft.outcome, draft.judgement]
    .some((value) => String(value || "").trim()) || draft.steps?.some((step) => String(step || "").trim());
}

function firstSentence(text) {
  return String(text || "").split(/[.!?]/)[0].trim();
}

function deriveTitle(draft) {
  if (draft.title?.trim()) return draft.title.trim();
  const source = draft.wish || draft.routine || "";
  const words = source.trim().split(/\s+/).slice(0, 5).join(" ");
  return words || "Untitled";
}

function scaffoldFromWords(draft) {
  const routineLine = firstSentence(draft.routine);
  const wishLine = firstSentence(draft.wish);
  return {
    trigger: routineLine ? `The next time this begins: ${routineLine}` : "",
    inputs: draft.difficulty.trim(),
    steps: [
      wishLine ? `Do only this: ${wishLine}` : "Name the smallest action",
      "Stop and ask before anything leaves the room",
      "End while the rest is still a person's to do",
    ],
    outcome: wishLine,
  };
}

function stashDraft() {
  const draft = state.draft;
  if (!draft) return;
  if (!isDirty(draft)) {
    state.unfinished = state.unfinished.filter((item) => item.id !== draft.id);
    state.draft = null;
    return;
  }
  const index = state.unfinished.findIndex((item) => item.id === draft.id);
  if (index >= 0) state.unfinished[index] = draft;
  else state.unfinished.push(draft);
  state.draft = null;
}

function polar(radius, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)];
}

function slicePath(a0, a1) {
  const large = a1 - a0 > 180 ? 1 : 0;
  const [x0, y0] = polar(R1, a0);
  const [x1, y1] = polar(R1, a1);
  const [x2, y2] = polar(R0, a1);
  const [x3, y3] = polar(R0, a0);
  return `M ${x0} ${y0} A ${R1} ${R1} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${R0} ${R0} 0 ${large} 0 ${x3} ${y3} Z`;
}

function indexFromRotation(rotation) {
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < AREAS.length; i += 1) {
    const target = -i * sliceAngle();
    const dist = Math.abs(mod(rotation - target + 180, 360) - 180);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  }
  return best;
}

function pointerAngle(event, el) {
  const rect = el.getBoundingClientRect();
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);
  return { deg: (Math.atan2(dx, -dy) * 180) / Math.PI, norm: Math.hypot(dx, dy) / (rect.width / 2) };
}

function onRing(norm) {
  return norm >= R0 / 320 - 0.02 && norm <= R1 / 320 + 0.06;
}

function chip(area) {
  return h("span", { class: "chip", style: { background: area.fill, color: area.ink } }, icon(area.id), area.label);
}

function messageEl() {
  return h("p", { id: "form-message", class: "message", role: "status" }, state.message || "");
}

function field(options) {
  const props = {
    id: options.id,
    value: options.value ?? "",
    placeholder: options.placeholder || "",
    oninput: (event) => {
      options.oninput(event.target.value);
      state.message = "";
      const message = document.getElementById("form-message");
      if (message) message.textContent = "";
      save();
    },
  };
  const control = options.multiline
    ? h("textarea", { ...props, rows: String(options.rows || 3) })
    : h("input", { ...props, type: "text", maxlength: options.maxlength || "280" });
  return h("label", { class: "field" },
    h("span", { class: "field-label" }, options.iconName ? icon(options.iconName) : null, options.label),
    options.hint ? h("span", { class: "field-hint" }, options.hint) : null,
    control);
}

function visibleCount() {
  let last = -1;
  for (let index = 0; index < MAX_KEYS; index += 1) {
    if (state.keys[index]) last = index;
  }
  let count = Math.max(MIN_KEYS, last + 1);
  if (state.screen === "place" && state.draft) {
    const owned = state.keys.indexOf(state.draft.id);
    const blocked = state.keys.slice(0, count).every((id) => id && id !== state.draft.id);
    if (blocked && owned < 0 && count < MAX_KEYS) count += 1;
  }
  return count;
}

function goHome() {
  if (state.screen === "wheel") return;
  stashDraft();
  state.screen = "wheel";
  state.message = "";
  state.confirmSample = false;
  save();
  render();
}

function paintHomeLink() {
  const link = document.getElementById("home-link");
  if (!link) return;
  const home = state.screen === "wheel";
  link.textContent = home ? "A Button for That" : "Start";
  link.classList.toggle("is-home", home);
  if (home) link.setAttribute("aria-current", "page");
  else link.removeAttribute("aria-current");
}

function render() {
  stopPlayback();
  stopMixSpins();
  paintHomeLink();
  const screens = {
    wheel: renderWheel,
    mix: renderMix,
    play: renderPlay,
    words: renderWords,
    command: renderCommand,
    place: renderPlace,
    keypad: renderKeypad,
  };
  document.getElementById("app").replaceChildren((screens[state.screen] || renderWheel)());
  if (state.screen === "wheel") {
    mountWheel();
    mountLever();
    ["heat", "who", "off"].forEach(paintMixLabels);
  } else if (state.screen === "mix") ["heat", "who", "off"].forEach(paintMixLabels);
  else if (pressedKey == null && !(state.screen === "command" && state.drawing)) {
    document.getElementById("screen-title")?.focus({ preventScroll: true });
  }
  if (pressedKey != null && (state.screen === "keypad" || state.screen === "wheel")) {
    const index = pressedKey;
    pressedKey = null;
    const button = document.querySelector(`[data-key="${index}"]`);
    button?.classList.add("is-down");
    button?.focus({ preventScroll: true });
    window.setTimeout(() => document.querySelector(`[data-key="${index}"]`)?.classList.remove("is-down"), 160);
  }
  if (state.screen === "keypad" && state.panel.mode === "sim") startPlayback();
}

function pathMap(here) {
  const steps = [
    ["area", "Area", "work"],
    ["words", "Words", "letter"],
    ["command", "Command", "steps"],
    ["key", "Key", "box"],
  ];
  return h("ol", { class: "path", "aria-label": "Where you are" },
    steps.map(([id, label, glyph]) => h("li", {
      class: id === here ? "is-here" : "",
      "aria-current": id === here ? "step" : null,
    },
      h("span", { class: "path-dot", "aria-hidden": "true" }, icon(glyph)),
      label)));
}

function conceptDiagram() {
  return h("figure", { class: "concept-wrap" },
    h("figcaption", {}, "One example of the whole piece"),
    h("div", { class: "concept" },
      h("div", { class: "concept-card" },
        h("span", { class: "concept-kicker" }, "1. In your words"),
        h("p", {}, "Every Monday I lose an hour in the inbox, deciding what can wait.")),
      h("span", { class: "concept-arrow", "aria-hidden": "true" }, "→"),
      h("div", { class: "concept-card" },
        h("span", { class: "concept-kicker" }, "2. As a command"),
        h("ul", { class: "concept-beats" },
          h("li", {}, icon("trigger"), "When Monday’s inbox opens"),
          h("li", {}, icon("steps"), "Sort what needs you from what can wait"),
          h("li", {}, icon("outcome"), "An hour back, and no mail sent"),
          h("li", { class: "is-human" }, icon("human"), "You still send every reply"))),
      h("span", { class: "concept-arrow", "aria-hidden": "true" }, "→"),
      h("div", { class: "concept-key" },
        h("span", { class: "concept-kicker" }, "3. A key"),
        h("strong", {}, "Monday inbox"),
        h("span", { class: "stamp" }, "Preview"))),
    h("p", { class: "concept-note" }, "Pressing the key walks those lines. It does not open the inbox, send mail, or decide what is urgent. The command is the shape of an automation. The last line is the part that stays a person."),
    h("ul", { class: "endings" },
      h("li", {},
        h("span", { class: "mini-key", "aria-hidden": "true" }, icon("work")),
        h("span", {}, h("strong", {}, "On a key"), h("span", {}, "Press it, and the command is rehearsed."))),
      h("li", {},
        h("span", { class: "mini-key is-empty", "aria-hidden": "true" }, "Open"),
        h("span", {}, h("strong", {}, "Left open"), h("span", {}, "A key can stay empty. That is a choice."))),
      h("li", {},
        h("span", { class: "mini-slip", "aria-hidden": "true" }, icon("human")),
        h("span", {}, h("strong", {}, "Kept human"), h("span", {}, "The routine is read. It never becomes a button.")))));
}

function pressLegend() {
  const beats = [
    ["box", "Press"],
    ["trigger", "When"],
    ["steps", "Steps"],
    ["outcome", "Result"],
    ["human", "Still a person"],
  ];
  return h("div", { class: "legend" },
    h("p", { class: "legend-label" }, "What a press does"),
    h("ol", { class: "legend-flow" },
      beats.map(([glyph, label]) => h("li", {}, icon(glyph), label))));
}

const MIX = {
  heat: [
    { id: "calm", label: "Calm", short: "Calm", color: "#d5ebe4", ink: "#14241c", temp: 0.2 },
    { id: "warm", label: "Warm", short: "Warm", color: "#e4b15a", ink: "#2a2116", temp: 0.48 },
    { id: "urgent", label: "Urgent", short: "Urgent", color: "#e07a5f", ink: "#2a1612", temp: 0.72 },
    { id: "tense", label: "Tense", short: "Tense", color: "#9a4638", ink: "#fff8e8", temp: 0.9 },
    { id: "cold", label: "Cold", short: "Cold", color: "#3e6eae", ink: "#f6f1e7", temp: 0.55, cool: true },
  ],
  who: [
    { id: "you", label: "Me", short: "Me", line: "for you", color: "#f3e6c8", ink: "#241e18" },
    { id: "else", label: "Them", short: "Them", line: "for them", color: "#e7b8c4", ink: "#2a141c" },
    { id: "company", label: "Work", short: "Work", line: "for work", color: "#b7c4ce", ink: "#172028" },
  ],
  off: [
    { id: "sort", label: "Sort", short: "Sort", verb: "sort", symbol: "steps", color: "#e7d7b0", ink: "#241e18" },
    { id: "reply", label: "Answer", short: "Answer", verb: "answer", symbol: "letter", color: "#e7c2b0", ink: "#241e18" },
    { id: "wait", label: "Wait", short: "Wait", verb: "wait", symbol: "pause", color: "#c5d4c8", ink: "#14241c" },
    { id: "yes", label: "Agree", short: "Agree", verb: "agree", symbol: "check", color: "#c9c4dc", ink: "#241e18" },
  ],
};

const MIX_PEOPLE = ["You", "Someone else", "The company"];
const MIX_STAKES = ["Time", "Bond", "Say"];
let mix = { heat: 2, who: 0, off: 1 };
let mixRot = { heat: 0, who: 0, off: 0 };
const mixFrames = { heat: 0, who: 0, off: 0 };
const mixTokens = { heat: 0, who: 0, off: 0 };

function mixCount(axis) {
  return MIX[axis].length;
}

function mixAngle(axis) {
  return 360 / mixCount(axis);
}

function stopMixSpins() {
  Object.keys(mixFrames).forEach((axis) => {
    cancelAnimationFrame(mixFrames[axis]);
    mixTokens[axis] += 1;
  });
}

function hexToRgb(hex) {
  const n = hex.replace("#", "");
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}

function rgbToHex(rgb) {
  return `#${rgb.map((value) => Math.round(Math.max(0, Math.min(255, value))).toString(16).padStart(2, "0")).join("")}`;
}

function lerpRgb(a, b, t) {
  return a.map((value, index) => value + (b[index] - value) * t);
}

function heatPaint(temp, swatch, cool) {
  const paper = [243, 236, 223];
  const mid = hexToRgb(swatch);
  const deep = mid.map((value) => value * (cool ? 0.42 : 0.34));
  const rgb = temp < 0.62 ? lerpRgb(paper, mid, temp / 0.62) : lerpRgb(mid, deep, (temp - 0.62) / 0.38);
  return rgbToHex(rgb);
}

function cellTemp(person, stake) {
  const heat = MIX.heat[mix.heat];
  const off = MIX.off[mix.off].id;
  const base = heat.temp;
  const away = (person - mix.who + 3) % 3;
  let temp = base * 0.5;
  if (stake === 0) temp = 0.08 + away * (0.26 + base * 0.2);
  if (stake === 2) temp = 0.2 + base * 0.68 - away * 0.2;
  if (stake === 1) {
    const heated = off === "wait" || off === "yes" ? 2 : off === "sort" ? 0 : 1;
    temp = 0.16 + base * 0.58 - Math.abs(person - heated) * 0.22;
    if (off === "yes" && person === 1) temp = 0.08;
  }
  if (off === "yes" && stake === 2 && person === 2) temp = Math.max(temp, 0.76 + base * 0.16);
  return Math.max(0.04, Math.min(0.98, temp));
}

function mixKeyword() {
  const heat = MIX.heat[mix.heat];
  const off = MIX.off[mix.off];
  return `${heat.label} ${off.short.toLowerCase()}`;
}

function mixAttribute() {
  const area = AREAS[state.focusIndex];
  const heat = MIX.heat[mix.heat];
  const who = MIX.who[mix.who];
  const off = MIX.off[mix.off];
  return {
    title: off.short,
    forLine: who.line,
    sentence: `${area.label}. It feels ${heat.short.toLowerCase()}. It is ${who.line}. The button can ${off.verb}. Pull the lever and this becomes a key.`,
    symbol: off.symbol,
    tone: area.fill,
    ink: "#1c1c1c",
    who: who.label,
    area: area.id,
    decider: who.id === "you" ? "me" : who.id === "company" ? "company" : "someone",
  };
}

function mixSentence() {
  return mixAttribute().sentence;
}

function mixIndexFromRot(axis, rotation) {
  const count = mixCount(axis);
  const span = 360 / count;
  let best = 0;
  let bestDist = Infinity;
  for (let index = 0; index < count; index += 1) {
    const target = -index * span;
    const dist = Math.abs(mod(rotation - target + 180, 360) - 180);
    if (dist < bestDist) {
      bestDist = dist;
      best = index;
    }
  }
  return best;
}

function mixPolar(radius, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [80 + radius * Math.cos(rad), 80 + radius * Math.sin(rad)];
}

function mixSlicePath(index, count) {
  const span = 360 / count;
  const a0 = index * span - span / 2 + 2;
  const a1 = index * span + span / 2 - 2;
  const large = a1 - a0 > 180 ? 1 : 0;
  const [x0, y0] = mixPolar(74, a0);
  const [x1, y1] = mixPolar(74, a1);
  const [x2, y2] = mixPolar(34, a1);
  const [x3, y3] = mixPolar(34, a0);
  return `M ${x0} ${y0} A 74 74 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A 34 34 0 ${large} 0 ${x3} ${y3} Z`;
}

function paintMixLabels(axis) {
  document.querySelectorAll(`[data-mix-axis="${axis}"]`).forEach((node) => {
    const index = Number(node.dataset.mixIndex);
    const screen = mod(index * mixAngle(axis) + mixRot[axis], 360);
    const flip = screen > 90 && screen < 270 ? 180 : 0;
    node.setAttribute("transform", `rotate(${flip} 80 28)`);
  });
}

function paintMixArt() {
  const art = document.getElementById("mix-art");
  if (!art) return;
  art.replaceChildren(mixPicture());
}

function animateMix(axis, target, landed, duration, onDone) {
  cancelAnimationFrame(mixFrames[axis]);
  const token = mixTokens[axis] + 1;
  mixTokens[axis] = token;
  const from = mixRot[axis];
  const delta = target - from;
  const start = performance.now();
  const total = reduceMotion.matches ? 0 : duration;
  let lastIndex = mixIndexFromRot(axis, from);
  spinDirection = delta >= 0 ? 1 : -1;
  const step = (now) => {
    if (token !== mixTokens[axis]) return;
    const progress = total === 0 ? 1 : Math.min(1, (now - start) / total);
    mixRot[axis] = from + delta * wheelEase(progress, true);
    const rotor = document.getElementById(`mix-rotor-${axis}`);
    if (rotor) rotor.style.transform = `rotate(${mixRot[axis]}deg)`;
    paintMixLabels(axis);
    const current = mixIndexFromRot(axis, mixRot[axis]);
    if (total > 0 && current !== lastIndex) {
      lastIndex = current;
      playWheelTick();
      const notch = document.getElementById(`mix-notch-${axis}`);
      if (notch) {
        notch.classList.remove("is-ticking");
        void notch.offsetWidth;
        notch.classList.add("is-ticking");
      }
    }
    if (progress < 1) mixFrames[axis] = requestAnimationFrame(step);
    else {
      mixRot[axis] = target;
      mix[axis] = landed;
      if (rotor) rotor.style.transform = `rotate(${target}deg)`;
      paintMixLabels(axis);
      const face = document.getElementById(`mix-face-${axis}`);
      if (face) face.textContent = MIX[axis][landed].short;
      playWheelBuzzer();
      paintMixArt();
      if (onDone) onDone();
    }
  };
  mixFrames[axis] = requestAnimationFrame(step);
}

function spinOne(axis, duration, onDone) {
  wakeAudio();
  const count = mixCount(axis);
  const target = Math.floor(Math.random() * count);
  const dest = -target * mixAngle(axis);
  const extra = mod(dest - mixRot[axis], 360);
  const turns = reduceMotion.matches ? 0 : 3 + Math.floor(Math.random() * 2);
  animateMix(axis, mixRot[axis] + turns * 360 + extra, target, duration ?? (1700 + Math.random() * 500), onDone);
}

function spinAllMix(onDone) {
  wakeAudio();
  let pending = 3;
  const done = () => {
    pending -= 1;
    if (pending === 0 && onDone) onDone();
  };
  ["heat", "who", "off"].forEach((axis, index) => {
    window.setTimeout(() => {
      if (state.screen !== "mix" && state.screen !== "wheel") {
        done();
        return;
      }
      spinOne(axis, reduceMotion.matches ? 0 : 1500 + index * 700, done);
    }, reduceMotion.matches ? 0 : index * 160);
  });
}

let leverBusy = false;

function throwLever() {
  if (leverBusy) return;
  leverBusy = true;
  const handle = document.getElementById("lever-handle");
  const well = document.getElementById("lever-well");
  if (handle && well) {
    const travel = Math.max(0, well.clientHeight - 64);
    handle.style.transition = reduceMotion.matches ? "none" : "top 280ms ease-in";
    handle.style.top = `${8 + travel}px`;
  }
  const start = () => spinAllMix(() => {
    leverBusy = false;
    placeMixKey();
  });
  if (reduceMotion.matches) start();
  else window.setTimeout(start, 260);
}

function mountLever() {
  const handle = document.getElementById("lever-handle");
  const well = document.getElementById("lever-well");
  if (!handle || !well || handle.dataset.bound) return;
  handle.dataset.bound = "1";
  let drag = null;
  let pulled = false;
  const reset = () => {
    handle.style.transition = reduceMotion.matches ? "none" : "top 180ms ease-out";
    handle.style.top = "8px";
  };
  handle.addEventListener("pointerdown", (event) => {
    if (leverBusy || event.button !== 0) return;
    handle.setPointerCapture(event.pointerId);
    handle.style.transition = "none";
    drag = { pointerId: event.pointerId };
  });
  handle.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const rect = well.getBoundingClientRect();
    const travel = Math.max(0, Math.min(1, (event.clientY - rect.top - 28) / Math.max(1, rect.height - 64)));
    handle.style.top = `${8 + travel * Math.max(0, rect.height - 64)}px`;
    drag.travel = travel;
  });
  handle.addEventListener("pointerup", (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const travel = drag.travel || 0;
    drag = null;
    if (travel > 0.62) {
      pulled = true;
      throwLever();
    } else reset();
  });
  handle.addEventListener("pointercancel", () => {
    drag = null;
    reset();
  });
  handle.addEventListener("click", (event) => {
    event.preventDefault();
    if (pulled) {
      pulled = false;
      return;
    }
    throwLever();
  });
}

function mixWheel(axis, title) {
  const items = MIX[axis];
  const span = mixAngle(axis);
  mixRot[axis] = -mix[axis] * span;
  const slices = items.map((item, index) => s("g", {},
    s("path", {
      d: mixSlicePath(index, items.length),
      fill: item.color,
      stroke: "#241e18",
      "stroke-width": "1.5",
    }),
    s("g", { transform: `rotate(${index * span} 80 80)` },
      s("text", {
        "data-mix-axis": axis,
        "data-mix-index": String(index),
        x: "80",
        y: "28",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        fill: item.ink,
        "font-size": item.short.length > 7 ? "9" : "11",
        "font-family": "Pixelify Sans, sans-serif",
      }, item.short))));
  return h("figure", { class: "mix-wheel" },
    h("figcaption", { class: "mix-kicker" }, title),
    h("div", { class: "mix-rotor-wrap" },
      h("div", { class: "notch mix-notch", id: `mix-notch-${axis}`, "aria-hidden": "true" }),
      s("svg", {
        class: "mix-svg",
        viewBox: "0 0 160 160",
        role: "img",
        "aria-label": `${title}. Landed on ${items[mix[axis]].label}.`,
      }, s("g", {
        id: `mix-rotor-${axis}`,
        class: "mix-rotor",
        style: { transform: `rotate(${mixRot[axis]}deg)` },
      }, slices)),
      h("div", { class: "mix-face", id: `mix-face-${axis}` }, items[mix[axis]].short)));
}

function mixOffer() {
  return mixAttribute();
}

function placeMixKey() {
  const offer = mixOffer();
  const index = state.keys.findIndex((id) => !id);
  if (index < 0) {
    state.screen = "wheel";
    state.notice = "The keypad already has six keys. Clear one, then pull the lever again.";
    state.panel = { mode: "idle", id: null, keyIndex: null };
    save();
    render();
    return;
  }
  const routine = {
    id: uid(),
    area: offer.area,
    title: offer.title,
    forLine: offer.forLine,
    routine: offer.sentence.replace(" Pull the lever and this becomes a key.", ""),
    difficulty: "",
    wish: "",
    trigger: `${offer.who} receives the hour.`,
    inputs: offer.title,
    steps: ["The short word sits on a key. It does not send anything."],
    outcome: offer.sentence,
    judgement: "Rename it, or draw another symbol. What stays a person is still yours to keep off the pad.",
    symbol: offer.symbol,
    mark: "",
    decider: offer.decider,
    disposition: "keyed",
    keyIndex: index,
    offshoot: true,
    tone: offer.tone,
    ink: offer.ink,
  };
  state.routines.push(routine);
  state.keys[index] = routine.id;
  state.screen = "wheel";
  state.panel = { mode: "offshoot", id: routine.id, keyIndex: index };
  state.notice = "The wheels landed. This is now a key.";
  state.message = "";
  save();
  render();
  document.getElementById("the-keypad")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function mixPicture() {
  const offer = mixOffer();
  const slots = state.keys.slice(0, Math.max(visibleCount(), 3));
  return h("div", { class: "mix-landing" },
    h("div", {
      class: "key is-offer",
      style: { "--tone": offer.tone, "--face": offer.tone, color: offer.ink },
    },
      h("span", { class: "key-num" }, "New"),
      h("span", { class: "key-glyph" }, icon(offer.symbol)),
      h("span", { class: "key-label" }, offer.title),
      h("span", { class: "key-area" }, offer.who)),
    h("div", { class: "mix-landing-copy" },
      h("p", { class: "mix-line" }, offer.sentence),
      h("div", { class: "actions" },
        h("button", { type: "button", class: "btn keycap", onclick: placeMixKey }, "Put this key on the keypad"),
        h("button", { type: "button", class: "btn quiet", onclick: () => go("keypad") }, "Open the keypad"))),
    h("div", { class: "housing mix-deck", "aria-label": "The keypad this key would join" },
      h("p", { class: "housing-note" }, state.keypadName || "Your keypad"),
      h("div", { class: "pad" },
        slots.map((id, index) => {
          const routine = id ? getRoutine(id) : null;
          return h("div", {
            class: `key${routine ? " has-routine" : " is-empty"}`,
            style: keyFace(routine),
          },
            h("span", { class: "key-num" }, String(index + 1)),
            routine ? h("span", { class: "key-glyph" }, glyphFor(routine)) : null,
            h("span", { class: "key-label" }, routine ? keyName(routine) : "Empty"));
        }),
        h("div", {
          class: "key is-offer",
          style: { "--tone": offer.tone, "--face": offer.tone, color: offer.ink },
        },
          h("span", { class: "key-num" }, "+"),
          h("span", { class: "key-glyph" }, icon(offer.symbol)),
          h("span", { class: "key-label" }, offer.title)))));
}

function renderMix() {
  ["heat", "who", "off"].forEach((axis) => {
    mixRot[axis] = -mix[axis] * mixAngle(axis);
  });
  return h("section", { class: "screen mix-screen" },
    h("h1", { id: "screen-title", class: "title", tabindex: "-1" }, "Three spins. One key."),
    h("div", { class: "chapter" },
      h("p", {}, "These three wheels are a smaller question than the wheel of a life. One chooses a color, which is only the feeling of the hour. One chooses who receives the time the button saves: you, someone else, or the company. One chooses the action the button actually takes, a sort, a reply, a wait, or a yes."),
      h("p", {}, "Spin them and read the sentence they make. It is not a new world. It is one key, and it can be put on the keypad beside the domains you have already named.")),
    h("div", { class: "mix-board" },
      mixWheel("heat", "Color"),
      mixWheel("who", "Who"),
      mixWheel("off", "Action")),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn keycap spin-button", onclick: spinAllMix }, "Spin all three"),
      h("button", {
        type: "button",
        id: "sound-toggle",
        class: "btn quiet sound-toggle",
        "aria-pressed": String(!soundMuted),
        "aria-label": `Wheel sound ${soundMuted ? "off" : "on"}`,
        onclick: toggleSound,
      }, soundMuted ? "Sound off" : "Sound on")),
    h("div", { id: "mix-art" }, mixPicture()),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => go("wheel") }, "Back to the wheel")));
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = String(text || "").split(/\s+/);
  let line = "";
  let drawn = 0;
  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      ctx.fillText(line, x, y + drawn * lineHeight);
      drawn += 1;
      line = word;
    } else line = next;
  });
  if (line) ctx.fillText(line, x, y + drawn * lineHeight);
  return drawn + 1;
}

function downloadKeypadImage() {
  const loose = state.routines.filter((routine) => routine.disposition === "human" || routine.disposition === "unassigned");
  const cells = state.keys.slice(0, visibleCount()).map((id, index) => {
    const routine = id ? getRoutine(id) : null;
    const face = routine ? keyFace(routine) : null;
    return {
      name: routine ? keyName(routine) : "Empty",
      mark: String(index + 1),
      glyph: routine ? (routine.symbol || routine.area || "star") : "",
      empty: !routine,
      fill: routine ? "#f4f1ea" : "#242424",
      glow: routine ? (face?.["--glow"] || "") : "",
      ink: routine ? "#1c1c1c" : "#8d887f",
    };
  });
  loose.forEach((routine) => {
    const face = keyFace(routine);
    cells.push({
      name: keyName(routine),
      mark: routine.disposition === "human" ? "Yours" : "",
      glyph: routine.symbol || routine.area || "star",
      empty: false,
      fill: "#f4f1ea",
      glow: face["--glow"] || "#e4b15a",
      ink: "#1c1c1c",
    });
  });
  const cols = 3;
  const rows = Math.max(1, Math.ceil(cells.length / cols));
  const key = 168;
  const gap = 14;
  const margin = 56;
  const housingPad = 28;
  const housingW = housingPad * 2 + cols * key + (cols - 1) * gap;
  const housingH = housingPad * 2 + 36 + rows * key + Math.max(0, rows - 1) * gap;
  const width = margin * 2 + housingW;
  const landed = [...state.routines].reverse().find((routine) => routine.offshoot);
  const caption = landed?.routine
    || "The keypad holds a domain and a manner. The hour itself was never stored here.";
  const canvas = document.createElement("canvas");
  const scale = 2;
  const captionHeight = 230;
  canvas.width = width * scale;
  canvas.height = (margin + housingH + captionHeight + margin) * scale;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#efe6d6";
  ctx.fillRect(0, 0, width, margin + housingH + captionHeight + margin);
  for (let i = 0; i < 28; i += 1) {
    ctx.strokeStyle = `rgba(36, 30, 24, ${0.015 + (i % 5) * 0.008})`;
    ctx.beginPath();
    ctx.moveTo(12, 18 + i * 17);
    ctx.lineTo(width - 12, 24 + i * 17);
    ctx.stroke();
  }
  const hx = margin;
  const hy = margin;
  ctx.save();
  ctx.shadowColor = "rgba(48, 34, 18, 0.18)";
  ctx.shadowBlur = 28;
  ctx.shadowOffsetY = 16;
    ctx.fillStyle = "#141414";
    ctx.beginPath();
    ctx.roundRect(hx, hy, housingW, housingH, 22);
  ctx.fill();
  ctx.restore();
  ctx.fillStyle = "#f3ecdf";
  ctx.font = "400 26px Fraunces, Georgia, serif";
  ctx.textAlign = "left";
  ctx.fillText(state.keypadName || "A keypad", hx + housingPad, hy + housingPad + 4);
  cells.forEach((cell, index) => {
    const x = hx + housingPad + (index % cols) * (key + gap);
    const y = hy + housingPad + 28 + Math.floor(index / cols) * (key + gap);
    ctx.fillStyle = "#16130f";
    ctx.beginPath();
    ctx.roundRect(x, y + 6, key, key, 18);
    ctx.fill();
    ctx.fillStyle = cell.fill;
    ctx.beginPath();
    ctx.roundRect(x, y, key, key, 18);
    ctx.fill();
    ctx.strokeStyle = "#2a2a2a";
    ctx.lineWidth = 2;
    ctx.stroke();
    if (cell.glow) {
      ctx.fillStyle = cell.glow;
      ctx.fillRect(x + 18, y + key - 8, key - 36, 4);
    }
    ctx.fillStyle = cell.ink;
    ctx.font = "400 13px Pixelify Sans, Outfit, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(cell.mark, x + 12, y + 24);
    if (cell.glyph && ICONS[cell.glyph]) {
      ctx.save();
      ctx.translate(x + key / 2 - 16, y + key / 2 - 22);
      ctx.strokeStyle = cell.ink;
      ctx.lineWidth = 1.7;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke(new Path2D(ICONS[cell.glyph]));
      ctx.restore();
    }
    ctx.fillStyle = cell.ink;
    ctx.font = "400 18px Pixelify Sans, Outfit, sans-serif";
    ctx.textAlign = "center";
    const label = cell.name.length > 14 ? `${cell.name.slice(0, 13)}…` : cell.name;
    ctx.fillText(label, x + key / 2, y + key - 18);
  });
  ctx.fillStyle = "#241e18";
  ctx.font = "400 18px Fraunces, Georgia, serif";
  ctx.textAlign = "left";
  wrapCanvasText(ctx, caption, margin, hy + housingH + 36, width - margin * 2, 26);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "a-button-for-that-keypad.png";
    link.click();
    URL.revokeObjectURL(link.href);
  });
}

function renderWheel() {
  const area = AREAS[state.focusIndex];
  const slices = AREAS.map((item, index) => {
    const span = sliceAngle();
    const start = index * span - span / 2 + 2.2;
    const end = index * span + span / 2 - 2.2;
    return s("g", {},
      s("path", {
        id: `slice-${index}`,
        class: `slice${index === state.focusIndex ? " is-active" : ""}`,
        "data-index": String(index),
        role: "option",
        "aria-selected": index === state.focusIndex ? "true" : "false",
        "aria-label": item.label,
        d: slicePath(start, end),
        fill: item.fill,
      }),
      s("path", {
        class: "slice-sketch",
        d: slicePath(start, end),
        transform: "translate(1 -1)",
        "aria-hidden": "true",
      }),
      pixelMarks(index, item),
      s("g", { transform: `rotate(${index * sliceAngle()} ${CX} ${CY})` },
        s("text", {
          "data-label-for": String(index),
          x: String(CX),
          y: String(CY - 230),
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          fill: item.ink,
          "font-size": item.label.length > 8 ? "14" : "20",
          "font-family": "Pixelify Sans, Fraunces, serif",
          "font-weight": "620",
          transform: `rotate(${labelFlip(index)} ${CX} ${CY - 230})`,
        }, item.label)));
  });

  const offer = mixOffer();
  const note = selectedNote();
  const loose = state.routines.filter((routine) => routine.disposition === "human" || routine.disposition === "unassigned");
  return h("section", { class: "screen wheel-screen" },
    h("h1", { id: "screen-title", class: "sr" }, "A button for that"),
    h("div", { class: "chapter" },
      h("p", {}, "Agentic software has entered ordinary life. It is no longer only a demonstration, or a tool reserved for people who build software. A person can ask an agent to clear the inbox, answer the message, gather the appointment, chase the approval, and close the day. The offer is always the return of an hour. Something that used to require attention will be done, or drafted, or decided, while the person who used to do it is given that time back."),
      h("p", {}, "After that hour is given back, three plain questions are left. How does it feel? Who is it for? What can the button do? An agent can sound patient and answer on time. The human part is the answer to those questions, and the choice to keep the hour anyway."),
      h("p", {}, "The large wheel is the part of a life: work, home, someone you mean to reach, someone you look after, something unfinished, rest, or a decision at work. Turn it until one part sits under the mark. The three small wheels ask the three questions. Pull the lever and they spin together. When they stop, that answer is added to the keypad as one key."),
      h("p", {}, "The keypad is where you look at the answer. Press a key and read what the button would take, and what you would still do yourself. If you want to keep what you made, download the image. The image is the only thing that leaves the page.")),
    h("div", { class: "wheel-controls" },
      h("button", { type: "button", class: "btn keycap spin-button", onclick: spinWheel }, "Spin the wheel"),
      h("button", {
        type: "button",
        id: "sound-toggle",
        class: "btn quiet sound-toggle",
        "aria-pressed": String(!soundMuted),
        "aria-label": `Wheel sound ${soundMuted ? "off" : "on"}`,
        onclick: toggleSound,
      }, soundMuted ? "Sound off" : "Sound on")),
    h("div", { class: "stage" },
    h("div", { class: "wheel-wrap", id: "wheel-wrap" },
      h("div", { class: "notch", "aria-hidden": "true" }),
      s("svg", {
        id: "wheel",
        class: "wheel-svg",
        viewBox: "0 0 640 640",
        role: "listbox",
        "aria-label": "Areas of a life. The slice at the mark is the domain.",
        "aria-activedescendant": `slice-${state.focusIndex}`,
      }, s("g", { id: "rotor", class: "rotor" }, slices)),
      h("div", {
        id: "hub",
        class: "hub",
        style: { background: area.fill, color: area.ink },
      },
        h("span", { class: "hub-mark", id: "hub-mark" }, icon(area.id)),
        h("span", { class: "hub-kicker" }, "At the mark"),
        h("strong", { id: "hub-title" }, area.label),
        h("span", { class: "hub-question", id: "hub-question" }, area.question))),
    h("div", { class: "manner" },
      h("div", { class: "mix-board" },
        mixWheel("heat", "How does it feel?"),
        mixWheel("who", "Who is it for?"),
        mixWheel("off", "What can it do?")),
      h("div", { class: "lever" },
        h("div", { class: "lever-well", id: "lever-well" },
          h("button", {
            type: "button",
            class: "lever-handle",
            id: "lever-handle",
            "aria-label": "Pull the lever. The three wheels spin, and the combination is added to the keypad as one attribute.",
          })),
        h("p", { class: "lever-caption" }, "Pull")))),
    h("p", { class: "domain-note", id: "domain-note" }, area.chapter),
    h("p", { class: "mix-line", id: "manner-line" }, offer.sentence),
    h("div", { id: "the-keypad" },
      h("h2", { class: "section-title" }, "The keypad"),
      state.notice ? h("p", { class: "quiet-note", role: "status" }, state.notice) : null,
      h("div", { class: "housing" },
        h("input", {
          class: "pad-name",
          id: "pad-name",
          type: "text",
          value: state.keypadName,
          maxlength: "42",
          placeholder: "Name this keypad",
          "aria-label": "Name this keypad",
          oninput: (event) => { state.keypadName = event.target.value; save(); },
        }),
        h("div", { class: "pad", id: "pad", onkeydown: onPadKeys },
          state.keys.slice(0, visibleCount()).map((id, index) => keyButton(index, id)),
          loose.map((routine) => looseKey(routine)))),
      renderStory(note.routine, note.empty),
      note.routine?.offshoot && note.routine.disposition === "keyed" ? offshootTools(note.routine) : null,
      note.routine && note.routine.disposition === "keyed" && !note.routine.offshoot
        ? h("div", { class: "actions" },
          h("button", { type: "button", class: "btn quiet", onclick: () => setDisposition(note.routine.id, "human") }, "Keep this human"))
        : null,
      colorLegend(),
      h("div", { class: "actions" },
        h("button", { type: "button", class: "btn keycap", onclick: downloadKeypadImage }, "Download this keypad"),
        state.routines.length === 0
          ? h("button", { type: "button", class: "btn quiet", onclick: laySamples }, "Lay out a sample keypad")
          : null)),
    state.unfinished.length
      ? h("div", { class: "row-links" }, state.unfinished.map((draft) => h("button", {
        type: "button",
        class: "btn quiet",
        onclick: () => resumeDraft(draft.id),
      }, `Unfinished ${areaById(draft.area).label}`)))
      : null);
}

function paintHub(shouldAnnounce) {
  const area = AREAS[state.focusIndex];
  const title = document.getElementById("hub-title");
  const question = document.getElementById("hub-question");
  const hub = document.getElementById("hub");
  const wheel = document.getElementById("wheel");
  if (title) title.textContent = area.label;
  if (question) question.textContent = area.question;
  const mark = document.getElementById("hub-mark");
  if (mark) mark.replaceChildren(icon(area.id));
  const caption = document.getElementById("area-caption");
  if (caption) caption.textContent = area.question;
  if (hub) {
    hub.style.background = area.fill;
    hub.style.color = area.ink;
  }
  const note = document.getElementById("domain-note");
  if (note) note.textContent = area.chapter || "";
  const manner = document.getElementById("manner-line");
  if (manner) manner.textContent = mixAttribute().sentence;
  if (wheel) wheel.setAttribute("aria-activedescendant", `slice-${area.id ? state.focusIndex : 0}`);
  document.querySelectorAll(".slice").forEach((node) => {
    const active = Number(node.dataset.index) === state.focusIndex;
    node.classList.toggle("is-active", active);
    node.setAttribute("aria-selected", active ? "true" : "false");
  });
  if (shouldAnnounce) announce(`${area.label}. ${area.question}`);
}

function labelFlip(index, rotation = state.rotation) {
  const screen = mod(index * sliceAngle() + rotation, 360);
  return screen > 90 && screen < 270 ? 180 : 0;
}

function paintLabels() {
  document.querySelectorAll("[data-label-for]").forEach((node) => {
    const index = Number(node.dataset.labelFor);
    node.setAttribute("transform", `rotate(${labelFlip(index)} ${CX} ${CY - 230})`);
  });
}

function applyRotation() {
  const rotor = document.getElementById("rotor");
  if (!rotor) return;
  rotor.style.transition = "none";
  rotor.style.transform = `rotate(${state.rotation}deg)`;
}

function wheelEase(progress, spin) {
  if (!spin) return 1 - (1 - progress) ** 3;
  if (progress < 0.2) {
    const accelerate = progress / 0.2;
    return 0.12 * accelerate * accelerate;
  }
  const decelerate = (progress - 0.2) / 0.8;
  return 0.12 + 0.88 * (1 - (1 - decelerate) ** 3);
}

function animateTo(target, shouldAnnounce, options = {}) {
  cancelAnimationFrame(rotorFrame);
  const from = state.rotation;
  const delta = target - from;
  spinDirection = delta >= 0 ? 1 : -1;
  const start = performance.now();
  const duration = reduceMotion.matches ? 0 : (options.duration ?? 460);
  let lastTickIndex = state.focusIndex;
  const tick = (now) => {
    const progress = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
    const eased = wheelEase(progress, options.spin);
    state.rotation = from + delta * eased;
    applyRotation();
    paintLabels();
    const index = indexFromRotation(state.rotation);
    if (duration > 0 && index !== lastTickIndex) {
      lastTickIndex = index;
      playWheelTick();
    }
    if (index !== state.focusIndex) state.focusIndex = index;
    paintHub(false);
    if (progress < 1) rotorFrame = requestAnimationFrame(tick);
    else {
      state.rotation = target;
      state.focusIndex = indexFromRotation(target);
      applyRotation();
      paintLabels();
      paintHub(shouldAnnounce);
      if (options.buzzer !== false) playWheelBuzzer();
      save();
      if (options.onDone) options.onDone();
    }
  };
  rotorFrame = requestAnimationFrame(tick);
}

function mountWheel() {
  const snapped = -indexFromRotation(state.rotation) * sliceAngle();
  if (Math.abs(mod(state.rotation - snapped + 180, 360) - 180) > 0.5) {
    state.rotation = snapped;
    state.focusIndex = indexFromRotation(state.rotation);
  }
  const session = ++wheelSession;
  const svg = document.getElementById("wheel");
  const wrap = document.getElementById("wheel-wrap");
  applyRotation();
  paintLabels();
  paintHub(false);
  document.getElementById("hub")?.focus({ preventScroll: true });
  if (!svg || !wrap) return;

  let drag = null;

  function onMove(event) {
    if (!drag || session !== wheelSession) return;
    const point = pointerAngle(event, svg);
    let delta = point.deg - drag.last;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    drag.last = point.deg;
    if (!drag.moved && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 6) return;
    drag.moved = true;
    if (delta) spinDirection = delta > 0 ? 1 : -1;
    cancelAnimationFrame(rotorFrame);
    state.rotation += delta;
    drag.samples.push({ t: performance.now(), rot: state.rotation });
    if (drag.samples.length > 6) drag.samples.shift();
    applyRotation();
    paintLabels();
    const next = indexFromRotation(state.rotation);
    if (next !== state.focusIndex) {
      state.focusIndex = next;
      playWheelTick();
      paintHub(false);
    }
  }

  function onUp(event) {
    if (!drag || event.pointerId !== drag.pointerId) return;
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    document.body.classList.remove("is-dragging");
    const moved = drag.moved;
    const samples = drag.samples;
    const point = pointerAngle(event, svg);
    drag = null;
    if (!moved && onRing(point.norm)) {
      const local = point.deg - state.rotation;
      const index = mod(Math.round(local / sliceAngle()), AREAS.length);
      animateTo(-index * sliceAngle(), true);
      return;
    }
    if (moved) releaseWheel(samples);
  }

  svg.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    const point = pointerAngle(event, svg);
    if (!onRing(point.norm)) return;
    wakeAudio();
    cancelAnimationFrame(rotorFrame);
    drag = { pointerId: event.pointerId, last: point.deg, x: event.clientX, y: event.clientY, moved: false, samples: [{ t: performance.now(), rot: state.rotation }] };
    document.body.classList.add("is-dragging");
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  });

  wrap.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      spin(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      spin(-1);
    } else if ((event.key === "Enter" || event.key === " ") && event.target === svg) {
      event.preventDefault();
      animateTo(-state.focusIndex * sliceAngle(), true);
    }
  });
}

function spin(direction) {
  wakeAudio();
  const next = mod(state.focusIndex + direction, AREAS.length);
  animateTo(-next * sliceAngle(), true, { duration: 480 });
}

function spinWheel() {
  wakeAudio();
  const targetIndex = Math.floor(Math.random() * AREAS.length);
  const destination = -targetIndex * sliceAngle();
  const extra = mod(destination - state.rotation, 360);
  const rotations = 5 + Math.floor(Math.random() * 3);
  animateTo(state.rotation + rotations * 360 + extra, true, {
    duration: 3200 + Math.random() * 700,
    spin: true,
    onDone: () => {},
  });
}

function releaseWheel(samples) {
  if (reduceMotion.matches || samples.length < 2) {
    snapWheel();
    return;
  }
  const first = samples[0];
  const last = samples[samples.length - 1];
  const elapsed = last.t - first.t;
  const velocity = elapsed > 0 ? (last.rot - first.rot) / elapsed : 0;
  if (Math.abs(velocity) < 0.12) snapWheel();
  else coastToStop(velocity);
}

function coastToStop(velocity) {
  cancelAnimationFrame(rotorFrame);
  spinDirection = velocity >= 0 ? 1 : -1;
  let last = performance.now();
  let speed = velocity;
  let lastIndex = state.focusIndex;
  const step = (now) => {
    const dt = Math.min(34, now - last);
    last = now;
    speed *= 0.985 ** (dt / 16);
    state.rotation += speed * dt;
    applyRotation();
    paintLabels();
    const index = indexFromRotation(state.rotation);
    if (index !== lastIndex) {
      lastIndex = index;
      playWheelTick();
    }
    if (index !== state.focusIndex) {
      state.focusIndex = index;
      paintHub(false);
    }
    if (Math.abs(speed) < 0.02) {
      snapWheel();
      return;
    }
    rotorFrame = requestAnimationFrame(step);
  };
  rotorFrame = requestAnimationFrame(step);
}

function snapWheel() {
  const index = indexFromRotation(state.rotation);
  animateTo(-index * sliceAngle(), true);
}

function openArea(index) {
  const area = AREAS[index];
  if (state.draft && state.draft.area !== area.id) stashDraft();
  cancelAnimationFrame(rotorFrame);
  state.focusIndex = index;
  state.rotation = -index * sliceAngle();
  storyChoice = null;
  if (!(state.draft && state.draft.area === area.id)) {
    const parked = state.unfinished.find((draft) => draft.area === area.id);
    if (parked) {
      state.draft = parked;
      state.draft.resumed = true;
      state.unfinished = state.unfinished.filter((draft) => draft.id !== parked.id);
    } else state.draft = newDraft(area.id);
  }
  state.screen = "words";
  state.message = "";
  state.confirmSample = false;
  save();
  render();
}

function renderPlay() {
  const area = AREAS[state.focusIndex];
  const choice = storyChoice;
  return h("section", { class: "screen play-screen" },
    h("p", {}, chip(area)),
    h("h1", { id: "screen-title", class: "title", tabindex: "-1" }, "Home. Sunday, 5:35."),
    h("p", { class: "lede" }, "Jo is due at 6. Choose what a button takes. Watch who gets the time, and who is left holding the rest."),
    h("div", { class: "story-layout" },
      h("div", { class: `story-scene${choice ? ` outcome-${choice.id}` : ""}` },
        s("svg", {
          class: "pixel-room",
          viewBox: "0 0 320 190",
          role: "img",
          "aria-label": choice ? `Pixel scene: ${choice.change}` : "Pixel scene of Nia at home, with a message and a grocery list waiting",
          "shape-rendering": "crispEdges",
        },
          s("rect", { width: "320", height: "180", fill: "#f3d5a4" }),
          s("rect", { y: "128", width: "320", height: "52", fill: "#c47b56" }),
          s("rect", { x: "10", y: "12", width: "78", height: "58", fill: "#5c3a2c" }),
          s("rect", { class: "window-light", x: "16", y: "18", width: "30", height: "40", fill: "#9ec8c6" }),
          s("rect", { x: "50", y: "18", width: "32", height: "40", fill: "#d7efe8" }),
          s("rect", { x: "10", y: "70", width: "78", height: "6", fill: "#5c3a2c" }),
          s("g", { class: "clock" },
            s("rect", { x: "168", y: "12", width: "44", height: "44", fill: "#fffaf0" }),
            s("rect", { class: "clock-hand", x: "188", y: "16", width: "4", height: "22", fill: "#241e18" })),
          s("rect", { x: "268", y: "36", width: "44", height: "92", fill: "#6b4634" }),
          s("rect", { x: "274", y: "42", width: "32", height: "80", fill: "#f6e7c8" }),
          s("g", { class: "pixel-jo" },
            s("rect", { x: "278", y: "62", width: "24", height: "20", fill: "#e0a070" }),
            s("rect", { x: "276", y: "56", width: "28", height: "8", fill: "#3a2c38" }),
            s("rect", { x: "278", y: "82", width: "24", height: "24", fill: "#3e6eae" }),
            s("rect", { class: "jo-wave", x: "300", y: "74", width: "12", height: "6", fill: "#e0a070" }),
            s("rect", { x: "283", y: "68", width: "4", height: "4", fill: "#241e18" }),
            s("rect", { x: "293", y: "68", width: "4", height: "4", fill: "#241e18" }),
            s("text", { class: "pix jo-word", x: "248", y: "34" }, "Jo")),
          s("rect", { x: "108", y: "118", width: "120", height: "8", fill: "#6d4937" }),
          s("rect", { x: "114", y: "126", width: "6", height: "18", fill: "#6d4937" }),
          s("rect", { x: "214", y: "126", width: "6", height: "18", fill: "#6d4937" }),
          s("g", { class: "list-paper" },
            s("rect", { x: "112", y: "92", width: "40", height: "26", fill: "#fff8e8" }),
            s("rect", { class: "tick-hand", x: "116", y: "96", width: "8", height: "6", fill: "#8fb89a" }),
            s("rect", { class: "tick-auto", x: "116", y: "104", width: "8", height: "6", fill: "#8fb89a" }),
            s("rect", { class: "tick-auto late", x: "116", y: "112", width: "8", height: "6", fill: "#8fb89a" })),
          s("g", { class: "milk-oat" },
            s("rect", { x: "156", y: "78", width: "18", height: "36", fill: "#fffaf0" }),
            s("rect", { x: "158", y: "86", width: "14", height: "8", fill: "#e4b15a" }),
            s("text", { class: "pix", x: "158", y: "108" }, "oat")),
          s("g", { class: "milk-cheap" },
            s("rect", { x: "156", y: "78", width: "18", height: "36", fill: "#d5d0c6" }),
            s("rect", { x: "158", y: "86", width: "14", height: "8", fill: "#7f93a3" }),
            s("text", { class: "pix", x: "158", y: "108" }, "sub")),
          s("g", { class: "phone" },
            s("rect", { x: "186", y: "96", width: "28", height: "20", fill: "#2c3440" }),
            s("rect", { x: "188", y: "98", width: "24", height: "16", fill: "#d7efe8" })),
          s("g", { class: "bubble-ask" },
            s("rect", { x: "176", y: "58", width: "78", height: "22", fill: "#fffaf0" }),
            s("text", { class: "pix ask", x: "180", y: "73" }, "kid too?")),
          s("g", { class: "bubble-quick" },
            s("rect", { x: "214", y: "34", width: "70", height: "20", fill: "#d7e4f5" }),
            s("text", { class: "pix", x: "220", y: "48" }, "see you!")),
          s("g", { class: "bubble-answer" },
            s("rect", { x: "150", y: "34", width: "108", height: "22", fill: "#fffaf0" }),
            s("text", { class: "pix", x: "156", y: "49" }, "yes, bring them")),
          s("g", { class: `pixel-person${choice ? ` person-${choice.id}` : ""}` },
            s("rect", { x: "70", y: "84", width: "28", height: "22", fill: "#3a2c38" }),
            s("rect", { x: "72", y: "62", width: "24", height: "22", fill: "#e0a070" }),
            s("rect", { x: "68", y: "56", width: "32", height: "10", fill: "#3a2c38" }),
            s("rect", { class: "nia-arm", x: "96", y: "90", width: "16", height: "6", fill: "#e0a070" }),
            s("rect", { x: "78", y: "70", width: "4", height: "4", fill: "#241e18" }),
            s("rect", { x: "88", y: "70", width: "4", height: "4", fill: "#241e18" }),
            s("rect", { x: "80", y: "78", width: "10", height: "3", fill: "#8e514b" }),
            s("rect", { x: "74", y: "106", width: "8", height: "22", fill: "#496981" }),
            s("rect", { x: "88", y: "106", width: "8", height: "22", fill: "#496981" })),
          s("rect", { y: "148", width: "320", height: "3", fill: "#8d5948" })),
        h("div", { class: "scene-caption", "aria-live": "polite" }, choice ? choice.change : "The list is half done. Jo’s question is still open on the phone.")),
      h("div", { class: "story-side" },
        h("p", { class: "story-prompt" }, choice ? "Watch who moves, and who waits." : "What should the button take?"),
        h("div", { class: "story-choices" }, PLAY_CHOICES.map((option) => h("button", {
          type: "button",
          class: `story-choice${choice?.id === option.id ? " is-chosen" : ""}`,
          "aria-pressed": String(choice?.id === option.id),
          onclick: () => { storyChoice = option; render(); },
        },
          h("span", { class: "choice-title" }, option.label),
          h("span", { class: "choice-time" }, option.time)))),
        choice
          ? h("div", { class: "story-result", "aria-live": "polite" },
            h("span", { class: "result-stamp" }, "What changed"),
            h("div", { class: "consequence-grid" },
              h("div", {}, h("b", {}, "Time"), h("span", {}, choice.time)),
              h("div", {}, h("b", {}, "Relationships"), h("span", {}, choice.connection)),
              h("div", {}, h("b", {}, "Control"), h("span", {}, choice.control))),
            h("ol", { class: "routine-change" }, choice.routine.map((beat, index) => h("li", {}, h("span", {}, String(index + 1)), beat))))
          : h("p", { class: "quiet-note" }, "Nothing here is sent. The picture is the rehearsal."))),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => { state.screen = "wheel"; save(); render(); } }, "Back to the wheel"),
      h("button", { type: "button", class: "btn quiet", onclick: () => { storyChoice = null; render(); } }, "Reset this scene"),
      h("button", { type: "button", class: "btn keycap", onclick: () => { state.screen = "words"; save(); render(); } }, "Write your own routine")));
}

function resumeDraft(id) {
  const draft = state.unfinished.find((item) => item.id === id);
  if (!draft) return;
  if (state.draft && state.draft.id !== id) stashDraft();
  state.draft = draft;
  state.draft.resumed = true;
  state.unfinished = state.unfinished.filter((item) => item.id !== id);
  state.focusIndex = AREAS.findIndex((area) => area.id === draft.area);
  state.rotation = -Math.max(state.focusIndex, 0) * sliceAngle();
  state.screen = "words";
  save();
  render();
}

function go(screen) {
  if (state.draft && screen === "keypad") stashDraft();
  state.screen = screen;
  state.message = "";
  save();
  render();
}

function renderWords() {
  const draft = normalizeDraft(state.draft);
  const area = areaById(draft.area);
  const continuing = isDirty(draft);
  return h("section", { class: "screen" },
    h("p", {}, chip(area)),
    pathMap("words"),
    h("h1", { id: "screen-title", class: "title", tabindex: "-1" }, area.label),
    h("div", { class: "chapter" },
      h("p", {}, area.chapter),
      h("p", {}, "Write the routine as it actually happens, then what feels difficult about it, and then the button you are tempted to want. The next page turns those sentences into the command an agent would follow. You can still keep the whole thing human, which means it is read and never becomes a key.")),
    draft.resumed ? h("p", { class: "quiet-note" }, "Continuing an unfinished note.") : null,
    messageEl(),
    field({
      id: "routine",
      label: "The routine",
      hint: "What happens, again.",
      multiline: true,
      value: draft.routine,
      placeholder: "A thing you do again, in a sentence or two.",
      oninput: (value) => { draft.routine = value; },
    }),
    field({
      id: "difficulty",
      label: "What feels difficult",
      hint: "The snag a machine would be tempted to smooth over.",
      multiline: true,
      value: draft.difficulty,
      placeholder: "Where it stalls, or costs more than it should.",
      oninput: (value) => { draft.difficulty = value; },
    }),
    field({
      id: "wish",
      label: "What you wish a button could do",
      multiline: true,
      value: draft.wish,
      placeholder: "The part you are tempted to delegate.",
      oninput: (value) => { draft.wish = value; },
    }),
    state.confirmSample
      ? h("p", { class: "message" }, "Replace what you wrote with the sample routine for ", area.label, "?")
      : null,
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => { stashDraft(); go("wheel"); } }, "Back to the wheel"),
      h("button", { type: "button", class: "btn quiet", onclick: borrowSample }, state.confirmSample ? "Yes, use the sample" : "Borrow a sample routine"),
      state.confirmSample ? h("button", { type: "button", class: "btn quiet", onclick: () => { state.confirmSample = false; render(); } }, "Keep mine") : null,
      continuing ? h("button", { type: "button", class: "btn quiet", onclick: startBlank }, "Start a blank note") : null,
      h("button", { type: "button", class: "btn keycap", onclick: goToCommand }, "Turn this into a button")));
}

function requireWords() {
  const draft = state.draft;
  const missing = [
    ["routine", "the routine"],
    ["difficulty", "what feels difficult"],
    ["wish", "what you wish a button could do"],
  ].filter(([key]) => !String(draft[key] || "").trim());
  if (!missing.length) return true;
  state.message = `Still needed: ${missing.map((item) => item[1]).join(", ")}.`;
  render();
  document.getElementById(missing[0][0])?.focus();
  return false;
}

function goToCommand() {
  if (!requireWords()) return;
  const draft = normalizeDraft(state.draft);
  if (!draft.scaffolded) {
    const fitted = scaffoldFromWords(draft);
    draft.trigger = fitted.trigger;
    draft.inputs = fitted.inputs;
    draft.steps = fitted.steps;
    draft.outcome = fitted.outcome;
    if (!draft.title.trim()) draft.title = deriveTitle(draft);
    draft.scaffolded = true;
  }
  state.screen = "command";
  state.message = "";
  state.confirmSample = false;
  save();
  render();
}

function borrowSample() {
  const draft = state.draft;
  const dirty = [draft.routine, draft.difficulty, draft.wish, draft.title].some((value) => String(value || "").trim());
  if (dirty && !state.confirmSample) {
    state.confirmSample = true;
    render();
    return;
  }
  const area = areaById(draft.area);
  Object.assign(draft, structuredClone(area.sample), {
    id: draft.id,
    area: draft.area,
    scaffolded: true,
    disposition: null,
    keyIndex: null,
    symbol: area.sample.symbol || area.id,
    mark: "",
    decider: area.sample.decider || (area.id === "company" ? "company" : "me"),
  });
  state.confirmSample = false;
  state.message = "";
  save();
  render();
}

function startBlank() {
  const area = state.draft.area;
  state.unfinished = state.unfinished.filter((draft) => draft.id !== state.draft.id);
  state.draft = newDraft(area);
  state.confirmSample = false;
  save();
  render();
}

function followStrip() {
  const jumps = [
    ["title", "Name", "star"],
    ["trigger", "When", "trigger"],
    ["inputs", "Needs", "inputs"],
    ["step-0", "Steps", "steps"],
    ["outcome", "Result", "outcome"],
    ["judgement", "Still human", "human"],
  ];
  return h("div", { class: "follow" }, jumps.map(([id, label, glyph]) => h("button", {
    type: "button",
    class: "follow-jump",
    onclick: () => document.getElementById(id)?.focus(),
  }, icon(glyph), h("span", {}, label))));
}

function symbolPicker(draft) {
  const drawn = hasMark(draft);
  return h("div", { class: "field" },
    h("span", { class: "field-label" }, icon(drawn ? "custom" : (draft.symbol || "star")), "Symbol on the key"),
    h("span", { class: "field-hint" }, "The picture on the keycap. Choose one, or draw your own."),
    h("div", { class: "symbol-row", role: "group", "aria-label": "Key symbols" },
      SYMBOLS.map(([id, label]) => {
        const chosen = !drawn && draft.symbol === id;
        return h("button", {
          type: "button",
          class: `symbol-choice${chosen ? " is-chosen" : ""}`,
          "aria-label": label,
          "aria-pressed": chosen ? "true" : "false",
          title: label,
          onclick: () => {
            draft.symbol = id;
            draft.mark = "";
            state.drawing = false;
            save();
            render();
          },
        }, icon(id));
      }),
      h("button", {
        type: "button",
        class: `symbol-choice draw-choice${drawn || state.drawing ? " is-chosen" : ""}`,
        "aria-pressed": state.drawing ? "true" : "false",
        onclick: () => {
          state.drawing = !state.drawing;
          if (!draft.mark) draft.mark = "0".repeat(64);
          render();
        },
      }, "Draw")),
    state.drawing ? markEditor(draft) : null);
}

function markEditor(draft) {
  const bits = String(draft.mark || "").padEnd(64, "0").slice(0, 64);
  return h("div", { class: "draw-block" },
    h("p", { class: "field-hint" }, "Click the squares. A filled drawing replaces the symbol on the key."),
    h("div", { class: "mark-pad", role: "group", "aria-label": "Draw a symbol, eight by eight" },
      [...bits].map((bit, index) => h("button", {
        type: "button",
        class: `mark-cell${bit === "1" ? " is-on" : ""}`,
        "aria-label": `Square ${index + 1}${bit === "1" ? ", filled" : ""}`,
        "aria-pressed": bit === "1" ? "true" : "false",
        onclick: () => {
          const chars = bits.split("");
          chars[index] = chars[index] === "1" ? "0" : "1";
          draft.mark = chars.join("");
          draft.symbol = "custom";
          save();
          render();
        },
      }))),
    h("button", {
      type: "button",
      class: "btn quiet",
      onclick: () => { draft.mark = "0".repeat(64); save(); render(); },
    }, "Clear drawing"));
}

function deciderRow(draft) {
  return h("div", { class: "field" },
    h("span", { class: "field-label" }, icon(draft.decider === "someone" ? "someone" : draft.decider === "company" ? "company" : "me"), "Who decides"),
    h("span", { class: "field-hint" }, "You, someone else, or the company. The written line below still has to say what stays human."),
    h("div", { class: "decider-row", role: "radiogroup", "aria-label": "Who decides" },
      DECIDERS.map(([id, label]) => h("button", {
        type: "button",
        class: `decider${draft.decider === id ? " is-chosen" : ""}`,
        role: "radio",
        "aria-checked": draft.decider === id ? "true" : "false",
        onclick: () => { draft.decider = id; save(); render(); },
      }, icon(id === "someone" ? "someone" : id), h("span", {}, label)))));
}

function liveKey(draft, area) {
  const title = draft.title.trim() || deriveTitle(draft) || "Untitled";
  return h("div", { class: "live-key-wrap" },
    h("p", { class: "field-hint" }, "The key, so far. It updates as you name it."),
    h("div", {
      class: "key live-key has-routine",
      style: { "--tone": area.fill },
      "aria-hidden": "true",
    },
      h("span", { class: "key-num" }, "Preview"),
      h("span", { class: "key-glyph" }, glyphFor(draft)),
      h("span", { class: "key-label", id: "live-key-label" }, title),
      h("span", { class: "key-area" }, draft.decider && draft.decider !== "me" && draft.decider !== draft.area
        ? `${area.label} · ${deciderLabel(draft.decider)}`
        : area.label)));
}

function renderCommand() {
  const draft = normalizeDraft(state.draft);
  const area = areaById(draft.area);
  return h("section", { class: "screen" },
    h("p", {}, chip(area)),
    pathMap("command"),
    h("h1", { id: "screen-title", class: "title", tabindex: "-1" }, "Turn it into a button"),
    h("p", { class: "lede" }, "On one side is the hour as you described it. On the other is the command a button would follow, in the order an agent would need: when it starts, what it uses, what it does, and where it must stop. If this should never be a key, keep it human."),
    messageEl(),
    h("div", { class: "seam-grid" },
      h("div", { class: "panel" },
        h("h2", {}, "In your words"),
        field({ id: "routine", iconName: "steps", label: "The routine", multiline: true, value: draft.routine, oninput: (value) => { draft.routine = value; } }),
        field({ id: "difficulty", iconName: "pause", label: "What feels difficult", multiline: true, value: draft.difficulty, oninput: (value) => { draft.difficulty = value; } }),
        field({ id: "wish", iconName: "star", label: "The wish", multiline: true, value: draft.wish, oninput: (value) => { draft.wish = value; } }),
        h("button", { type: "button", class: "btn quiet", onclick: refitCommand }, "Refit the command from these words")),
      h("div", { class: "panel" },
        h("h2", {}, "As a key"),
        liveKey(draft, area),
        followStrip(),
        field({
          id: "title",
          iconName: "star",
          label: "Name on the key",
          value: draft.title,
          maxlength: "48",
          placeholder: deriveTitle(draft),
          oninput: (value) => {
            draft.title = value;
            const live = document.getElementById("live-key-label");
            if (live) live.textContent = value.trim() || deriveTitle(draft) || "Untitled";
          },
        }),
        symbolPicker(draft),
        field({ id: "trigger", iconName: "trigger", label: "Trigger", hint: "When it would start.", value: draft.trigger, oninput: (value) => { draft.trigger = value; } }),
        field({ id: "inputs", iconName: "inputs", label: "Inputs", hint: "What the command needs in front of it.", multiline: true, rows: 2, value: draft.inputs, oninput: (value) => { draft.inputs = value; } }),
        h("div", { class: "field" },
          h("span", { class: "field-label" }, icon("steps"), "Steps"),
          h("span", { class: "field-hint" }, "The routine, narrowed into moves."),
          draft.steps.map((step, index) => h("div", { class: "step-row" },
            h("span", { class: "step-num" }, String(index + 1)),
            h("input", {
              id: index === 0 ? "step-0" : `step-${index}`,
              type: "text",
              value: step,
              oninput: (event) => { draft.steps[index] = event.target.value; save(); },
            }),
            draft.steps.length > 1
              ? h("button", {
                type: "button",
                class: "icon-btn",
                "aria-label": `Remove step ${index + 1}`,
                onclick: () => {
                  draft.steps.splice(index, 1);
                  save();
                  render();
                },
              }, "Remove")
              : h("span", {})))),
        h("button", {
          type: "button",
          class: "btn quiet",
          onclick: () => {
            draft.steps.push("");
            save();
            render();
            document.getElementById(`step-${draft.steps.length - 1}`)?.focus();
          },
        }, "Add a step"),
        field({ id: "outcome", iconName: "outcome", label: "Desired outcome", multiline: true, rows: 2, value: draft.outcome, oninput: (value) => { draft.outcome = value; } }),
        deciderRow(draft),
        field({
          id: "judgement",
          iconName: "human",
          label: "Where a person still judges or permits",
          hint: "If you cannot name this, the routine may not want a button.",
          multiline: true,
          rows: 2,
          value: draft.judgement,
          oninput: (value) => { draft.judgement = value; },
        }))),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => { state.screen = "words"; save(); render(); } }, "Back to the words"),
      h("button", { type: "button", class: "btn human", onclick: keepHuman }, "Keep this human"),
      h("button", { type: "button", class: "btn keycap", onclick: giveKey }, "Give this a key")));
}

function refitCommand() {
  const draft = state.draft;
  if (!requireWords()) return;
  const fitted = scaffoldFromWords(draft);
  draft.trigger = fitted.trigger;
  draft.inputs = fitted.inputs;
  draft.steps = fitted.steps;
  draft.outcome = fitted.outcome;
  draft.scaffolded = true;
  state.message = "The command was refit from your words. The human line was left alone.";
  save();
  render();
}

function requireCommand() {
  const draft = normalizeDraft(state.draft);
  const missing = [];
  if (!draft.trigger.trim()) missing.push(["trigger", "a trigger"]);
  if (!draft.inputs.trim()) missing.push(["inputs", "the inputs"]);
  if (!draft.steps.some((step) => step.trim())) missing.push(["step-0", "at least one step"]);
  if (!draft.outcome.trim()) missing.push(["outcome", "a desired outcome"]);
  if (!draft.judgement.trim()) missing.push(["judgement", "what stays human"]);
  if (missing.length) {
    state.message = `Before it leaves this page: ${missing.map((item) => item[1]).join(", ")}.`;
    render();
    document.getElementById(missing[0][0])?.focus();
    return false;
  }
  if (!draft.title.trim()) draft.title = deriveTitle(draft);
  return true;
}

function keepHuman() {
  if (!requireCommand()) return;
  commitDraft("human", null);
}

function giveKey() {
  if (!requireCommand()) return;
  state.screen = "place";
  const count = visibleCount();
  const owned = state.keys.findIndex((id) => id === state.draft.id);
  const firstEmpty = state.keys.slice(0, count).findIndex((id) => !id);
  state.selectedKey = owned >= 0 && owned < count ? owned : Math.max(firstEmpty, 0);
  state.message = "";
  save();
  render();
}

function commitDraft(disposition, keyIndex) {
  const draft = normalizeDraft(state.draft);
  const routine = {
    id: draft.id,
    area: draft.area,
    title: draft.title.trim() || deriveTitle(draft),
    routine: draft.routine.trim(),
    difficulty: draft.difficulty.trim(),
    wish: draft.wish.trim(),
    trigger: draft.trigger.trim(),
    inputs: draft.inputs.trim(),
    steps: draft.steps.map((step) => step.trim()).filter(Boolean),
    outcome: draft.outcome.trim(),
    judgement: draft.judgement.trim(),
    symbol: draft.symbol || draft.area,
    mark: hasMark(draft) ? String(draft.mark).padEnd(64, "0").slice(0, 64) : "",
    decider: draft.decider || "me",
    disposition,
    keyIndex: disposition === "keyed" ? keyIndex : null,
  };
  const existing = state.routines.findIndex((item) => item.id === routine.id);
  if (existing >= 0) state.routines[existing] = routine;
  else state.routines.push(routine);
  state.unfinished = state.unfinished.filter((item) => item.id !== routine.id);
  state.keys = state.keys.map((id) => (id === routine.id ? null : id));
  state.notice = "";
  if (disposition === "keyed") {
    const displacedId = state.keys[keyIndex];
    if (displacedId) {
      const other = getRoutine(displacedId);
      if (other) {
        other.disposition = "unassigned";
        other.keyIndex = null;
        state.notice = `${other.title} left key ${keyIndex + 1} and is now without a button.`;
      }
    }
    state.keys[keyIndex] = routine.id;
  }
  state.draft = null;
  state.screen = "keypad";
  state.panel = disposition === "keyed"
    ? { mode: "sim", id: routine.id, keyIndex }
    : disposition === "human"
      ? { mode: "read", id: routine.id, keyIndex: null }
      : { mode: "parked", id: routine.id, keyIndex: null };
  state.message = "";
  playhead = 0;
  save();
  render();
}

function renderPlace() {
  const draft = normalizeDraft(state.draft);
  const area = areaById(draft.area);
  const occupantId = state.keys[state.selectedKey];
  const occupant = occupantId && occupantId !== draft.id ? getRoutine(occupantId) : null;
  const already = occupantId === draft.id;
  return h("section", { class: "screen" },
    pathMap("key"),
    h("h1", { id: "screen-title", class: "title", tabindex: "-1" }, "Which key, if any?"),
    h("p", { class: "lede" }, placeLede()),
    h("p", {}, chip(area), " ", draft.title || deriveTitle(draft)),
    messageEl(),
    h("div", { class: "housing" },
      h("div", {
        class: "pad place-pad",
        role: "radiogroup",
        "aria-label": "Choose a key",
        onkeydown: onPlaceKeys,
      }, state.keys.slice(0, visibleCount()).map((id, index) => {
        const routine = id ? getRoutine(id) : null;
        const tone = routine ? areaById(routine.area).fill : null;
        const selected = index === state.selectedKey;
        return h("button", {
          type: "button",
          class: `key${routine ? " has-routine" : " is-empty"}${selected ? " is-selected" : ""}`,
          role: "radio",
          "aria-checked": selected ? "true" : "false",
          "data-place": String(index),
          style: tone ? { "--tone": tone } : {},
          onclick: () => { state.selectedKey = index; save(); render(); },
        },
          h("span", { class: "key-num" }, String(index + 1)),
          routine ? h("span", { class: "key-glyph" }, glyphFor(routine)) : null,
          h("span", { class: "key-label" }, routine ? routine.title : "open"),
          h("span", { class: "key-area" }, routine ? areaById(routine.area).label : "unassigned"));
      })),
      h("p", { class: "housing-note" }, "Arrow keys move the mark. Assigning is a separate choice. Leaving a key open is allowed.")),
    already ? h("p", { class: "quiet-note" }, "This note already sits on this key.") : null,
    occupant ? h("p", { class: "message" }, `${occupant.title} is on this key. Assigning here leaves that note without a button.`) : null,
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => { state.screen = "command"; save(); render(); } }, "Back"),
      h("button", { type: "button", class: "btn quiet", onclick: () => commitDraft("unassigned", null) }, "Leave unassigned"),
      h("button", { type: "button", class: "btn human", onclick: keepHuman }, "Keep this human"),
      h("button", { type: "button", class: "btn keycap", onclick: () => commitDraft("keyed", state.selectedKey) }, `Assign to key ${state.selectedKey + 1}`)));
}

function placeLede() {
  const count = visibleCount();
  if (count >= MAX_KEYS) {
    return "Six keys is as many as this keypad will show. One part of life can take several of them. Assigning onto a taken key moves the other note off.";
  }
  return `The keypad is showing ${count} keys. It starts at three. Another appears when these are taken, up to six. An open key, among the ones showing, can stay open.`;
}

function onPlaceKeys(event) {
  const current = state.selectedKey;
  const next = neighbor(current, event.key);
  if (next == null) return;
  event.preventDefault();
  state.selectedKey = next;
  save();
  render();
  document.querySelector(`[data-place="${next}"]`)?.focus();
}

function neighbor(index, key) {
  const count = visibleCount();
  const col = index % 3;
  const row = Math.floor(index / 3);
  let next = null;
  if (key === "ArrowRight" && col < 2) next = index + 1;
  if (key === "ArrowLeft" && col > 0) next = index - 1;
  if (key === "ArrowDown") next = index + 3;
  if (key === "ArrowUp" && row > 0) next = index - 3;
  if (next == null || next < 0 || next >= count) return null;
  return next;
}

function renderKeypad() {
  const note = selectedNote();
  const loose = state.routines.filter((routine) => routine.disposition === "human" || routine.disposition === "unassigned");
  return h("section", { class: "screen" },
    h("h1", { id: "screen-title", class: "title", tabindex: "-1" }, "Your keypad"),
    h("div", { class: "chapter" },
      h("p", {}, "This is the keypad those choices become. The colors are the domains on the wheel. Press a key and read the account of it: the hour as it is lived, what a button for that would take, and what would remain with a person. A key marked Yours was kept human. An empty key was left open on purpose.")),
    h("div", { class: "housing" },
      h("input", {
        class: "pad-name",
        id: "pad-name",
        type: "text",
        value: state.keypadName,
        maxlength: "42",
        placeholder: "Name this keypad",
        "aria-label": "Name this keypad",
        oninput: (event) => { state.keypadName = event.target.value; save(); },
      }),
      h("div", { class: "pad", id: "pad", onkeydown: onPadKeys },
        state.keys.slice(0, visibleCount()).map((id, index) => keyButton(index, id)),
        loose.map((routine) => looseKey(routine)))),
    renderStory(note.routine, note.empty),
    note.routine?.offshoot && note.routine.disposition === "keyed" ? offshootTools(note.routine) : null,
    note.routine && note.routine.disposition === "keyed" && !note.routine.offshoot
      ? h("div", { class: "actions" },
        h("button", { type: "button", class: "btn quiet", onclick: () => setDisposition(note.routine.id, "human") }, "Keep yours"))
      : null,
    note.routine && note.routine.disposition !== "keyed"
      ? h("div", { class: "actions" },
        h("button", { type: "button", class: "btn quiet", onclick: () => reopen(note.routine.id, "place") }, "Give it a number"))
      : null,
    colorLegend(),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn keycap", onclick: () => { stashDraft(); go("wheel"); } }, "Back to the wheel"),
      h("button", { type: "button", class: "btn quiet", onclick: exportSummary }, "Download"),
      h("button", { type: "button", class: "btn quiet", onclick: () => { state.confirmReset = !state.confirmReset; render(); } }, "Start over")),
    state.confirmReset
      ? h("p", { class: "message" }, "Clear this keypad? ",
        h("button", { type: "button", class: "btn quiet", onclick: resetAll }, "Yes, clear it"), " ",
        h("button", { type: "button", class: "btn quiet", onclick: () => { state.confirmReset = false; render(); } }, "Keep it"))
      : null);
}

function selectedNote() {
  const panel = state.panel || { mode: "idle" };
  if (panel.mode === "empty") return { routine: null, empty: true };
  const routine = panel.id ? getRoutine(panel.id) : null;
  if (!routine || panel.mode === "idle" || panel.mode === "summary") return { routine: null, empty: false };
  return { routine, empty: false };
}

function colorLegend() {
  return h("ul", { class: "wheel-legend" },
    AREAS.map((area) => h("li", {},
      h("i", { style: { background: area.fill }, "aria-hidden": "true" }),
      area.label)));
}

function offshootTools(routine) {
  const index = state.keys.indexOf(routine.id);
  return h("div", { class: "key-tools" },
    h("label", { class: "field" },
      h("span", { class: "field-label" }, "Name"),
      h("input", {
        type: "text",
        maxlength: "32",
        value: routine.title,
        "aria-label": "Name on the key",
        oninput: (event) => {
          routine.title = event.target.value;
          const label = document.querySelector(`[data-key="${index}"] .key-label`);
          if (label) label.textContent = routine.title || "Key";
          save();
        },
      })),
    symbolPicker(routine));
}

function keyButton(index, id) {
  const routine = id ? getRoutine(id) : null;
  const label = routine ? keyName(routine) : "Empty";
  return h("button", {
    type: "button",
    class: `key${routine ? " has-routine" : " is-empty"}`,
    "data-drag": "key",
    "data-key": String(index),
    "data-label": label,
    style: keyFace(routine),
    "aria-label": routine ? `${label}. ${keyHint(routine)}` : `Key ${index + 1}, empty.`,
    onclick: () => pressKey(index),
  },
    h("span", { class: "key-num" }, String(index + 1)),
    routine ? h("span", { class: "key-glyph" }, glyphFor(routine)) : h("span", { class: "key-glyph key-blank" }),
    h("span", { class: "key-label" }, label),
    routine?.forLine ? h("span", { class: "key-sub" }, routine.forLine) : null,
    h("span", { class: "key-tip" }, routine ? keyHint(routine) : "Empty."));
}

function looseKey(routine) {
  const yours = routine.disposition === "human";
  return h("button", {
    type: "button",
    class: `key has-routine${yours ? " is-held" : " is-loose"}`,
    style: keyFace(routine),
    "aria-label": `${keyName(routine)}. ${keyHint(routine)}`,
    onclick: () => {
      state.panel = { mode: yours ? "read" : "parked", id: routine.id, keyIndex: null };
      state.pendingRemove = null;
      render();
    },
  },
    h("span", { class: "key-num" }, yours ? "Yours" : ""),
    h("span", { class: "key-glyph" }, glyphFor(routine)),
    h("span", { class: "key-label" }, keyName(routine)),
    routine.forLine ? h("span", { class: "key-sub" }, routine.forLine) : null,
    h("span", { class: "key-tip" }, keyHint(routine)));
}

function bayBlock(kind, title, lede, routines) {
  return h("div", { class: "bay-block" },
    h("h2", {}, title),
    h("p", { class: "quiet-note" }, lede),
    h("div", { class: "bay", "data-bay": kind },
      routines.length
        ? routines.map((routine) => slipButton(routine))
        : h("p", { class: "quiet-note" }, "None yet.")));
}

function slipButton(routine) {
  const area = areaById(routine.area);
  return h("button", {
    type: "button",
    class: "slip",
    "data-drag": "routine",
    "data-routine-id": routine.id,
    "data-label": routine.title,
    onclick: () => openRoutine(routine.id),
  },
    h("span", { class: "slip-glyph" }, glyphFor(routine)),
    chip(area),
    h("strong", {}, routine.title),
    h("span", { class: "quiet-note" }, routine.disposition === "human" ? "Kept human" : "No key"));
}

function panelNode() {
  const panel = state.panel || { mode: "idle" };
  if (panel.mode === "summary") {
    return h("aside", { class: "rehearsal" },
      h("span", { class: "stamp" }, "Score"),
      h("h2", {}, "Keypad summary"),
      h("p", {}, "A plain-text score of the words and the commands. It does not run."),
      h("pre", { class: "summary" }, summaryText()),
      h("div", { class: "actions" },
        h("button", { type: "button", class: "btn keycap", onclick: exportSummary }, "Download")));
  }
  if (panel.mode === "empty") {
    return h("aside", { class: "rehearsal" },
      h("span", { class: "stamp open" }, "Open key"),
      h("h2", {}, `Key ${panel.keyIndex + 1}`),
      h("p", {}, "This key is unassigned. Leaving it open is a choice, not a task left over. A life with buttons is also a life with gaps."));
  }
  const routine = panel.id ? getRoutine(panel.id) : null;
  if (!routine || panel.mode === "idle") {
    return h("aside", { class: "rehearsal" },
      h("span", { class: "stamp" }, "Simulation"),
      h("h2", {}, "Nothing is connected"),
      h("p", {}, "Press a labelled key to rehearse its command, one beat at a time. Empty keys stay empty. What was kept human is read, not run."),
      h("p", { class: "quiet-note" }, "No mail is sent, no call is placed, no agent is attached."));
  }
  if (routine.offshoot && routine.disposition === "keyed") return offshootPanel(routine, panel.keyIndex);
  if (panel.mode === "read") return readPanel(routine);
  if (panel.mode === "parked") return parkedPanel(routine);
  return simPanel(routine);
}

function offerWho(routine) {
  if (routine.decider === "company") return "The company";
  if (routine.decider === "someone") return "Someone else";
  return "You";
}

function offshootPanel(routine, keyIndex) {
  return h("aside", { class: "rehearsal", "aria-live": "polite" },
    h("span", { class: "stamp" }, "On the keypad"),
    h("h2", {}, routine.title || "Untitled"),
    h("p", {}, routine.routine),
    h("label", { class: "field" },
      h("span", { class: "field-label" }, "Name on the key"),
      h("input", {
        type: "text",
        maxlength: "32",
        value: routine.title,
        "aria-label": "Name on the key",
        oninput: (event) => {
          routine.title = event.target.value;
          const label = document.querySelector(`[data-key="${keyIndex}"] .key-label`);
          if (label) label.textContent = routine.title || "Untitled";
          save();
        },
      })),
    symbolPicker(routine),
    h("p", { class: "quiet-note" }, "This key came from the three wheels. It is a picture and a word. It does not send mail, place a call, or run a command."),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => writeOffshoot(routine) }, "Write it out as a routine"),
      h("button", { type: "button", class: "btn human", onclick: () => setDisposition(routine.id, "human") }, "Keep this human"),
      h("button", { type: "button", class: "btn quiet", onclick: () => clearRoutineKey(routine.id) }, "Leave the key empty")));
}

function writeOffshoot(routine) {
  state.draft = {
    ...newDraft(routine.area),
    id: routine.id,
    title: routine.title,
    routine: routine.routine,
    wish: routine.outcome,
    symbol: routine.symbol,
    mark: routine.mark || "",
    decider: routine.decider,
    judgement: routine.judgement,
  };
  state.screen = "words";
  state.message = "";
  save();
  render();
}

function wordsBlock(routine) {
  return h("div", { class: "words-block" },
    h("b", {}, "Before it was a command"),
    h("p", {}, routine.routine),
    h("p", {}, routine.difficulty),
    h("p", {}, routine.wish));
}

function simPanel(routine) {
  const area = areaById(routine.area);
  const steps = routine.steps.filter((step) => step.trim());
  let beat = 0;
  const triggerBeat = beat++;
  const stepBeats = steps.map(() => beat++);
  const outcomeBeat = beat++;
  const judgementBeat = beat++;
  return h("aside", { class: "rehearsal", "aria-live": "polite" },
    h("span", { class: "stamp" }, "Simulation"),
    h("p", { class: "quiet-note" }, "Nothing is sent or connected. This rehearses a command. It does not perform it."),
    h("h2", {}, routine.title),
    h("p", {}, chip(area)),
    routine.decider && routine.decider !== "me"
      ? h("p", { class: "quiet-note" }, `${deciderLabel(routine.decider)} decides. The press only rehearses the asking.`)
      : null,
    h("div", { class: "beat", "data-beat": String(triggerBeat) }, h("b", {}, icon("trigger"), "When"), routine.trigger),
    steps.map((step, index) => h("div", { class: "beat", "data-beat": String(stepBeats[index]) }, h("b", {}, icon("steps"), `Step ${index + 1}`), step)),
    h("div", { class: "beat", "data-beat": String(outcomeBeat) }, h("b", {}, icon("outcome"), "Result"), routine.outcome),
    h("div", { class: "beat human-line", "data-beat": String(judgementBeat) }, h("b", {}, icon("human"), "Still a person"), routine.judgement),
    wordsBlock(routine),
    routineActions(routine));
}

function readPanel(routine) {
  const area = areaById(routine.area);
  return h("aside", { class: "rehearsal" },
    h("span", { class: "stamp human" }, "Kept human"),
    h("h2", {}, routine.title),
    h("p", {}, chip(area)),
    h("p", {}, "This was considered, then refused a button. It is not rehearsed as a command."),
    wordsBlock(routine),
    h("div", { class: "human-line" }, h("b", {}, "What would be lost"), routine.judgement),
    h("p", { class: "quiet-note" }, "The command it did not become"),
    h("p", {}, routine.trigger),
    h("p", {}, routine.outcome),
    routineActions(routine));
}

function parkedPanel(routine) {
  return h("aside", { class: "rehearsal" },
    h("span", { class: "stamp open" }, "No key"),
    h("h2", {}, routine.title),
    h("p", {}, chip(areaById(routine.area))),
    h("p", {}, "This has the shape of a command, and nowhere to press it. Previewing it would only pretend it has a button."),
    wordsBlock(routine),
    h("div", { class: "actions" },
      h("button", { type: "button", class: "btn quiet", onclick: () => { state.panel = { mode: "sim", id: routine.id, keyIndex: null }; playhead = 0; render(); } }, "Preview the command anyway")),
    routineActions(routine));
}

function routineActions(routine) {
  const removing = state.pendingRemove === routine.id;
  return h("div", { class: "actions" },
    h("button", { type: "button", class: "btn quiet", onclick: () => editRoutine(routine.id) }, "Edit"),
    routine.disposition !== "human"
      ? h("button", { type: "button", class: "btn human", onclick: () => setDisposition(routine.id, "human") }, "Keep this human")
      : h("button", { type: "button", class: "btn quiet", onclick: () => reopen(routine.id, "place") }, "Give it a key after all"),
    routine.disposition === "keyed"
      ? h("button", { type: "button", class: "btn quiet", onclick: () => clearRoutineKey(routine.id) }, "Leave the key open")
      : null,
    routine.disposition === "unassigned"
      ? h("button", { type: "button", class: "btn quiet", onclick: () => reopen(routine.id, "place") }, "Choose a key")
      : null,
    h("button", {
      type: "button",
      class: "btn quiet",
      onclick: () => { state.pendingRemove = removing ? null : routine.id; render(); },
    }, removing ? "Cancel" : "Remove"),
    removing ? h("button", { type: "button", class: "btn quiet", onclick: () => removeRoutine(routine.id) }, "Yes, remove this note") : null);
}

function pressKey(index) {
  const id = state.keys[index];
  playhead = 0;
  pressedKey = index;
  const routine = id ? getRoutine(id) : null;
  state.panel = !routine
    ? { mode: "empty", id: null, keyIndex: index }
    : routine.offshoot
      ? { mode: "offshoot", id, keyIndex: index }
      : { mode: "sim", id, keyIndex: index };
  state.pendingRemove = null;
  render();
}

function openRoutine(id) {
  const routine = getRoutine(id);
  if (!routine) return;
  state.panel = {
    mode: routine.disposition === "human" ? "read" : "parked",
    id,
    keyIndex: routine.keyIndex,
  };
  state.pendingRemove = null;
  render();
}

function onPadKeys(event) {
  const keyEl = event.target.closest("[data-key]");
  if (!keyEl) return;
  const index = Number(keyEl.dataset.key);
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    pressKey(index);
    return;
  }
  const next = neighbor(index, event.key);
  if (next == null) return;
  event.preventDefault();
  if (event.shiftKey) swapKeys(index, next);
  else document.querySelector(`[data-key="${next}"]`)?.focus();
}

function swapKeys(a, b) {
  if (a === b) return;
  const next = state.keys.slice();
  const held = next[a];
  next[a] = next[b];
  next[b] = held;
  state.keys = next;
  syncKeyedRoutines();
  state.notice = "";
  save();
  render();
  document.querySelector(`[data-key="${b}"]`)?.focus();
}

function syncKeyedRoutines() {
  state.routines.forEach((routine) => {
    const index = state.keys.indexOf(routine.id);
    if (index >= 0) {
      routine.disposition = "keyed";
      routine.keyIndex = index;
    } else if (routine.disposition === "keyed") {
      routine.disposition = "unassigned";
      routine.keyIndex = null;
    }
  });
}

function placeRoutineOnKey(routineId, keyIndex) {
  const routine = getRoutine(routineId);
  if (!routine) return;
  state.keys = state.keys.map((id) => (id === routineId ? null : id));
  const displacedId = state.keys[keyIndex];
  state.notice = "";
  if (displacedId && displacedId !== routineId) {
    const other = getRoutine(displacedId);
    if (other) {
      other.disposition = "unassigned";
      other.keyIndex = null;
      state.notice = `${other.title} left key ${keyIndex + 1} and is now without a button.`;
    }
  }
  state.keys[keyIndex] = routineId;
  routine.disposition = "keyed";
  routine.keyIndex = keyIndex;
  state.panel = { mode: "sim", id: routineId, keyIndex };
  playhead = 0;
  save();
  render();
}

function setDisposition(id, disposition) {
  const routine = getRoutine(id);
  if (!routine) return;
  state.keys = state.keys.map((key) => (key === id ? null : key));
  routine.disposition = disposition;
  routine.keyIndex = null;
  state.panel = { mode: disposition === "human" ? "read" : "parked", id, keyIndex: null };
  state.notice = disposition === "human" ? `${routine.title} stays human. Its key, if it had one, is open.` : "";
  save();
  render();
}

function clearRoutineKey(id) {
  const routine = getRoutine(id);
  if (!routine) return;
  state.keys = state.keys.map((key) => (key === id ? null : key));
  routine.disposition = "unassigned";
  routine.keyIndex = null;
  state.panel = { mode: "parked", id, keyIndex: null };
  state.notice = `${routine.title} left its key open.`;
  save();
  render();
}

function editRoutine(id) {
  const routine = getRoutine(id);
  if (!routine) return;
  state.draft = structuredClone(routine);
  state.draft.scaffolded = true;
  normalizeDraft(state.draft);
  state.screen = "command";
  state.message = "";
  save();
  render();
}

function reopen(id, screen) {
  const routine = getRoutine(id);
  if (!routine) return;
  state.draft = structuredClone(routine);
  state.draft.scaffolded = true;
  normalizeDraft(state.draft);
  if (screen === "place") {
    const owned = state.keys.findIndex((key) => key === id);
    const firstEmpty = state.keys.findIndex((key) => !key);
    state.selectedKey = owned >= 0 ? owned : Math.max(firstEmpty, 0);
  }
  state.screen = screen;
  state.message = "";
  save();
  render();
}

function removeRoutine(id) {
  state.routines = state.routines.filter((routine) => routine.id !== id);
  state.keys = state.keys.map((key) => (key === id ? null : key));
  state.unfinished = state.unfinished.filter((draft) => draft.id !== id);
  if (state.draft?.id === id) state.draft = null;
  state.panel = { mode: "idle", id: null, keyIndex: null };
  state.pendingRemove = null;
  save();
  render();
}

function showSummary() {
  state.panel = { mode: "summary", id: null, keyIndex: null };
  render();
}

function summaryText() {
  const name = state.keypadName.trim() || "Untitled keypad";
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const lines = [
    "A BUTTON FOR THAT",
    "Keypad summary",
    "",
    "This file is a score, not a program.",
    "Nothing in it has been run. No tool is connected.",
    "",
    `Keypad: ${name}`,
    `Exported: ${date}`,
    "Kept in the browser that made it, until this export.",
    "",
  ];
  state.keys.slice(0, visibleCount()).forEach((id, index) => {
    lines.push(`— KEY ${index + 1}`);
    if (!id || !getRoutine(id)) {
      lines.push("Open. Nothing assigned.");
      lines.push("");
      return;
    }
    lines.push(...routineBlock(getRoutine(id)), "");
  });
  lines.push("— KEPT HUMAN");
  const human = state.routines.filter((routine) => routine.disposition === "human");
  if (!human.length) lines.push("None.", "");
  human.forEach((routine) => lines.push(...routineBlock(routine), ""));
  lines.push("— DESCRIBED, NOT KEYED");
  const parked = state.routines.filter((routine) => routine.disposition === "unassigned");
  if (!parked.length) lines.push("None.", "");
  parked.forEach((routine) => lines.push(...routineBlock(routine), ""));
  lines.push("—");
  lines.push("Which parts of life deserve a button, and what gets lost when a messy human routine becomes a command?");
  return lines.join("\n");
}

function routineBlock(routine) {
  const area = areaById(routine.area);
  return [
    `${area.label} · ${routine.title}`,
    "In their words",
    `Routine: ${routine.routine}`,
    `What is difficult: ${routine.difficulty}`,
    `The wish: ${routine.wish}`,
    "As a command",
    `Trigger: ${routine.trigger}`,
    `Inputs: ${routine.inputs}`,
    ...routine.steps.map((step, index) => `${index + 1}. ${step}`),
    `Desired outcome: ${routine.outcome}`,
    `Who decides: ${deciderLabel(routine.decider)}`,
    `Symbol: ${hasMark(routine) ? "a drawn mark" : (SYMBOLS.find(([id]) => id === routine.symbol)?.[1] || area.label)}`,
    `Where a person still judges or permits: ${routine.judgement}`,
  ];
}

function exportSummary() {
  const blob = new Blob([summaryText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "a-button-for-that.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function laySamples() {
  const plan = [
    ["work", "keyed"],
    ["home", "keyed"],
    ["relationships", "human"],
    ["rest", "unassigned"],
  ];
  plan.forEach(([areaId, disposition]) => {
    const area = areaById(areaId);
    if (state.routines.some((routine) => routine.title === area.sample.title && routine.area === areaId)) return;
    const routine = {
      id: uid(),
      area: areaId,
      ...structuredClone(area.sample),
      disposition,
      keyIndex: null,
    };
    if (disposition === "keyed") {
      const slot = state.keys.findIndex((id) => !id);
      if (slot >= 0) {
        state.keys[slot] = routine.id;
        routine.keyIndex = slot;
      } else routine.disposition = "unassigned";
    }
    state.routines.push(routine);
  });
  state.draft = null;
  state.screen = "wheel";
  state.panel = { mode: "idle", id: null, keyIndex: null };
  state.notice = "";
  save();
  render();
  document.getElementById("the-keypad")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetAll() {
  state = defaultState();
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  render();
}

function stopPlayback() {
  if (playTimer) window.clearInterval(playTimer);
  playTimer = null;
}

function startPlayback() {
  stopPlayback();
  const routine = state.panel?.id ? getRoutine(state.panel.id) : null;
  const beats = document.querySelectorAll("[data-beat]");
  if (!routine || !beats.length) return;
  const last = beats.length - 1;
  const paint = () => {
    beats.forEach((node) => {
      const index = Number(node.dataset.beat);
      node.classList.toggle("is-waiting", index > playhead);
      node.classList.toggle("is-here", index === playhead);
    });
  };
  if (reduceMotion.matches) {
    playhead = last;
    paint();
    return;
  }
  paint();
  playTimer = window.setInterval(() => {
    if (playhead >= last) {
      stopPlayback();
      return;
    }
    playhead += 1;
    paint();
  }, 700);
}

document.addEventListener("pointerdown", (event) => {
  const source = event.target.closest?.("[data-drag]");
  if (!source || event.button !== 0 || state.screen !== "keypad") return;
  pointerDrag = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    moved: false,
    kind: source.dataset.drag,
    keyIndex: source.dataset.key != null ? Number(source.dataset.key) : null,
    routineId: source.dataset.routineId || null,
    label: source.dataset.label || "Key",
  };
});

document.addEventListener("pointermove", (event) => {
  if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
  if (!pointerDrag.moved && Math.hypot(event.clientX - pointerDrag.x, event.clientY - pointerDrag.y) < 14) return;
  pointerDrag.moved = true;
  document.body.classList.add("is-dragging");
  const ghost = document.getElementById("ghost");
  ghost.hidden = false;
  ghost.textContent = pointerDrag.label;
  ghost.style.left = `${event.clientX}px`;
  ghost.style.top = `${event.clientY}px`;
  document.querySelectorAll(".is-drop").forEach((node) => node.classList.remove("is-drop"));
  const under = document.elementFromPoint(event.clientX, event.clientY);
  under?.closest?.("[data-key], [data-bay]")?.classList.add("is-drop");
});

document.addEventListener("pointerup", (event) => {
  if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
  const drag = pointerDrag;
  pointerDrag = null;
  document.body.classList.remove("is-dragging");
  const ghost = document.getElementById("ghost");
  ghost.hidden = true;
  document.querySelectorAll(".is-drop").forEach((node) => node.classList.remove("is-drop"));
  if (!drag.moved) return;
  suppressClick = true;
  const under = document.elementFromPoint(event.clientX, event.clientY);
  const keyEl = under?.closest?.("[data-key]");
  const bay = under?.closest?.("[data-bay]");
  if (drag.kind === "key" && keyEl && Number(keyEl.dataset.key) === drag.keyIndex) {
    pressKey(drag.keyIndex);
    window.setTimeout(() => { suppressClick = false; }, 250);
    return;
  }
  if (drag.kind === "key" && keyEl) swapKeys(drag.keyIndex, Number(keyEl.dataset.key));
  else if (drag.kind === "key" && bay?.dataset.bay === "human" && state.keys[drag.keyIndex]) setDisposition(state.keys[drag.keyIndex], "human");
  else if (drag.kind === "key" && bay?.dataset.bay === "unassigned" && state.keys[drag.keyIndex]) clearRoutineKey(state.keys[drag.keyIndex]);
  else if (drag.kind === "routine" && keyEl) placeRoutineOnKey(drag.routineId, Number(keyEl.dataset.key));
  else if (drag.kind === "routine" && bay?.dataset.bay) setDisposition(drag.routineId, bay.dataset.bay === "human" ? "human" : "unassigned");
  window.setTimeout(() => { suppressClick = false; }, 250);
});

document.addEventListener("pointercancel", () => {
  pointerDrag = null;
  document.body.classList.remove("is-dragging");
  const ghost = document.getElementById("ghost");
  if (ghost) ghost.hidden = true;
});

document.addEventListener("click", (event) => {
  if (!suppressClick) return;
  suppressClick = false;
  event.preventDefault();
  event.stopPropagation();
}, true);

document.getElementById("home-link").addEventListener("click", goHome);

render();
