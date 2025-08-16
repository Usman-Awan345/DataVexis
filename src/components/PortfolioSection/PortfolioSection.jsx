import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PortfolioSection.css";

export const portfolioData = [
  // ================Web Development======================
  {
    id: 1,
    title: "Restaurant Website",
    description:
      "A beautifully designed and fully responsive restaurant website that showcases the menu, allows online table reservations, and improves customer experience with modern UI/UX.",
    category: "Web Development",
    images: [
      "/images/Resturant.jpeg"
    ],
    duration: "1.5 Months",
    price: "$1500",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    features: [
      "Fully responsive design compatible with all devices",
      "Interactive menu with food categories and pricing",
      "Online table booking and order placement system",
      "Contact form with integrated Google Maps for location",
      "Fast loading speed and SEO optimized pages",
      "Admin panel to manage menu and reservations"
    ],
    review: {
      images: [
      "/images/clients/client2.jpg"
    ],
      name: "Sophia Hocane",
      comment: "Amazing work! My restaurant website looks stunning and my customers love the easy online booking feature. Highly recommended!",
      rating: 5,
    },
  },
  {
  id: 2,
  title: "ShopCart E-Commerce Website",
  description:
    "This fully functional MERN Stack e-commerce platform is built with React, Node.js, Express.js, and MongoDB. It features a complete product browsing and purchasing experience with integrated Stripe payment gateway, full API routing, and secure user authentication (login/signup). Designed with a modern and responsive UI/UX for a seamless shopping experience across all devices.",
  category: "Web Development",
  images: [
    "/images/ShopCArt.jpeg"
  ],
  duration: "2 Months",
  price: "$1700",
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Stripe API"],
  features: [
    "Fully responsive design for all devices",
    "Secure Stripe payment integration",
    "User authentication with login/signup functionality",
    "Product filtering, sorting, and search features",
    "Shopping cart with real-time updates",
    "Order management system for users and admin",
    "Full API routing for smooth frontend-backend communication",
    "Admin panel to manage products, categories, and orders",
    "SEO optimized for better search engine ranking",
    "Fast loading speed with optimized assets"
  ],
  review: {
    images: [
      "/images/clients/client1.jpg"
    ],
    name: "Mark Williams",
    comment: "I’m extremely impressed with the e-commerce website developed by DataVexis. The site is fast, beautifully designed, and works flawlessly on all devices.",
    rating: 5,
  },
},

  {
  id: 3,
  title: "MU_Products Website",
  description:
    "MU_Products is a fully functional MERN Stack e-commerce website developed by DataVexis. Built using React, Node.js, Express.js, and MongoDB with TailwindCSS for a modern and responsive UI, the platform allows customers to browse, search, and purchase products seamlessly. It features a powerful admin panel for product management (add, update, delete), sales tracking, and delivery control, along with secure user authentication for login and signup. The entire platform ensures smooth performance, security, and an engaging shopping experience.",
  category: "Web Development",
  images: [
    "/images/Projects/MUproducts.jpeg"
  ],
  duration: "2.5 Months",
  price: "$1000",
  technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Stripe API"],
  features: [
    "Fully responsive design compatible with all devices",
    "Secure login and signup authentication",
    "Admin panel to manage products (add, update, delete)",
    "Track and manage sales directly from the admin dashboard",
    "Control and update delivery status in real-time",
    "Product search, filtering, and sorting options",
    "Shopping cart with smooth checkout process",
    "Stripe payment gateway integration for secure transactions",
    "Optimized loading speed and SEO-friendly pages",
    "Modern UI/UX designed with TailwindCSS"
  ],
  review: {
    images: [
      "/images/clients/client3.jpg"
    ],
    name: "Elies Robert",
    comment: "DataVexis has done an outstanding job developing my e-commerce website. The admin panel makes it incredibly easy to manage products, track sales, and control deliveries. The site is fast, beautifully designed, and works perfectly on all devices. highly recommended!",
    rating: 5,
  },
},
{
  id: 56,
  title: "Pizza Ordering E-Commerce Website",
  description:
    "A fully functional and visually appealing pizza ordering website developed by DataVexis using the MERN Stack. Built with React, Redux Toolkit, Node.js, Express.js, and MongoDB, the platform delivers a smooth and responsive ordering experience for customers. TailwindCSS ensures a modern UI/UX, while the integrated admin panel allows easy management of products, orders, and deliveries. The platform supports secure online payments, real-time order status updates, and is fully optimized for performance and scalability.",
  category: "Web Development",
  images: [
    "/images/Projects/Pizza Web.jpg"
  ],
  duration: "1 Month",
  price: "$550",
  technologies: [
    "React",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
    "Stripe API"
  ],
  features: [
    "Fully responsive design optimized for all devices",
    "Dynamic product catalog for pizza varieties and customizations",
    "Redux Toolkit state management for smooth performance",
    "Secure login and signup with JWT authentication",
    "Admin panel to manage products, orders, and deliveries",
    "Real-time order tracking and status updates",
    "Search, filter, and sort options for products",
    "Shopping cart with seamless checkout process",
    "Stripe payment gateway integration for secure transactions",
    "Fast loading speed and SEO-friendly structure"
  ],
  review: {
    images: [
      "/images/clients/client3.jpg"
    ],
    name: "Elies Robert",
    comment: "DataVexis has delivered an amazing pizza ordering website!  Highly recommended!",
    rating: 5
  }
},





// ==============================AI Solutions=========================
  {
  id: 4,
  title: "Recommendation System",
  description:
    "A cutting-edge AI-powered Recommendation System developed by DataVexis that delivers highly personalized product, content, or service suggestions based on user behavior, preferences, and purchase history. Built using advanced machine learning algorithms and data processing pipelines, the system ensures accurate and dynamic recommendations in real-time. Designed with scalability in mind, it can be integrated seamlessly into e-commerce platforms, streaming services, or any application to enhance user engagement and boost conversions.",
  category: "AI Solutions",
  images: [
    "/images/Projects/recommendation.jpg"
  ],
  duration: "2 weeks",
  price: "$800",
  technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "React", "Node.js"],
  features: [
    "Real-time personalized recommendations",
  "Machine learning models trained on user behavior and history",
  "Seamless integration with web and mobile platforms",
  "Highly scalable architecture for large datasets",
  "Customizable recommendation logic based on business needs",
  "Continuous model improvement through feedback loops",
  "User-friendly dashboard to monitor system performance",
  "Optimized for fast and accurate results"
  ],
  review: {
    images: [
      "/images/clients/client4.jpg"
    ],
    name: "Elies Robert",
    comment: "built an incredible AI recommendation system for our platform — fast, accurate, and exactly what we needed. Highly satisfied!",
    rating: 5,
  },
},
  {
  id: 5,
  title: "CustomGPT Development",
  description:
    "A highly advanced AI-powered CustomGPT developed by DataVexis, tailored to meet specific business needs. Built using cutting-edge natural language processing (NLP) techniques and fine-tuned on domain-specific data, this CustomGPT can understand context, generate human-like responses, and perform intelligent tasks such as answering customer queries, automating workflows, and providing personalized recommendations. Designed for seamless integration with websites, mobile apps, and internal tools, it offers businesses an efficient, scalable, and smart AI assistant.",
  category: "AI Solutions",
  images: [
    "/images/Projects/CustomGPT.jpg"
  ],
  duration: "3 weeks",
  price: "$900",
  technologies: ["Python",
    "OpenAI API",
    "LangChain",
    "FastAPI",
    "React",
    "Node.js",
    "TailwindCSS",
    "MongoDB"],
  features: [
    "Custom-trained GPT model for specific business requirements",
    "Domain-specific knowledge integration",
    "Context-aware and human-like conversation handling",
    "Ability to automate repetitive tasks",
    "Supports multi-language communication",
    "Seamless integration with websites, apps, and chat platforms",
    "Secure API endpoints for data communication",
    "User-friendly dashboard for managing and monitoring AI performance",
    "Optimized for speed, accuracy, and scalability"
  ],
  review: {
    images: [
      "/images/clients/client4.jpg"
    ],
    name: "Elies Robert",
    comment: "created a CustomGPT for our business that understands our needs perfectly. It’s smart, fast, and has significantly improved customer engagement. Highly recommended!",
    rating: 5,
  },
},
  {
  id: 6,
  title: "Disease Prediction Model",
  description:
    "An advanced AI-powered Disease Prediction Model developed by DataVexis to assist healthcare providers and patients in early diagnosis. Using machine learning algorithms trained on medical datasets, the system analyzes patient symptoms, medical history, and health metrics to predict the likelihood of various diseases with high accuracy. This predictive approach helps in timely intervention, improved treatment planning, and better healthcare outcomes. The model is optimized for speed, accuracy, and scalability, making it suitable for integration into hospitals, clinics, and health applications.",
  category: "AI Solutions",
  images: [
    "/images/Projects/Disease Prediction.jpg"
  ],
  duration: "1 months",
  price: "$800",
  technologies: ["Python",
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "TensorFlow",
    "FastAPI",
    "React",
    "TailwindCSS",
    "MongoDB"],
  features: [
    "Machine learning model trained on medical datasets",
    "High-accuracy disease prediction based on symptoms and history",
    "Supports multiple disease categories",
    "User-friendly interface for patients and doctors",
    "Fast API integration for web and mobile applications",
    "Secure handling of patient data",
    "Customizable prediction parameters for different medical fields",
    "Real-time prediction results",
    "Scalable architecture for healthcare institutions",
    "Visualization of prediction results and trends"
  ],
  review: {
    images: [
      "/images/clients/client5.jpg"
    ],
    name: "Elies Robert",
    comment: "delivered an outstanding AI disease prediction model for our clinic. It’s accurate, fast, and has greatly improved our ability to diagnose patients early. Highly recommended!",
    rating: 5,
  },
},


  


















