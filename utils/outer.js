import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Vivek Devkar,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        // 'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, having more than 1 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:vivekmdevkar@gmail.com?subject=Hello')
    }
}

export default outer
