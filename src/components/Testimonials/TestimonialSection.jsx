import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Mark Williams",
    image: "/images/clients/client1.jpg",
    rating: 5,
    comment: "I’m extremely impressed with the e-commerce website developed by DataVexis. ",
  },
  {
    name: "Sophia Hocane",
    image: "/images/clients/client2.jpg",
    rating: 5,
    comment: "Excellent communication and top-notch development skills. Highly recommended!",
  },
  {
    name: "Michael Brown",
    image: "/images/clients/client3.jpg",
    rating: 5,
    comment: "Delivered my project on time with premium quality. Will hire again!",
  },
  {
    name: "Aleksanker Nowak",
    image: "/images/clients/client4.jpg",
    rating: 5,
    comment: "The design and responsiveness of my website are absolutely perfect!",
  },
  {
    name: "David Wilson",
    image: "/images/clients/client5.jpg",
    rating: 5,
    comment: "Great work ethic and professional approach. Totally satisfied!",
  },
  {
    name: "Olivia Martinez",
    image: "/images/clients/client6.jpg",
    rating: 5,
    comment: "They exceeded my expectations with their creativity and support.",
  },
  {
    name: "Ethan Anderson",
    image: "/images/clients/client7.jpg",
    rating: 5,
    comment: "Best team I’ve worked with! Smooth process and fantastic results.",
  },
  {
    name: "Ava Taylor",
    image: "/images/clients/client8.jpg",
    rating: 5,
    comment: "They understood my vision perfectly and brought it to life beautifully.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2> Client <span>Testimonials</span></h2>
        <p>Hear what our happy clients have to say about our services.</p>
      </div>

<Swiper
  modules={[Autoplay, Pagination]}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  spaceBetween={30}
  breakpoints={{
    0: { slidesPerView: 1 },      // Mobile smallest
    500: { slidesPerView: 1 },    // Small mobile
    667: { slidesPerView: 1 },    // Medium mobile
    991: { slidesPerView: 2 },    // Tablet
    1200: { slidesPerView: 3 },   // Desktop
  }}
  className="testimonial-swiper"
>
  {testimonials.map((review, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-card">
        <img src={review.image} alt={review.name} className="client-photo" />
        <h4 className="client-name">{review.name}</h4>
        <div className="stars">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>
        <p className="client-comment">"{review.comment}"</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


    </section>
  );
};

export default TestimonialSection;
