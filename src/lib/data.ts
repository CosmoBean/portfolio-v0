export const settings = {
    isSplash: false,
};

export const seo = {
    title: "Sri Datta Bandreddi's Portfolio",
    description: "AI Engineer Portfolio",
    og: {
        title: "Sri Datta Bandreddi's Portfolio",
        type: "website",
        url: "https://sridatta.dev",
    },
};

export const greeting = {
    title: "Sri Datta Ganesh Bandreddi",
    logo_name: "Cosmobean",
    nickname: "cosmobean",
    subTitle: "AI Engineer & Full Stack Developer",
    resumeLink: "https://drive.google.com/file/d/1NiZzGqSiUIyH-qJfMaAL2Qa4xoFhybi5/view?usp=sharing", // Add resume link
    portfolio_repository: "https://github.com/cosmobean/portfolio-v0",
    githubProfile: "https://github.com/cosmobean",
};

export const socialMediaLinks = [
    {
        name: "Github",
        link: "https://github.com/cosmobean",
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/sri-datta-bandreddi",
    },
    {
        name: "Gmail",
        link: "mailto:sbandred@andrew.cmu.edu",
    },
];

export const skills = {
    data: [
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Building stateful, and responsive website front end using ReactJS/ NextJS and TailwindCSS",
                "⚡ Developing API based microservices using Go, and Python. Generating documentations using Swagger",
                "⚡ Test Driven development, and monitoring setup using Prometheus and Grafana",
                "⚡ Experience with development and deployment of custom OAUTH and RBAC solutions",
            ],
            softwareSkills: [
                { skillName: "Go" },
                { skillName: "Java(Springboot)" },
                { skillName: "Python" },
                { skillName: "Fast API" },
                { skillName: "JavaScript" },
                { skillName: "ReactJS" },
                { skillName: "NextJS" },
                { skillName: "TailwindCSS" },
                { skillName: "System Design" },
                { skillName: "Load Testing" },
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            fileName: "CloudInfraImg",
            skills: [
                "⚡ Experience working on multiple cloud architectures from containers to kubernetes pods",
                "⚡ Hosting and maintaining web application instances along with integration of databases",
                "⚡ Setting up CI/CD pipelines for automated testing and deployments",
                "⚡ Setting up streaming jobs, serverless functions, scheduled actions and cost optimization",
            ],
            softwareSkills: [
                { skillName: "AWS" },
                { skillName: "Docker" },
                { skillName: "Kubernetes" },
                { skillName: "Grafana" },
                { skillName: "Prometheus" },
                { skillName: "OpenTelemetry" },
                { skillName: "Airflow" },
                { skillName: "Jenkins/Github Actions" },
                { skillName: "PostgreSQL" },
                { skillName: "Redis" },
                { skillName: "Kafka" },
                { skillName: "Elasticsearch" },
            ],
        },
        {
            title: "Data Science & AI",
            fileName: "DataScienceImg",
            skills: [
                "⚡ Developing scalable production ready models for various deeplearning and statistical models",
                "⚡ Experience of working with NLP projects and Large Language Models",
                "⚡ Experience with building machine learning models using PyTorch, Keras, TensorFlow",
            ],
            softwareSkills: [
                { skillName: "Python" },
                { skillName: "PyTorch" },
                { skillName: "Keras" },
                { skillName: "TensorFlow" },
                { skillName: "NumPy" },
                { skillName: "Pandas" },
                { skillName: "Scikit-learn" },
                { skillName: "Hugging Face Transformers" },
                { skillName: "Neo4J" },
            ],
        },
    ],
};

export const degrees = {
    degrees: [
        {
            title: "Carnegie Mellon University",
            subtitle: "Master of Science in AI Engineering, Biomedical Engineering",
            logo_path: "images/cmu_logo.png", // Placeholder or missing
            alt_name: "CMU",
            duration: "Dec 2026",
            descriptions: [
                "⚡ Specializing in AI Engineering and Biomedical Engineering.",
            ],
            website_link: "https://www.cmu.edu/",
        },
        {
            title: "Visvesvaraya National Institute of Technology",
            subtitle: "Bachelor of Technology, Mechanical Engineering",
            logo_path: "images/vnit-logo-280.png",
            alt_name: "VNIT Nagpur",
            duration: "Jul 2022",
            descriptions: [
                "⚡ Student Council Representative, Mechanical Engineering Dept (Aug 2020 - Jul 2022)",
                "⚡ Student Mentor, Mechanical Engineering Dept (Aug 2019 - Jul 2022)",
            ],
            website_link: "https://vnit.ac.in/",
        },
    ],
};

