import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
const ProjectCard = ({ project }) => {
  const options = {
    value: project.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <Link className="ProjectCard" to={`/project/${project._id}`}>
        <img
          src={project.images[0].url}
          alt={project.name}
          className="ProjectImg"
        />
        <p className="projectName">{project.name}</p>
        <div>
          <Rating {...options} />
          <span>({project.numOfReviews} Reviews)</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="downloadBox">
            <span className="p__Price">10 lượt tải xuống</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