// ==========================Graphic Design============================
{
  id: 7,
  title: "Premium Restaurant Banner Design",
  description:
    "A mouth-watering and visually stunning restaurant banner design crafted by DataVexis to attract customers instantly. Designed with vibrant colors, appetizing food imagery, and professional typography, this banner perfectly represents your restaurant’s vibe and menu specialties. Ideal for social media ads, website headers, print posters, and outdoor displays, our design ensures your restaurant stands out and draws in more customers.",
  category: "Graphic Design",
  images: [
    "/images/Projects/GD1.jpg"
  ],
  duration: "5 Hours",
  price: "$25",
  technologies: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "Figma",
    "Color Grading",
    "Typography Design",
    "Layout Design"
  ],
  features: [
    "High-quality and eye-catching food photography integration",
    "Custom color scheme matching restaurant branding",
    "Professional typography for menu highlights",
    "Optimized design for both print and digital use",
    "Multiple size variations (Facebook, Instagram, website, print)",
    "Fast delivery with unlimited revisions until satisfaction",
    "Editable source files provided",
    "Balanced layout for easy readability",
    "Perfect for promotions, offers, and events",
    "High-resolution export for any platform"
  ],
  review: {
    images: [
      "/images/clients/client8.jpg"
    ],
    name: "Ahmed Raza",
    comment: "The restaurant banner was beyond expectations! It instantly attracted customers and gave a professional yet appetizing vibe to our brand. Highly creative and quick delivery!",
    rating: 5
  }
},
{
  id: 8,
  title: "Annual Business Convention Flyer Design",
  description:
    "A professional and modern flyer design created by DataVexis for the Annual Business Convention. The design uses a clean layout with a striking purple theme, clear typography, and well-structured sections for event details, speakers, and contact information. This flyer is ideal for promoting corporate events, conferences, seminars, and networking sessions, both in print and digital formats.",
  category: "Graphic Design",
  images: [
    "/images/Projects/GD3.jpg"
  ],
  duration: "6 Hours",
  price: "$30",
  technologies: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Typography Design",
    "Layout Design",
    "Color Theory"
  ],
  features: [
    "Clean and modern corporate design",
    "Purple and white professional theme",
    "Highlight section for event date and venue",
    "Dedicated speaker profiles with images",
    "QR code integration for quick access to event info",
    "Optimized for both print and digital sharing",
    "High-resolution export for sharp details",
    "Customizable text and branding elements",
    "Balanced layout for easy readability",
    "Perfect for business events and conferences"
  ],
  review: {
    images: [
      "/images/clients/client9.jpg"
    ],
    name: "Dia Mirza",
    comment: "The flyer design was exceptional! It perfectly captured our event’s theme and made a strong impression on attendees. Professional, elegant, and delivered right on time.",
    rating: 5
  }
},
{
  id: 9,
  title: "Corporate Company Profile Brochure Design",
  description:
    "A clean, professional, and visually appealing corporate brochure designed by DataVexis for Aimway Global USA Inc. This multi-page brochure uses a modern blue and white color scheme with well-structured layouts, professional typography, and high-quality imagery to effectively present company information, services, and contact details. Ideal for corporate presentations, marketing materials, and client proposals.",
  category: "Graphic Design",
  images: [
    "/images/Projects/GD5.jpg"
  ],
  duration: "8 Hours",
  price: "$45",
  technologies: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "InDesign",
    "Typography Design",
    "Layout Design",
    "Color Theory"
  ],
  features: [
    "Modern blue and white corporate theme",
    "Multi-page brochure layout",
    "High-quality images showcasing company facilities",
    "Dedicated sections for company introduction, services, and income plans",
    "Well-structured typography for easy readability",
    "Contact details and QR code integration",
    "Optimized for both print and digital distribution",
    "Customizable branding elements",
    "High-resolution export for sharp printing",
    "Perfect for business presentations and marketing"
  ],
  review: {
    images: [
      "/images/clients/client11.jpg"
    ],
    name: "Sophia",
    comment: "The brochure design was outstanding! It gave our company a polished, professional image and impressed our clients. The attention to detail and layout work was top-notch.",
    rating: 5
  }
},

