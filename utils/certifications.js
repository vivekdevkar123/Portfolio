import { openLink } from "./methods"

const achievements = {
    heading:  `certifications && Achievements`,
    list: [
        {
            size: 1,
            title: 'Ranked 1st in BITS Goa Hackathon',
            platform: 'Showcasing problem-solving and software development skills',
            link: 'https://drive.google.com/file/d/155lmHzP2YPi2Ekx7EuWqC4xHT7079B2z/view?usp=sharing',
            date: 'Conducted From 24th March - 25th March, 2023',
            logo: '/Portfolio/assets/bitsgoa.jpg',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Solved 500+ DSA problems on LeetCode',
            platform: 'Strengthening algorithmic and coding proficiency',
            link: 'https://leetcode.com/u/vivekdevkar123/',
            date: '',
            logo: '/Portfolio/assets/leetcode.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Top 300 in Flipkart Grid Challenge',
            platform: 'Ranked under 300 teams among more than 10,000 teams.',
            link: 'https://drive.google.com/file/d/1Tl4wP6L4Kznj_oNYn6qogTV13DSjxnes/view?usp=sharing',
            date: 'Conducted From 10th Aug  - 30th Sep, 2024',
            logo: '/Portfolio/assets/flipkart.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Attended a workshop on Machine Learning',
            platform: 'Participated in a workshop at IIT Bombay.',
            link: 'https://drive.google.com/file/d/18jNH9zwjSv8QP9v1wW43eGOGGrd_-aJx/view?usp=sharing',
            date: 'Conducted From 16th Dec  - 18th Dec, 2022',
            logo: '/Portfolio/assets/bitsgoa.jpg',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified in Frontend Development',
            platform: 'Completed a certification course in React.js.',
            link: 'https://www.udemy.com/certificate/UC-f07ffc1c-86d7-4efd-8105-18d92584f899/',
            date: 'Attended on 01st Jan 2023',
            logo: '/Portfolio/assets/udemy.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: '2-Star Coder on CodeChef',
            platform: 'Achieved 2-star rating through consistent performance.',
            link: 'https://www.codechef.com/users/vivekdevkar13',
            date: '',
            logo: '/Portfolio/assets/codechef.png',
            aos: 'zoom-out-right'
        }
    ],
    handleIconClick: openLink
}

export default achievements