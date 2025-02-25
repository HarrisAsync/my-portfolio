import PortfolioCard from "./components/PortfolioCard";
import Projects from "./portfolio/data";

const ProjectsPage = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: "2000px" }}>
      <h1
        className="font-hubot text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl my-32"
        style={{ color: "#1944D0" }}
      >
        <span>Hey, I&apos;m Harris Perdis, a software </span>
        <span className="hidden md:inline">
          {" "}
          <br />{" "}
        </span>
        developer based in Melbourne, Australia.
      </h1>

      <p
        className="font-space mb-10 text-xl"
        id="portfolio"
        style={{ color: "#1944D0" }}
      >{`{PORTFOLIO}`}</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5">
        {Projects.map((project, index) => {
          return <PortfolioCard key={index} project={project} />;
        })}
      </div>
      <p
        className="font-space mt-32 text-xl"
        style={{ color: "#1944D0" }}
      >{`{ABOUT ME}`}</p>
      <p
        className="font-hubot mt-10 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl w-100 md:w-3/4"
        style={{ color: "#1944D0" }}
      >
        I&apos;m Harris Perdis, a junior software developer with a strong
        background in <i>Mathematics and Data Science</i>, I have spent the past
        year working as a junior developer, focusing primarily on web
        development. Throughout my academic and professional journey, I have
        demonstrated a consistent ability to develop
        <i> innovative solutions to complex problems</i> through rigorous
        analytical and critical thinking. I am passionate about tackling
        challenging mathematical and technical problems, building comprehensive
        web applications, and continuously expanding my expertise.
      </p>
      <p
        className="font-space my-10 text-xl"
        style={{ color: "#1944D0" }}
      >{`{SKILLS}`}</p>
      <div
        className="flex-none md:flex text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
        style={{ color: "#1944D0" }}
      >
        <div className="flex-col font-space">
          <p>[Software]</p>
          <p>» NextJS</p>
          <p>» React</p>
          <p>» ASP.NET Core</p>
          <p>» Entity Framework</p>
          <p>» SQL Mangement Studio</p>
          <p>» Git</p>
        </div>
        <div className="flex-col pt-5 pl-0 md:pt-0 md:pl-5 font-space">
          <p>[Languages]</p>
          <p>» Javascript</p>
          <p>» C#</p>
          <p>» Python</p>
          <p>» SQL</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
