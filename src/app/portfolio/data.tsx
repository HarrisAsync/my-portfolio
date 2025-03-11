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
];

const vicCameraLocationsData: ProjectDTO = {
  name: "vic-camera-locations",
  type: "Python API",
  contentHeight: 4531,
  headLineImage: {
    url: "/vic-camera-site.png",
    width: 1400,
    height: 800,
  },
  card: {
    title: "vic-camera-locations",
    date: "2/2025",
    slug: "vic-camera-locations",
    image: { url: "/vic-camera-site.png", width: 1400, height: 800 },
    tags: [tags[0], tags[1], tags[3], tags[4], tags[5], tags[6], tags[7]],
  },
  date: "2/2025",
  members: [
    "Harris Perdis [Software Developer]",
    "Reuben Cook [Software Developer]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/vic-camera-locations",
      private: false,
    },
    {
      name: "WEBSITE",
      link: "https://vic-roads-cameras.com",
      private: false,
    },
  ],
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "This project outlines roads within Victoria, Australia where mobile speed and seatbelt / phone cameras are possibly parked or stationed. The official vic roads website is typically updated monthly, with excel sheets which contain the columns road and suburb. Our website periodically scrapes and transforms that data into coordinates to display them on a map.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The website comprises of three elements: an api built with fastapi, azure function and postgreSQL database. The language used in these elements is python. The azure function performs the scrapping, where it attempts to fetch the url from the vic roads website and subsequently performs a post request to the api. When the api receives the post request, it downloads the excel sheets in memory. There is minimal lenience when selecting and finding the data. If the initial data pattern within the sheet changes, the post endpoint will fail. This was chosen as a result of time constraints.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-diagram.svg",
            width: 500,
            height: 5000,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Once the data is parsed into arrays, the road and suburb pairs are checked to ensure that they do not currently exist in the database. If they do exist, a request to find the bounding box of the suburb is sent to overpass. Overpass is a free api which contains information for suburbs, roads, landmarks, etc. We then send another request to overpass with the suburb bounding box to retrieve the road line coordinates.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Using the google maps api and these road coordinates, we draw on the map blue and red lines to signify either mobile speed and seatbelt / phone cameras, respectively. This page is served statically via the api.",
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
            body: "We completed this project using git for source control and discord for commutation. We worked on a single branch due to a large enough separation of concerns. Reuben Cook, a work colleague, was easy to work with and was knowledgeable. He scripted the database and overpass logic, whilst I scripted the scrapping and post endpoint logic. We primarily worked together on video call after work hours to complete this project.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "At our workplace, we predominantly work with typed languages, and as we developed and ran the project, we quickly realised the significant benefits of explicit typing. We would find issues only at runtime and therefore spend extra time debugging. We slowly began using explicit typing within python to some extent, but not throughout. There is an ongoing technical challenge with retrieving overpass data, specifically for certain roads or suburbs. This issue results in missing lines on the map. We're actively working on resolving this issue.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Future Improvements",
            body: "In future, we plan to enhance the website by integrating fixed camera points on the map, along with a feature that allows users to report sightings of mobile cameras. The former is currently available on the vic roads official website. This will enable real-time updates and greater accuracy.",
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

const vicCameraLocationsData2: ProjectDTO = {
  name: "vic-camera-locations2",
  type: "Python API",
  contentHeight: 4531,
  headLineImage: {
    url: "/vic-camera-site-redline.png",
    width: 2880,
    height: 1800,
  },
  card: {
    title: "vic-camera-locations",
    date: "2/2025",
    slug: "vic-camera-locations2",
    image: { url: "/vic-camera-site-redline.png", width: 2880, height: 1800 },
    tags: [tags[0], tags[1], tags[3], tags[4], tags[5], tags[6], tags[7]],
  },
  date: "2/2025",
  members: [
    "Harris Perdis [Software Developer]",
    "Reuben Cook [Software Developer]",
  ],
  links: [
    {
      name: "GITHUB",
      link: "https://github.com/HarrisAsync/vic-camera-locations",
      private: false,
    },
    {
      name: "WEBSITE",
      link: "https://vic-roads-cameras.com",
      private: false,
    },
  ],
  rows: [
    {
      cells: [
        {
          paragraph: {
            title: "Project Description",
            body: "This project outlines roads within Victoria, Australia where mobile speed and seatbelt / phone cameras are possibly parked or stationed. The official vic roads website is typically updated monthly, with excel sheets which contain the columns road and suburb. Our website periodically scrapes and transforms that data into coordinates to display them on a map.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Architecture",
            body: "The website comprises of three elements: an api built with fastapi, azure function and postgreSQL database. The language used in these elements is python. The azure function performs the scrapping, where it attempts to fetch the url from the vic roads website and subsequently performs a post request to the api. When the api receives the post request, it downloads the excel sheets in memory. There is minimal lenience when selecting and finding the data. If the initial data pattern within the sheet changes, the post endpoint will fail. This was chosen as a result of time constraints.",
          },
        },
      ],
    },
    {
      cells: [
        {
          image: {
            url: "/vic-camera-site-diagram.svg",
            width: 500,
            height: 5000,
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Once the data is parsed into arrays, the road and suburb pairs are checked to ensure that they do not currently exist in the database. If they do exist, a request to find the bounding box of the suburb is sent to overpass. Overpass is a free api which contains information for suburbs, roads, landmarks, etc. We then send another request to overpass with the suburb bounding box to retrieve the road line coordinates.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            body: "Using the google maps api and these road coordinates, we draw on the map blue and red lines to signify either mobile speed and seatbelt / phone cameras, respectively. This page is served statically via the api.",
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
            body: "We completed this project using git for source control and discord for commutation. We worked on a single branch due to a large enough separation of concerns. Reuben Cook, a work colleague, was easy to work with and was knowledgeable. He scripted the database and overpass logic, whilst I scripted the scrapping and post endpoint logic. We primarily worked together on video call after work hours to complete this project.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Challenges",
            body: "At our workplace, we predominantly work with typed languages, and as we developed and ran the project, we quickly realised the significant benefits of explicit typing. We would find issues only at runtime and therefore spend extra time debugging. We slowly began using explicit typing within python to some extent, but not throughout. There is an ongoing technical challenge with retrieving overpass data, specifically for certain roads or suburbs. This issue results in missing lines on the map. We're actively working on resolving this issue.",
          },
        },
      ],
    },
    {
      cells: [
        {
          paragraph: {
            title: "Future Improvements",
            body: "In future, we plan to enhance the website by integrating fixed camera points on the map, along with a feature that allows users to report sightings of mobile cameras. The former is currently available on the vic roads official website. This will enable real-time updates and greater accuracy.",
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
          image: {
            url: "/vic-camera-site-car.png",
            width: 2880,
            height: 1800,
          },
        },
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

const projects: ProjectDTO[] = [
  vicCameraLocationsData,
  drowzalert,
  vicCameraLocationsData2,
];

export default projects;
