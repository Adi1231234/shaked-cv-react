export const cvData = {
  firstName: "Shaked",
  lastName: "Ashur",
  role: "Medical Student",

  contact: {
    phone: "050-3007469",
    email: "shaked28th@gmail.com",
    location: "Bee\u0027r Sheva, Israel",
    maritalStatus: "Single",
    birthInfo: "Birth year- 1999, Tel-Aviv",
  },

  languages: ["Hebrew", "English"],

  strengths: [
    "Coping with stressful situations",
    "Human Relations",
    "Strive for excellence",
    "Fast learner and adjustment to change",
  ],

  futurePlants: [
    "High education in the humanities",
    "Research work in science",
  ],

  profile: {
    paragraphs: [
      "Med student in Ben-Gurion University in the Negev, currently in my third year. Graduate of IDF\u2019s 8200 combat unit, human resources officer and commander in officers\u0027 course.",
      "Responsible, strives for excellence, great human relations, works well under pressure and workload.",
    ],
  },

  workExperience: [
    "Bioinformatics Lab Assistant in Tel Aviv University",
    "Boarding school guide at the Israeli Sciences and Arts Academy in Jerusalem",
    "Secretary in an accountant\u0027s office",
    "Private instruction in math and science",
    "Exam supervisor at the Ministry of Education",
  ],

  education: [
    {
      date: "2014-2017",
      place: "The Israel Arts and Sciences Academy:",
      details: "majored in chemistry and biology.",
      bullets: ["Graduation with honors."],
    },
    {
      date: "2023-Present",
      place: "Medical studies at Ben Gurion University of the Negev.",
      details: "",
      bullets: [],
    },
  ],

  military: [
    {
      title: "8200 Field Operative Unit",
      date: "2018-2020",
      bullets: [
        "Part of a pioneering team of women fighters in the IDF.",
        "Utilizing advanced military technological systems for special operations.",
        "Excellent teamwork capabilities decisions making in stressful situations.",
      ],
    },
    {
      title: "Officer training",
      date: "2019-2020",
      bullets: [
        "Officers course in BHD1.",
        "Special training for intelligent officers.",
      ],
    },
    {
      title: "HR Analytics Officer in 8200",
      date: "2020-2021",
      bullets: [
        "Strategic management of all career soldiers in 8200 unit.",
        "Commanding experience, guidance of colleagues, working with senior officials, standing under pressure and workload.",
      ],
    },
    {
      title: "Team Commander in Officers Training course, BHD 1",
      date: "2021-2022",
      bullets: [
        "Commanding and guiding cadets in their training to become officers.",
        "Devising new seminars content, excellent at talking to audience.",
        "daptation to change and creative thinking.",
      ],
    },
    {
      title: "Reserve Service",
      date: "2022-2024",
      bullets: [
        "Professional Officers Course - Training Officer",
        "8200 Special Unit",
      ],
    },
  ],

  volunteering: [
    "Nefesh Yehudi Fellowship",
    "Newsletter and release conference director in Alumot association",
    "Hod Jerusalem nursing department",
    "Independent volunteering with Holocaust survivors",
    "Instructor in youth movements",
  ],
} as const;

export type CVData = typeof cvData;