{
  id: 10,
  title: "Annual Report Brochure Design",
  description:
    "A professional and well-structured annual report brochure designed by DataVexis to present company performance, achievements, and financial highlights in a visually engaging manner. The design features a clean layout, corporate blue theme, and modern typography, making it ideal for presenting reports to stakeholders, investors, and employees. Suitable for both print and digital formats, this brochure ensures your annual data is delivered in a professional and impactful way.",
  category: "Graphic Design",
  images: [
    "/images/Projects/GD6.jpg"
  ],
  duration: "8 Hours",
  price: "$50",
  technologies: [
    "Adobe InDesign",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma",
    "Typography Design",
    "Layout Design",
    "Color Theory"
  ],
  features: [
    "Corporate blue and white professional theme",
    "Multi-page brochure layout",
    "Sections for company profile, achievements, and financial data",
    "High-quality charts and infographics",
    "Customizable branding elements",
    "Optimized for both print and digital distribution",
    "High-resolution export for sharp printing",
    "Consistent typography and spacing",
    "Editable source files provided",
    "Perfect for annual meetings and investor presentations"
  ],
  review: {
    images: [
      "/images/clients/client11.jpg"
    ],
    name: "Sophia",
    comment: "The annual report brochure was beautifully designed and organized. It made our presentation to stakeholders more impactful and visually appealing. Delivered on time with exceptional quality!",
    rating: 5
  }
},




