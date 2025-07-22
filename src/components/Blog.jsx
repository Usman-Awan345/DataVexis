import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext"; // adjust path if needed

const Blog = () => {
  const { blogs } = useContext(ShopContext); // ✅ get blogs from context

  return (
    <>
      <Navbar />
      <section className="blog" id="blog">
        <div className="main-text">
          <h2 className="heading">Blog</h2>
          <span>Latest News & Posts</span>
        </div>

        {blogs && blogs.length > 0 ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="blog-box mySwiper"
          >
            {blogs.map((post, index) => (
              <SwiperSlide key={index} className="card">
                <div className="card-top">
                  <img src={post.image} alt={post.title || "Blog Image"} />
                </div>
                <div className="card-info">
                  <h2>{post.title}</h2>
                  <span className="date">{post.category}</span>
                  <p className="excerpt">Discover insights and ideas in our latest post.</p>
                  <Link to="#" className="readMore">Explore More</Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="no-posts">No blog posts available.</p>
        )}
      </section>
    </>
  );
};

export default Blog;
