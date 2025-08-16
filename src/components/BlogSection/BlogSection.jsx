import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Trends in Website Development 2025",
    description: "Discover the latest technologies and practices shaping modern web development.",
    image: "/images/blog/blog5.jpg",
    author: "John Doe",
    date: "July 28, 2025",
    link: "#",
  },
  {
    id: 2,
    title: "AI Transforming Digital Solutions",
    description: "Explore how Artificial Intelligence is revolutionizing businesses worldwide.",
    image: "/images/blog/blog8.jpg",
    author: "Emily Smith",
    date: "July 21, 2025",
    link: "#",
  },
  {
    id: 3,
    title: "Creative Graphic Design Hacks",
    description: "Learn tips and tricks to create visually stunning designs that grab attention.",
    image: "/images/blog/blog7.jpg",
    author: "Michael Brown",
    date: "July 14, 2025",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-header">
        <h2> Our <span>Blogs</span></h2>
        <p>Latest insights and articles from our experts to help grow your digital presence.</p>
      </div>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-meta">
                <span> {post.author}</span>
                <span> {post.date}</span>
              </div>
              <a href={post.link} className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