// =========================App Development===========================
{
  id: 11,
  title: "Food Delivery & Order Mobile App",
  description:
    "A sleek, user-friendly, and fully functional food delivery mobile app developed by DataVexis. This app allows users to browse menus, place orders, track deliveries in real-time, and make secure payments. Designed with an intuitive UI/UX and built using modern technologies, the app ensures a smooth ordering experience for customers and an efficient management system for restaurants. Suitable for both Android and iOS platforms.",
  category: "App Development",
  images: [
    "/images/Projects/Food Delivery App.jpg"
  ],
  duration: "2 Months",
  price: "$1700",
  technologies: [
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Stripe API",
    "Tailwind CSS"
  ],
  features: [
    "User-friendly and responsive design",
    "Restaurant menu browsing with categories",
    "Add to cart and place order functionality",
    "Secure payment gateway integration",
    "Real-time order tracking",
    "Push notifications for order updates",
    "User authentication and profile management",
    "Restaurant dashboard for order management",
    "Search and filter options for dishes",
    "Optimized for Android and iOS"
  ],
  review: {
    images: [
      "/images/clients/client6.jpg"
    ],
    name: "James Parker",
    comment: "The food delivery app exceeded our expectations! The design is smooth, the features are robust, and our customers love the real-time tracking feature. Highly recommended for any restaurant business.",
    rating: 5
  }
},