export const certifications = {
    certifications: [
        {
            title: "Nanotechnology and Nanosensors, Part 1",
            subtitle: "- Technion - Israel Institute of Technology",
            logo_path: "images/coursera_logo.png",
            certificate_link: "https://www.coursera.org/account/accomplishments/records/XTJ0XG1Z51YU",
            alt_name: "Coursera",
            color_code: "#2A73CC",
            issued_date: "Issued Nov 2024",
        },
        {
            title:
                "Introduction to Mechanical Engineering Design and Manufacturing with Fusion 360 (with Honors)",
            subtitle: "- Autodesk",
            logo_path: "images/coursera_logo.png",
            certificate_link: "https://www.coursera.org/account/accomplishments/records/85XYDN9CDTD7",
            alt_name: "Coursera",
            color_code: "#2A73CC",
            issued_date: "Issued Aug 2020",
        },
        {
            title:
                "Modeling and Design for Mechanical Engineers with Autodesk Fusion 360 (with Honors)",
            subtitle: "- Autodesk",
            logo_path: "images/coursera_logo.png",
            certificate_link: "https://www.coursera.org/account/accomplishments/records/8ZPN6FVUBYNE",
            alt_name: "Coursera",
            color_code: "#2A73CC",
            issued_date: "Issued Aug 2020",
        },
        {
            title: "Introduction to Computer Science and Programming using Python",
            subtitle: "- John Guttag ",
            logo_path: "images/mitx-500.png",
            certificate_link:
                "https://courses.edx.org/certificates/629e45ddd6594323bfbf3ffa71146d3d",
            alt_name: "MITx",
            color_code: "#FFFFFF",
        },
        {
            title: "Modern Robotics, Foundations of Robot Motion",
            subtitle: "- Northwestern University",
            logo_path: "images/coursera_logo.png",
            certificate_link:
                "https://coursera.org/share/59d3ae11b13dfc242e6746cb02a66a67",
            alt_name: "Coursera",
            color_code: "#2A73CC",
        },
    ],
};

export const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description:
        "I have mainly worked as a Fullstack Developer and AI Engineer. I have been keen in building end to end solution, including scalable designs. I am curious person, who likes to understand what's under the hood and I find joy in mentoring as well.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Work",
            work: true,
            experiences: [
                {
                    title: "Product Development Engineer",
                    company: "Phenom",
                    company_url: "https://phenom.com/",
                    logo_path: "images/phenom_logo.png",
                    duration: "Dec 2023 - Jul 2025",
                    location: "Hyderabad, India",
                    description:
                        "Tuned and scaled PostgreSQL by enhancing horizontal scaling through sharding to improve user query response times for AI-driven filters by 40% for 100+ clients. Benchmarked 8 databases for knowledge graph applications by evaluating performance, scalability, and storage efficiency. Led and mentored a team of six through architecture changes and product refactoring, delivering scalable solutions within 3 months. Developed a central cryptographic service (encryption and decryption) for internal use in a multi-tenant system, enabling secure data management across 10+ teams. Awarded “Phenomenal Award” for performance in Q1 and Q2 in 2024.",
                    color: "#000000",
                },
                {
                    title: "Software Engineer",
                    company: "BYJU'S",
                    company_url: "https://byjus.com/",
                    logo_path: "images/byjus_logo.png",
                    duration: "Jul 2022 - Dec 2023",
                    location: "Hyderabad, India",
                    description:
                        "Delivered backend service for in-house CRM in 2 months, using Java-springboot and spring-templates accelerating product rollout. Optimized AWS ECS scaling, using scheduled scaling based on user-patterns, slashing costs by 70% while maintaining reliability. Mentored two interns, creating a roadmap of learning to help with adjustment and contribution to key projects. Launched multi-channel communication features, boosting customer notification effectiveness by 20%. Directed ReactJS-based authentication/authorization app, cutting external service reliance by 50% and leading a 3-person team to timely completion.",
                    color: "#fc1f20",
                },
            ],
        },
        {
            title: "Internships",
            experiences: [
                {
                    title: "Intern (Machine Learning)",
                    company: "Phenom",
                    company_url: "https://www.phenom.com/",
                    logo_path: "images/phenom_icon.png",
                    duration: "May 2021 - Jun 2022",
                    location: "Hyderabad, India",
                    description:
                        "Processed 3 data-sources with NLP techniques to build persona classification models, improving recommendation accuracy based on user actions. Deployed one validation service at production scale, collaborating via APIs and databases to integrate with core product. Built two database package clients to facilitate database migration and testing, improving code reusability for DB queries.",
                    color: "#000000",
                },
            ],
        },
    ],
};

export const projectsHeader = {
    title: "Projects",
    description: "Everything I've worked on.",
    avatar_image_path: "projects_image.svg",
};

export const projects = [
    {
        title: "EMG Hand Gesture Recognition",
        description: "Designed a neural-network to classify hand gestures from EMG signals achieving 85-92% accuracy using PyTorch LSTM/CNN models with attention mechanisms.",
        techStack: ["PyTorch", "Python", "Deep Learning"],
        link: "#",
    },
    {
        title: "YouTube Digest",
        description: "Created a tool generating concise video summaries with Python, FastAPI, and Gemini APIs, reducing watch time by up to 70%. Streamlined asynchronous video processing.",
        techStack: ["Python", "FastAPI", "Gemini API"],
        link: "#",
    },
    {
        title: "Trello Personal Clone",
        description: "Developed a Trello-like tracker with Next.js, and Zustand, featuring drag-and-drop, image uploads, and Google auth. Integrated GPT API for task summaries.",
        techStack: ["Next.js", "Zustand", "GPT API"],
        link: "#",
    },
];

export const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "blue-gradient-circle-380.png",
        description:
            "Feel free to reach out via the links provided below. I'm always eager to hear your feedback or explore collaboration opportunities on projects.",
    },
};
