import { Braces, Code, Github, Linkedin } from "lucide-react";
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
    threejs,
    tasktale,
    tasktale_page,
    webnp,
    webnp_page,
    andrews,
    walmart,
    deerhold,
    sma,
    life_ex,
    logo,
    res_web,
    covid,
    casecobra_page,
    casecobra,
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

  export const navLinks1 = [
    {
      href: "https://github.com/prabeshkunwar12",
      icon: Github,
    },
    {
      href: "https://www.linkedin.com/in/prabesh-kunwar/",
      icon: Linkedin,
    },
    {
      href: "https://leetcode.com/u/PrabAce/",
      icon: Code,
    },
    {
      href: "https://www.hackerrank.com/profile/prabeshkunwar12",
      icon: Braces,
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
      title: "Co-Founder and Full Stack Next.JS Developer",
      company_name: "TaskTale",
      icon: tasktale,
      iconBg: "#ffffff",
      date: "Nov 2023 - current",
      points: [
        "Implemented business operations by implementing a lean model, slashing development costs by 20% and boosting project efficiency by 25%.",
        "Enhanced user satisfaction by 15% through strategic adoption of modern UI technologies, driving improved engagement and retention based on meticulous user persona research.",
        "Implemented robust authentication features, reducing potential security vulnerabilities by 25% and improved data retrieval reliability by 20%, optimizing platform performance and enhancing user experience.",
      ],
    },
    {
      title: "Backend Spring Developer",
      company_name: "DeerHold",
      icon: deerhold,
      iconBg: "#ffffff",
      date: "Dec 2022 - Nov 2023",
      points: [
        "Developed, coded, tested, and debugged software and applications using Java",
        "Developed responsive user interfaces using Angular, React, and Node.js, enhancing user experience",
        "Utilized Git, Maven, Jenkins, and CI/CD pipelines to automate the build and deployment process.",
        "Employed common testing tools and methodologies to ensure software reliability and performance.",
      ],
    },
    {
      title: "Tech Lead and Full Stack Developer",
      company_name: "WebNP",
      icon: webnp,
      iconBg: "#fff5d8",
      date: "sept 2022 - April 2023",
      points: [
        "Directed the end-to-end development of web-based applications using the Laravel framework",
        "Architected and implemented features, leveraging Laravel's built-in functionalities and Eloquent ORM.",
        "Designed and managed relational databases using MySQL, ensuring data integrity and performance.",
        "Fostered a collaborative team environment, promoting knowledge sharing and continuous improvement."
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
      name: "Case Cobra",
      description:
        "Web platform to design and order phone cases for iphones. It allows customers to choose pictures of their choice, fit it in the case according to their need, place order and pay online.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Shadcn UI",
          color: "pink-text-gradient",
        },
        {
          name: "Neon PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
        {
          name: "Kinde Authentication",
          color: "blue-text-gradient",
        },
        {
          name: "Zod",
          color: "green-text-gradient",
        },
        {
          name: "Tanstack Query",
          color: "pink-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "ES Lint",
          color: "green-text-gradient",
        },
      ],
      image: casecobra_page,
      link: "https://case-cobra-henna.vercel.app/",
      link_image: casecobra,
      source_code_link:"https://github.com/prabeshkunwar12/tasktale_2.0"
    },
    {
      name: "TaskTale",
      description:
        "Dynamic platform revolutionizing task management through a robust web application. Contributed to an intuitive UI, authentication features, animations, and secure data handling",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
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
          name: "Vercel PostgreSQL",
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
          name: "Zod",
          color: "green-text-gradient",
        },
        {
          name: "TRPC",
          color: "pink-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "ESLint",
          color: "green-text-gradient",
        },
      ],
      image: tasktale_page,
      link: "https://tasktale.com/",
      link_image: tasktale,
      source_code_link:"https://github.com/prabeshkunwar12/tasktale_2.0"
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
          name: "Composer",
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
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Artisan",
          color: "green-text-gradient",
        },
        {
          name: "Laravel Adminlite",
          color: "pink-text-gradient",
        },
        {
          name: "Mokery",
          color: "blue-text-gradient",
        },
        {
          name: "PHP unit",
          color: "green-text-gradient",
        },
      ],
      image: webnp_page,
      link: "https://version2.webnp.info/",
      source_code_link: "https://github.com/prabeshkunwar12/webnp_server",
    },
    {
      name: "School Management",
      description:
        "Software with focus on data accuracy, system efficiency, and seamless communication among administrators, teachers, students, and parents has been instrumental in enhancing the overall functionality and performance of the system.",
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
          name: "Hibernate",
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
          name: "Sonar Qube",
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
      image: sma,
      source_code_link: "https://github.com/prabeshkunwar12/schoolManagementSystem",
    },
    {
      name: "Hotel Rating",
      description:
        "A Spring project using multiple microservices to store hotel rating and feedback from customers. It uses multiple databases for different micorservices and is only accessible through the API Gateway protected by authentication system. Each microservices are registered in eureka server which can be used to view the status of all the services and loadbalancing.",
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
          name: "Hibernate",
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
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Sonar Qube",
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
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "Netflix Eureka",
          color: "green-text-gradient",
        },
        {
          name: "OpenFeign",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
        {
          name: "OKTA",
          color: "pink-text-gradient",
        },
        {
          name: "JMeter",
          color: "blue-text-gradient",
        },
        {
          name: "Gateway MVC",
          color: "green-text-gradient",
        },
      ],
      image: sma,
      source_code_link: "https://github.com/prabeshkunwar12/hotel_rating",
    },
    {
      name: "Life Expectancy",
      description:
        "Conducted comprehensive data analysis on life expectancy, utilizing various data analysis tools to explore the correlation between life expectancy and various factors. The findings were presented in a detailed report.",
      tags: [
        {
          name: "Jupyter Notebook",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "IEEE Conference Template",
          color: "pink-text-gradient",
        },
        {
          name: "MatPlotLib",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "NumPy",
          color: "pink-text-gradient",
        },
        {
          name: "Seaborn",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
        {
          name: "Random Forest Regressor",
          color: "blue-text-gradient",
        },
      ],
      image: life_ex,
      source_code_link: "https://github.com/prabeshkunwar12/lifeExpectancy",
    },
    {
      name: "Responsive Website",
      description:
        "Took freeCodeCamp course to strengthen my base in building responsive websites using HTML and CSS. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
        {
          name: "CSS3",
          color: "blue-text-gradient",
        },
        {
          name: "CSS Animation",
          color: "green-text-gradient",
        },
        {
          name: "CSS Media",
          color: "pink-text-gradient",
        },
      ],
      image: res_web,
      source_code_link: "https://github.com/prabeshkunwar12/responsivewebsite",
      link: "https://prabeshkunwar12.github.io/responsivewebsite/",
      link_image: logo,
    },
    {
      name: "COVID varients",
      description:
        "This project employs Chaos Game Representation (CGR) and Multidimensional Scaling (MDS) to analyze DNA sequences of COVID-19 variants. By visualizing the genetic relationships in a 3D space, the program provides insights into the diversity and relatedness of different variants.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "NumPy",
          color: "green-text-gradient",
        },
        {
          name: "NatPlotLib",
          color: "pink-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "blue-text-gradient",
        },
        {
          name: "CGR",
          color: "green-text-gradient",
        },
        {
          name: "MDS",
          color: "pink-text-gradient",
        },
      ],
      image: covid,
      source_code_link: "https://github.com/prabeshkunwar12/covid",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };