import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { portfolioData } from "../../components/PortfolioSection/PortfolioSection";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.find((p) => p.id === parseInt(id));

  // 📌 Jab component load ho, top se start karo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) return <h2 className="not-found">Project Not Found</h2>;

  return (
    <div className="project-detail-container">
      <div className="image-container">
        <img
          src={project.images[0]}
          alt={project.title}
          className="main-image"
        />
      </div>

      <div className="project-info">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description-text">{project.description}</p>

        <ul className="project-features">
          {project.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <div className="project-meta">
          <span className="badge">Duration : {project.duration}</span>
          <span className="badge">Price : {project.price}</span>
        </div>

        <div className="tech-card">
          <h3>🛠 Technologies Used</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="review-section">
          <div className="review-card">
            <img
              src={project.review.images[0]}
              alt={project.review.name}
              className="client-img"
            />
            <h4 className="review-name">{project.review.name}</h4>
            <div className="stars">
              {"★".repeat(project.review.rating)}
              {"☆".repeat(5 - project.review.rating)}
            </div>
            <p>{project.review.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
