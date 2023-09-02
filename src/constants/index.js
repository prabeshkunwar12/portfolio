import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data and ML",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Tech Lead",
      company_name: "UPEI WebNP for nursing students",
      icon: starbucks,
      iconBg: "#383E56",
      date: "sept 2022 - April 2023",
      points: [
        "Steering the project's technical direction, I harnessed the Laravel framework and Bootstrap to forge a robust, user-centric platform. Informed decisions paved the way for a successful website.",
        "Nurturing camaraderie, I aided team members in surmounting technical hurdles, fostering a skilled and cohesive unit primed for productivity.",
        "Embracing Agile practices, I engaged in daily stand-ups, facilitating seamless communication, quick adaptation, and effective problem-solving.",
        "Partnering closely with the project lead, I ensured progress transparency through timely updates and schedules, maintaining alignment and momentum",
        "Regular consultations with our client—a seasoned NP nurse and professor—unveiled insights that shaped functional features, enhancing the website's practicality.",
        "Collaboratively with the project lead, I orchestrated feature prioritization and rollouts, resulting in a streamlined development process and coherent user experience.",
      ],
    },
    {
      title: "Caregiver",
      company_name: "Andrews of Summerside",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jun 2020 - Jun 2023",
      points: [
        "Providing ongoing personal care assistance, including dressing, grooming, bathing, and assisting with adaptive devices like hearing aids and glasses.",
        "Offering continuous mobility support by aiding with wheelchairs, walkers, and transfers, while continually encouraging light exercises for improved mobility.",        
        "Managing medications continuously as prescribed, diligently monitoring and documenting reactions, and maintaining up-to-date medication records.",        
        "Continuously planning and serving meals tailored to dietary needs, monitoring food intake and hydration, and adapting food consistency for individuals with swallowing difficulties.",        
        "Delivering continuous emotional and social support through companionship, active listening, and engaging in ongoing recreational activities while offering comfort during times of confusion or agitation.",        
        "Ensuring continuous safety and health by vigilantly checking for injuries, infections, or skin issues, continually monitoring vital signs, and maintaining a safe environment with ongoing fall prevention measures.",        
        "Maintaining continuous and accurate care records, continually communicating observations and concerns effectively, and documenting incidents with adherence to reporting procedures.",        
        "Providing continuous cognitive support for dementia patients through redirection and validation techniques, creating a calming environment, and managing ongoing challenging behaviors and mood fluctuations.",       
        "Collaborating with healthcare professionals continually, ensuring seamless communication and coordination, and keeping family members continually informed about the individual's condition.",        
        "Upholding privacy and dignity while continually encouraging independence whenever feasible.",        
        "Remaining continuously prepared to respond promptly to emergencies.",        
        "Committing to ongoing learning and training to stay continually updated on the latest caregiving techniques and best practices.",
        ],
    },
    {
      title: "Cashier",
      company_name: "Walmart Summerside",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2020 - Oct 2022",
      points: [    
        "Greeting customers with a friendly and welcoming demeanor, providing assistance, and answering inquiries about products and store policies to ensure a positive and efficient shopping experience.",        
        "Accurately ringing up purchases using cash registers or scanning systems, handling cash, credit/debit cards, checks, and electronic payments, and calculating change while issuing receipts.",        
        "Properly bagging items to prevent damage and ensure food safety, while handling delicate or fragile items with care.",        
        "Continuously monitoring and reporting low stock levels to supervisors, as well as assisting in restocking shelves and maintaining organized checkout areas.",        
        "Efficiently processing customer returns and exchanges, following store policies for returning merchandise.",        
        "Maintaining accurate cash balances and adhering to cash handling policies and security procedures.",        
        "Keeping the checkout area clean, organized, and free of clutter, as well as assisting in cleaning and tidying the store as needed.",        
        "Providing extra assistance to customers with disabilities or special needs to ensure they have a comfortable and pleasant shopping experience.",        
        "Remaining vigilant for any suspicious activity or shoplifting and following store procedures for reporting and deterring theft.",        
        "Collaborating with other cashiers and store associates to ensure efficient operations, as well as assisting with cross-functional tasks and supporting fellow team members.",        
        "Promoting store loyalty programs and encouraging customer engagement, while suggesting complementary products to enhance the customer's purchase.",        
        "Continuously gathering and relaying customer feedback to store management, and suggesting improvements to enhance the shopping experience.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };