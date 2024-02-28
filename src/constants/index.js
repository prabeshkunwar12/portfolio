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
    tripguide,
    threejs,
    tasktale,
    tasktale_page,
    webnp,
    webnp_page,
    andrews,
    walmart,
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
      title: "Co-Founder and Full Stack Developer",
      company_name: "TaskTale",
      icon: tasktale,
      iconBg: "#ffffff",
      date: "Nov 2023 - current",
      points: [
        "Developing TaskTale, a dynamic task management platform, applying a lean business model", 
        "Solely responsible for the end-to-end development, focusing on crafting an intuitive UI, implementing robust authentication features, animations, and ensuring secure data handling.",
        "Utilized React, Tailwind CSS, and various UI libraries (clcx, Shadcn UI, Radix UI, Lucide React) to create an engaging and user-friendly interface.",
        "Implemented secure authentication features using Next AUTH and other related technologies, ensuring user data privacy.",
        "Managed hosting and deployment with Vercel, Nginx, Hostinger, and other tools to optimize performance and accessibility.",
        "Employed PostgreSQL and Prisma for effective data storage and retrieval, contributing to the platform's reliability.",
        "Contributed to lean model business planning, aligning platform features with user needs and market demands.",
        "Explore TaskTale to witness the dynamic transformation in task management facilitated by the platform.",

      ],
    },
    {
      title: "Tech Lead and Full Stack Developer",
      company_name: "UPEI WebNP for nursing students",
      icon: webnp,
      iconBg: "#fff5d8",
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
      icon: andrews,
      iconBg: "#ffffff",
      date: "Jun 2020 - Jun 2023",
      points: [
        "Provide comprehensive personal care assistance, including dressing, grooming, and bathing.",
        "Offer continuous mobility support, aiding with adaptive devices, wheelchairs, walkers, and transfers, while encouraging light exercises.",
        "Plan and serve tailored meals, monitoring dietary needs, food intake, and hydration, adapting for individuals with swallowing difficulties.",
      ],
    },
    {
      title: "Cashier",
      company_name: "Walmart Summerside",
      icon: walmart,
      iconBg: "#0000ff",
      date: "May 2020 - Oct 2022",
      points: [    
        "Provided friendly and welcoming customer service, addressing inquiries about products and store policies.",
        "Efficiently processed transactions using cash registers and scanning systems, handling cash, credit/debit cards, checks, and electronic payments.",
        "Monitored and reported low stock levels, contributing to the store's inventory management.",
        "Handled customer returns and exchanges according to store policies, ensuring a positive shopping experience.",
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
      name: "TaskTale",
      description:
        "Dynamic platform revolutionizing task management through a robust web application. Contributed to an intuitive UI, authentication features, animations, and secure data handling",
      tags: [
        {
          name: "Next.JS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "clcx",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn-UI",
          color: "pink-text-gradient",
        },
        {
          name: "Radix-UI",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
        {
          name: "Next AUTH-5.0.0",
          color: "blue-text-gradient",
        },
        {
          name: "zod",
          color: "green-text-gradient",
        },
        {
          name: "TRPC",
          color: "pink-text-gradient",
        },
        {
          name: "REST api",
          color: "blue-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "Hostinger",
          color: "pink-text-gradient",
        },
        {
          name: "VPS",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
      ],
      image: tasktale_page,
      link: "https://tasktale.com/",
      link_image: tasktale
    },
    {
      name: "WebNP",
      description:
        "Led the development of a dynamic website enhancing nurse students' academic journey. Utilized Laravel and Bootstrap for responsiveness and scalability.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "composer",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP myAdmin",
          color: "pink-text-gradient",
        },
        {
          name: "faker-php",
          color: "blue-text-gradient",
        },
        {
          name: "Artisan",
          color: "green-text-gradient",
        },
        {
          name: "laravel adminlite",
          color: "pink-text-gradient",
        },
        {
          name: "mokery",
          color: "blue-text-gradient",
        },
        {
          name: "PHP unit",
          color: "green-text-gradient",
        },
      ],
      image: webnp_page,
      source_code_link: "https://github.com/prabeshkunwar12/webnp_server",
    },
    {
      name: "School Management System",
      description:
        "Played a crucial role in architecting and implementing a comprehensive software solution with focus on data accuracy, system efficiency, and seamless communication among administrators, teachers, students, and parents has been instrumental in enhancing the overall functionality and performance of the system.",
      tags: [
        {
          name: "Spring",
          color: "blue-text-gradient",
        },
        {
          name: "Spring boot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
        {
          name: "JDBC",
          color: "blue-text-gradient",
        },
        {
          name: "JPA",
          color: "green-text-gradient",
        },
        {
          name: "hibernate",
          color: "pink-text-gradient",
        },
        {
          name: "JUnit",
          color: "blue-text-gradient",
        },
        {
          name: "Mockito",
          color: "green-text-gradient",
        },
        {
          name: "Apache Tomcat",
          color: "pink-text-gradient",
        },
        {
          name: "SonarQube",
          color: "blue-text-gradient",
        },
        {
          name: "SLF4J",
          color: "green-text-gradient",
        },
        {
          name: "GitHub",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/prabeshkunwar12/schoolManagementSystem",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };