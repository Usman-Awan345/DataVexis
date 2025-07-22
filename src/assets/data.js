import img1 from './1.jpeg';
import img2 from './2.jpeg';
import img3 from './My-Blog.png';
import img4 from './Resturant.jpeg';
import img5 from './ShopCArt.jpeg';
import img6 from './Travels and Tours.jpeg';


// import video1 from './project_1.mp4';
import video2 from './MU-Products.mp4';
import video3 from './My-Blog App.mp4';
import video4 from './Resturant.mp4';
import video5 from './ShopCart E_Commerce.mp4';
import video6 from './Travels&Tours.mp4';

// Blogs
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";
import blog4 from "../assets/blogs/blog4.png";

export const products = [
  {
    _id: "1",
    title: "MERN Stack E-Commerce Website ",
    description: `I developed a fully functional e-commerce website using the MERN stack (MongoDB, Express, React, Node.js), with a custom-built admin panel. The project features seamless integration with Stripe for secure payments and includes a fully operational add-to-cart functionality.

For styling, I used Tailwind CSS to ensure a responsive, modern design, and utilized Cloudinary and Multer for efficient image handling and uploads. The admin panel allows for complete control over the product catalog, user management, and order processing.

This project delivers a smooth and secure shopping experience with features like:
- User authentication
- Product search and filter
- Cart management
- Secure payment gateway via Stripe

It’s a scalable, user-friendly e-commerce solution built with the latest web technologies.`,
    image: [img1, img2, img3],
    video: [video2],
    category: "mern",
    price: 300.99, // Example price
    duration: "2 weeks", // Example duration
  },

  {
    _id: "2",
    title: "MY_BLOG APP",
    description: `I have developed a MERN Stack Blog Application with a fully functional Admin Dashboard using MongoDB, Express.js, React.js, and Node.js. The application is feature-rich, secure, and optimized for performance:

User Authentication with JSON Web Tokens (JWT) and bcrypt to ensure secure login and registration

File Uploads using Multer for handling images, with media optimized and stored on Cloudinary

Tailwind CSS for sleek, responsive, and modern UI design that’s fully mobile‑optimized

CRUD Functionality for creating, reading, updating, and deleting blog posts from the admin panel

Admin Dashboard for content management, including the ability to manage blog posts, users, and comments

Customizable Blog Post Features: categories, tags, featured images, and comments for user interaction

SEO Optimization and performance tuning to enhance visibility and loading speed

API Endpoints built with Express.js to handle all back‑end operations securely and efficiently

This blog app provides a smooth user experience with easy content management for admins. Ready to bring your blogging platform online with all the features you need? Let’s build it together!`,
    image: [img3],
    video: [video3],
    category: "mern",
    price: 130.99, // Example price
    duration: "1 week", // Example duration
  },

  {
    _id: "3",
    title: "MUCOOK RESTURANT APP",
    description: "I built a sleek, fully responsive restaurant website using React, HTML, CSS, and JavaScript. Leveraging React’s component architecture and hooks, I created an interactive, filterable menu with smooth hover animations and a real‑time validated reservation form using React Hook Form and Yup. A react‑slick image carousel and Framer Motion scroll animations enhance visual engagement, while a sticky React navbar ensures seamless navigation. I optimized performance with lazy‑loaded images, wrote semantic HTML5 markup, and styled the UI with Tailwind CSS and custom CSS modules—demonstrating a polished balance of design, interactivity, and best practices in a modern React application.",
    image: [img4],
    video: [video4],
    category: "frontend",
    price: 90.99, // Example price
    duration: "1 weeks", // Example duration
  },

  {
    _id: "4",
    title: "ShopCart E-Commerce",
    description: `I built a modern, performant front‑end website using React.js, JavaScript (ES6+), HTML5, and CSS3, leveraging advanced React features for a seamless user experience:

Component‑Driven Architecture with functional components and React Hooks (useState, useEffect, useContext) for clean state management

React Router for dynamic, multi‑page navigation without full reloads

CSS Modules (or Styled‑Components) to scope styles locally and prevent naming collisions

Responsive, Mobile‑First Design using Flexbox and CSS Grid for layouts that adapt flawlessly to all screen sizes

Asynchronous Data Fetching via Axios (or Fetch API) paired with React Suspense for smoother loading states

Context API (or Redux) to manage global state like user auth and theme settings

Lazy Loading with React.lazy and Suspense to optimize bundle size and initial load performance

Accessibility Best Practices: semantic HTML, ARIA attributes, and keyboard navigation support

Performance Optimizations: code splitting, memoization with React.memo and useCallback, and image optimization

This stack delivers a fast, maintainable, and scalable front‑end that’s easy to extend. Whether you need a marketing site, dashboard, or e‑commerce UI, this React‑powered solution ensures top‑notch UX and developer experience. Let’s bring your next project to life!`,
    image: [img5],
    video: [video5],
    category: "frontend",
    price: 120.99, // Example price
    duration: "1 week", // Example duration
  },

  {
    _id: "5",
    title: "Travels & Tours",
    description: `I developed a modern Travel & Tours website using React.js, SCSS, and JavaScript to deliver a dynamic, responsive, and visually appealing user experience. The website includes:

React.js for a seamless, interactive, and component-driven interface

SCSS for clean, maintainable, and customizable styling, with variables and mixins to ensure a scalable design

JavaScript (ES6+) to handle dynamic functionality such as form validation, filtering, and responsive design features

React Router for smooth navigation between different pages (destinations, packages, booking forms) without page reloads

Interactive Features like sliders, modals, and tabs to showcase tours, packages, and special offers

API Integration to fetch real-time data on travel destinations, prices, and availability

Responsive Design using Flexbox and CSS Grid to ensure an optimal experience across all devices

SEO Optimization with meta tags, headings, and semantic HTML to improve visibility in search engines

Booking Form with client-side validation for smooth tour reservations

This website provides an engaging platform for users to explore and book their dream vacations. Ready to turn your travel agency’s online presence into a customer magnet? Let’s start your project today!`,
    image: [img6],
    video: [video6],
    category: "frontend",
    price: 120.99, // Example price
    duration: "3 Days", // Example duration
  },
];

export const blogs = [
  { title: "Top Shopping Tips for Smart Buyers", category: "Men", image: blog1 },
  { title: "Latest Trends in Online Shopping 2024", category: "Women", image: blog2 },
  { title: "How to Spot the Best Deals Online", category: "Kids", image: blog3 },
  { title: "Why E-Commerce is the Future of Shopping", category: "Topwear", image: blog4 }
];
