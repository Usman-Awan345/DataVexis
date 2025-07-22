import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function PostProject() {
  const { id } = useParams();
  const { products } = useContext(ShopContext);

  if (!products || products.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  const project = products.find((p) => p?._id?.toString() === id);

  if (!project) {
    return <h2 style={{ textAlign: "center" }}>Project Not Found</h2>;
  }

  return (
    <div
      style={{
        padding: "50px 20px",
        background: "#f4f7fb",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1500px", // Increased width here
          width: "100%",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Title & Description */}
        <div
          style={{
            flex: "1",
            padding: "40px",
            minWidth: "300px",
            background: "#ffffff",
            borderRight: "1px solid #eaeaea",
          }}
        >
          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: "600",
              color: "#333",
              marginBottom: "20px",
              lineHeight: "1.3",
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "30px",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Right Side - Image & Video */}
        <div
          style={{
            flex: "1",
            background: "#f9f9f9",
            padding: "30px",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Zoomable Fullscreen Image */}
          <Zoom zoomMargin={40}>
            <img
              src={project.image[0]}
              alt={project.title}
              style={{
                width: "100%",
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
                cursor: "zoom-in",
                marginBottom: "20px",
              }}
            />
          </Zoom>

          {/* Video */}
          <div style={{ width: "100%" }}>
            <video
              controls
              style={{
                width: "100%",
                maxHeight: "350px",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
              }}
            >
              <source src={project.video[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostProject;