{
  id: 12,
  title: "Food Delivery & Order Mobile App",
  description:
    "A sleek, user-friendly, and fully functional food delivery mobile app developed by DataVexis. This app allows users to browse menus, place orders, track deliveries in real-time, and make secure payments. Designed with an intuitive UI/UX and built using modern technologies, the app ensures a smooth ordering experience for customers and an efficient management system for restaurants. Suitable for both Android and iOS platforms.",
  category: "App Development",
  images: [
    "/images/Projects/Food Delivery App2.jpg"
  ],
  duration: "2.5 Months",
  price: "$1799",
  technologies: [
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Stripe API",
    "Tailwind CSS"
  ],
  features: [
    "User-friendly and responsive design",
    "Restaurant menu browsing with categories",
    "Add to cart and place order functionality",
    "Secure payment gateway integration",
    "Real-time order tracking",
    "Push notifications for order updates",
    "User authentication and profile management",
    "Restaurant dashboard for order management",
    "Search and filter options for dishes",
    "Optimized for Android and iOS"
  ],
  review: {
    images: [
      "/images/clients/client6.jpg"
    ],
    name: "James Parker",
    comment: "This is my second time getting an app developed by them, and once again the experience has been outstanding!",
    rating: 5
  }
},
{
  id: 13,
  title: "Food Ordering & Delivery Mobile App",
  description:
    "An advanced, feature-rich, and visually appealing food ordering and delivery mobile app designed by DataVexis for a seamless customer experience. The app allows users to explore restaurants, customize orders, track deliveries in real-time, and make secure payments. Built with cutting-edge technologies and optimized for speed, scalability, and user engagement, it ensures both customers and restaurant owners have complete control over their orders and operations. Ideal for startups, cloud kitchens, and established restaurants looking to expand digitally.",
  category: "App Development",
  images: [
    "/images/Projects/Food App.jpg"
  ],
  duration: "2.5 Months",
  price: "$1799",
  technologies: [
    "Flutter",
    "React Native",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Firebase",
    "Stripe API",
    "Google Maps API",
    "Tailwind CSS",
    "AWS"
  ],
  features: [
    "Attractive and intuitive user interface",
    "Restaurant discovery with location-based search",
    "Customizable meal options and add-ons",
    "Multiple payment gateways integration",
    "Real-time delivery tracking with live map",
    "Loyalty points and discount coupon system",
    "Push notifications for promotions and updates",
    "User account, order history, and saved addresses",
    "Admin dashboard for restaurant and delivery management",
    "Optimized performance for Android and iOS"
  ],
  review: {
    images: [
      "/images/clients/client6.jpg"
    ],
    name: "James Parker",
    comment: "This is my second time getting an app developed by them, and once again the experience has been outstanding! The UI is better than ever, the features are spot on, and the real-time tracking works flawlessly. Always a pleasure to work with such a professional team!",
    rating: 5
  }
}






];


const categories = ["All", "Web Development", "App Development", "Marketing", "Graphic Design", "AI Solutions"];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title"> Our <span>Portfolio</span></h2>
        <p className="portfolio-subtitle">
          Showcasing some of our finest projects crafted with passion and expertise.
        </p>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
  {filteredProjects.map((project) => (
    <div className="portfolio-card" key={project.id}>
      <div className="portfolio-image">
        <img src={project.images[0]} alt={project.title} />
      </div>
      <div className="portfolio-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link to={`/portfolio/${project.id}`} className="view-btn">
          View Project
        </Link>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default PortfolioSection;
