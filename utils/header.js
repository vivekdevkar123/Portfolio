import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'My Selft', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'My Work', id: 'my-work' },
        { title: 'Achievements', id: 'certifications' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Curriculum Vitae | CV',
        onClick: () => openLink('assets/cv.pdf')
    },
    logo: {
        src: '/assets/photo-logo.png',
        alt: 'vivekdevkar'
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header