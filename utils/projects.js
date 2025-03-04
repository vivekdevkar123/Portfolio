const projects = {
    heading: `Things I've Worked on`,
    list: [
        {
            image: '/assets/projects/salesbot.jpg',
            label: 'Featured Project',
            title: 'SalesBot - AI-Powered Voice Assistant',
            description: 'SalesBot is an AI-powered voice assistant designed to automate real-time customer interactions over phone calls. Using Natural Language Processing (NLP) and the Twilio API, it provides intelligent, human-like responses with an 85% accuracy rate. Optimized for low-latency performance (<600ms response time), SalesBot enhances customer support by reducing manual intervention and improving query resolution by 30%.',
            techs: [
                'Python',
                'Flask',
                'Twilio API',
                'Redis',
                'RAG',
                'AWS',
            ]
        },
        {
            image: '/assets/projects/vidya-sangam.jpg',
            label: 'Featured Project',
            title: 'Vidya Sangam - AI Mentorship Platform',
            description: 'Vidya Sangam is an AI-powered mentorship platform that connects students with mentors based on intelligent matchmaking. Leveraging LLMs and context-aware AI, the platform achieves 90% match accuracy, supporting 1,000+ users. It integrates LinkedIn for profile authentication and Calendly for seamless scheduling, making mentorship more accessible and efficient.',
            techs: [
                'Python',
                'Flask',
                'LLMs',
                'RESTful APIs',
                'LinkedIn API',
                'Calendly API',
                'AWS',
            ]
        },
        {
            image: '/assets/projects/codecollab.jpg',
            label: 'Featured Project',
            title: 'CodeCollab - Real-time Collaborative Code Editor',
            description: 'CodeCollab is a cloud-based real-time collaborative code editor that enables multiple users to code together seamlessly. Utilizing WebSocket-based low-latency communication, the platform supports multi-user sessions with advanced conflict resolution algorithms and role-based access control, improving productivity for remote development teams.',
            techs: [
                'React.js',
                'WebSockets',
                'Node.js',
                'Redis',
                'RBAC',
                'AWS',
            ]
        },
        {
            image: '/assets/projects/visudata.png',
            label: 'Featured Project',
            title: 'VisuData - Dynamic Data Visualization Platform',
            description: 'VisuData is a dynamic data visualization platform built using Django that allows users to upload, visualize, and interact with large datasets in real-time. It supports CSV and JSON file uploads, offers customizable interactive charts using Matplotlib and Seaborn, and enables powerful filtering, aggregation, and export functionalities for reporting. With optimized performance and responsive design, VisuData empowers users to gain actionable insights from their data.',
            techs: [
                'Django',
                'Python',
                'Pandas',
                'Matplotlib',
                'Seaborn',
                'Docker',
                'AWS'
            ]
        },
        {
            image: '/assets/projects/moneyniti.png',
            label: 'Featured Project',
            title: 'Moneyniti - Pay Now, Buy Later',
            description: 'Moneyniti is a financial platform that promotes the "Pay Now, Buy Later" strategy, enabling middle and lower-middle-class users to save for future purchases without relying on credit. Users can set savings goals, invest monthly, and track their progress through an intuitive dashboard. The platform leverages Django for the backend, while the frontend is built with HTML, CSS, JavaScript, and Bootstrap, deployed on Google Cloud with AMD for optimized performance.',
            techs: [
                'Django',
                'Python',
                'JavaScript',
                'Bootstrap',
                'Google Cloud',
                'AMD'
            ]
        }
    ]
}

export default projects;
