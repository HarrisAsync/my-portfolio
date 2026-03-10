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
  "Next.js",
  "Payload CMS",
  "Stripe",
];

const vicCameraLocationsData: ProjectDTO = {
  name: "viccam",
  type: "Go API",
  contentHeight: 4531,
  headLineImage: {
    url: "/vic-camera-site-redline.png",
    width: 3024,
    height: 1728,
  },
  card: {
    title: "viccam",
    date: "11/2025",
    slug: "vic-camera-locations",
    image: { url: "/vic-camera-site-redline.png", width: 3024, height: 1728 },
    tags: [tags[8], tags[9], tags[10], tags[3], tags[4], tags[5]],
  },
  date: "11/2025",
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
            body: "viccam turns public camera data into a map you can actually use while planning a drive in Victoria. The platform combines government camera datasets with live community reports so users can quickly understand what is on their route and what has recently been seen nearby.",
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
            body: "The backend is a Go API backed by PostgreSQL, and it serves both import endpoints and map data endpoints. A scheduled import flow fetches the latest source files, parses and normalises rows, and stores each run as a versioned import so the frontend always reads the newest successful dataset.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-blueline.png",
            width: 3024,
            height: 1728,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "During import, road and suburb pairs are deduplicated and validated before geospatial lookup. Suburb boundaries are resolved with Vicmap first and Overpass as fallback, then road geometry and fixed-camera points are attached so each map object has reliable coordinates.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "On the frontend, the map requests only data inside the current viewport to keep interaction fast. Mobile cameras are shown as line overlays, fixed cameras as dots, and reports as clustered markers with timestamps. Users can enter report mode, tap a location, choose the camera type, and submit a new report directly on the map.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-report.png",
            width: 3024,
            height: 1726,
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-dots.png",
            width: 3024,
            height: 1724,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Legend",
            body: "Red lines represent mobile speed camera roads, yellow lines represent mobile device and seatbelt camera roads, green dots represent fixed cameras, and grey outlined dots represent user-submitted report locations.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "The biggest challenge was data quality and consistency across sources. I had to make the importer resilient to source format changes, handle geocoding ambiguity for fixed-camera locations, and build fallbacks so missing suburb or road geometry does not break the user experience.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Next Step",
            body: "The next step for this project is to integrate it into a mobile app so the camera data can support an in-car driving experience instead of only being viewed through the website.",
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

const jackTheLadCafe: ProjectDTO = {
  name: "jtlcafe",
  type: "Payload CMS",
  contentHeight: 5600,
  headLineImage: {
    url: "/jtl-landing.png",
    width: 3024,
    height: 1724,
  },
  card: {
    title: "jtlcafe",
    date: "3/2026",
    slug: "jack-the-lad-cafe",
    image: { url: "/jtl-landing.png", width: 3024, height: 1724 },
    tags: [tags[11], tags[0], tags[4], tags[5], tags[12], tags[13], tags[3]],
  },
  date: "3/2026",
  members: ["Harris Perdis [Software Developer]"],
  links: [
    {
      name: "GITHUB",
      link: "",
      private: true,
    },
    {
      name: "WEBSITE",
      link: "https://jtlcafe.com.au",
      private: false,
    },
  ],
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "jtlcafe is a live hospitality business in Chelsea, Melbourne. This build focused on translating the in-store experience into a fast and trustworthy website where regulars can quickly find opening hours, browse food and merch, and book or order without friction.",
            size: "text-2xl",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/jtl-home.png",
            width: 3024,
            height: 1726,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Real Business Goals",
            body: "Because this is a real venue operating seven days a week, the site had to support day-to-day operations instead of only looking good. The content and layout were designed to answer customer intent quickly: where the cafe is, when it is open, how to order ahead, and what can be purchased online.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/jtl-store.png",
            width: 3024,
            height: 1728,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "CMS and Admin",
            body: "Payload powers the CMS and admin workflows so staff can update menu content, manage product listings, and keep messaging current without code changes. This gives the business control over everyday updates while preserving consistent presentation across the site.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/jtl-admin.png",
            width: 3024,
            height: 1728,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Commerce and Payments",
            body: "Stripe was integrated for secure checkout and smoother conversion on online orders and merchandise sales. The objective was to reduce purchase friction, keep payment handling reliable, and make fulfilment simpler for a small team during busy service periods.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/jtl-footer.png",
            width: 3014,
            height: 1726,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Outcome",
            body: "The result is a production-ready digital presence that reflects the brand, supports operational needs, and connects website traffic to in-store and online revenue channels. The platform is now positioned for ongoing growth through campaign updates, new products, and seasonal content.",
          },
        },
      ],
    },
  ],
};

const projects: ProjectDTO[] = [jackTheLadCafe, vicCameraLocationsData, drowzalert];

export default projects;
