import ProjectDTO from "../models/ProjectDTO";

const tags = [
  "Javascript",
  "Python",
  "OpenCV",
  "Git",
  "HTML",
  "CSS",
  "Azure functions",
  "Fastapi",
  "Go",
  "PostgreSQL",
  "Google Maps",
];

const vicCameraLocationsData: ProjectDTO = {
  name: "viccam.info",
  type: "Go API",
  contentHeight: 4531,
  headLineImage: {
    url: "/vic-camera-site.png",
    width: 1400,
    height: 800,
  },
  card: {
    title: "viccam.info",
    date: "2/2025",
    slug: "vic-camera-locations",
    image: { url: "/vic-camera-site.png", width: 1400, height: 800 },
    tags: [tags[8], tags[9], tags[10], tags[3], tags[4], tags[5]],
  },
  date: "2/2025",
  members: ["Harris Perdis [Software Developer]"],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/unknown-api",
      private: false,
    },
    {
      name: "WEBSITE",
      link: "https://viccam.info",
      private: false,
    },
  ],
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "viccam.info is a live map for Victoria road camera data. The project imports government-published camera resources, resolves each road and suburb entry into map geometry, and displays mobile camera coverage, fixed camera points, and community reports in a single interface.",
            size: "text-2xl",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-mobile-camera.webp",
            width: 1200,
            height: 673,
          },
        },
        {
          image: {
            url: "/vic-camera-site-mobile-speed-camera.jpeg",
            width: 1200,
            height: 674,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The current version is built as a Go API with a PostgreSQL database and a lightweight map interface served directly by the backend. Import jobs scrape the source pages, download the latest spreadsheets in memory, normalise the rows, and create versioned imports so the site can always serve the newest dataset.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-legend.svg",
            width: 1200,
            height: 700,
          },
        },
      ],
    },

    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-redline.png",
            width: 2880,
            height: 1800,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "After parsing the source rows, the importer deduplicates the road and suburb pairs and resolves suburb boundaries using Vicmap first, with Overpass as a fallback. Those bounds are then used to fetch road geometry and store successful and failed lookups against each import for later review.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "The frontend requests only the latest cameras inside the current map bounds and renders mobile camera roads as coloured overlays, fixed cameras as dots, and user reports as clustered markers. This keeps the map responsive while still showing the newest import timestamp and the latest public reports.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-blueline.png",
            width: 2880,
            height: 1800,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Team",
            body: "I completed this project solo using Git for source control and handled the scraper, import flow, API endpoints, and map integration myself. The project brought together data ingestion, geospatial processing, and frontend interaction in a single end-to-end build.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "A key challenge was dealing with inconsistent public source data and turning it into reliable map results. The importer has to locate the right downloadable resources from changing page markup, geocode fixed camera locations accurately, and fall back between Vicmap and Overpass whenever a suburb or road cannot be resolved cleanly.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Next Step",
            body: "The next step for this project is to integrate it into a vehicle so the camera data can support an in-car driving experience instead of only being viewed through the website.",
          },
        },
        {
          image: {
            url: "/vic-camera-site-fixed.png",
            width: 2086,
            height: 1206,
          },
        },
      ],
    },
  ],
};

const drowzalert: ProjectDTO = {
  name: "drowzalert",
  type: "Hackathon",
  contentHeight: 4998,
  headLineImage: {
    url: "/drowzalert.jpeg",
    width: 1920,
    height: 1080,
  },
  card: {
    title: "drowzalert",
    date: "3/2023",
    slug: "drowzalert",
    image: { url: "/drowzalert.jpeg", width: 1920, height: 1080 },
    tags: [tags[2], tags[1], tags[3]],
  },
  date: "3/2023",
  members: [
    "Harris Perdis [Computer Science Student]",
    "Hung Ba Huynh [Computer Science Student]",
    "William Zhang [Engineering Student]",
    "Jack Zheng [IT Student]",
    "Swathi Subramanyan [IT Student]",
    "Roshan Ravikumar [IT Student]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/drowzalert",
      private: false,
    },
    {
      name: "YOUTUBE",
      link: "https://youtu.be/7isfUSZ16ZI",
      private: false,
    },
  ],
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Hackathon Prize and Placement",
            body: "This project was completed within a Hackathon named UniHack on the Monash Clayton University Campus. Our team won a cash prize and placed 3rd in the onsite awards.",
            size: "text-2xl",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "This project utilises a camera to detect closed eyelids as an early sign of drowsiness and fatigue in drivers. Eyelids closed continuously for approximately three seconds (micro-sleep) trigger an alert sound and an automated voice that advises the driver to take a rest. Each such detection would additionally trigger a minor electrical stimulation in the steering wheel that the driver will be in contact with, which is especially useful for drivers with hearing loss. This ensures that they are aware of their state and can take action to prevent accidents.",
            size: "text-2xl",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/drowzalert-eye.jpeg",
            width: 640,
            height: 481,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The application was prototyped on a laptop using an integrated webcam to capture the live footage of the driver. We used the concept of facial landmarks to detect the closed position of the eyelids.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "These landmarks were formed via a series of points that were tracked through space and specifically mapped to the eyes. The Python libraries, OpenCV (to provide access to the camera and image augmentation) and dlib (to track facial landmarks) were leveraged for this operation.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/drowzalert-gif-noalert.gif",
            width: 260,
            height: 197,
          },
        },
        {
          paragraph: {
            body: "We used an eye size heuristic that was based on the X, Y coordinates of the landmarks detected to conclude if the driver had their eyes closed. The gif illustrates how normal or rapid blinking doesn't trigger an alert, but closed eyelids do. Please find the complete video with sound in the opening section.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "The graph shows the size of the left eye when closing and opening, with the Y-axis as the eye ratio size, and the X-axis as the time axis. Noting that from 0 to 40, the driver is displaying drowsy closed eyes. From 40 upward, the driver is blinking normally. Moreover, data smoothing techniques were used to avoid false positives such as from natural blinking.",
          },
        },
        {
          image: {
            url: "/drowzalert-graph.png",
            width: 640,
            height: 480,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "The alert sound and generated voice were then integrated asynchronously into the application to activate upon detecting drowsy closed eyes. Further, the laptop’s Bluetooth was set up to communicate with an electrical stimulator.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-car.png",
            width: 2880,
            height: 1800,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "Documentation for the dlib python library posed another issue as it was poorly written. The workaround was to refer to multiple examples online, try to translate their documentation for C++ into our Python use case, and continuously employ the trial-and-error method.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Understanding our data from the landmarks was difficult because each group member had a different eye size and shape. From this, we found it difficult to determine a good threshold for sleepiness and a method to avoid false positives. There are also few pieces of literature and datasets publicly available for drowsy eyes. This was heuristically solved by selecting a good middle ground for our threshold and smoothing the data, using all of our members' eyes data.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Team and Accomplishments",
            body: "We are proud of our ability to collaborate with multiple people on the same project. We were immediately able to identify and play to each of our strengths. This involved using project management tools such as Trello, communication tools such as discord, and code-sharing tools such as GitHub. We easily reached a consensus on which pressing issue we were going to focus on and efficiently moved forward to the ideation process. Each of our unique perspectives helped address problem areas in our idea as well as come up with solutions to deal with them. Many of us were exposed to these tools for the first time during our first hackathon. Despite this, exceptional teamwork and work ethic ensured smooth progress and ultimately, a great project.",
          },
        },
      ],
    },
  ],
};

const projects: ProjectDTO[] = [vicCameraLocationsData, drowzalert];

export default projects;
