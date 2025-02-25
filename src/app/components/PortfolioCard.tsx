import Image from "next/image";
import Link from "next/link";
import ProjectDTO from "../models/ProjectDTO";

interface Props {
  project: ProjectDTO;
}

function PortfolioCard({ project }: Props) {
  return (
    <div className="card outline outline-1 rounded-2xl">
      <Link href={`portfolio/${project.card.slug}`}>
        <figure className="rounded-t-2xl">
          <Image
            src={project.card.image.url}
            width={project.card.image.width}
            height={project.card.image.height}
            alt={"card image"}
          ></Image>
        </figure>
        <div className="card-body">
          <p className="font-space text-xs">{`{${project.type}}`}</p>
          <h2 className="font-space -mt-2" style={{ fontSize: "32px" }}>
            {project.card.title}
          </h2>
          <time className="font-space text-sm mb-2">{project.card.date}</time>
          <div className="card-actions">
            {project.card.tags.map((item, index) => {
              return (
                <div
                  key={index}
                  className="badge badge-outline font-space text-sm"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioCard;
