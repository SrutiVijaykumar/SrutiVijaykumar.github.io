import { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'UX Research for Medical Devices',
    tags: ['Physical Computing', 'Accessibility', 'UX Research and Design'],
    description: 'Summative usability evaluations to examine how safe foreign medical devices are to launch in the U.S. market.',
    image: {
      src: '/images/stethoscope.jpeg',
      description: 'Stethoscope, a medical device of doctors.'
    },
    cta: {
      description: 'Learn more about UX research for medical devices',
      link: '/uxr-medical-devices'
    }
  },
  {
    id: 2,
    title: 'UX Research For A Mailing And Shipping Website',
    tags: ['Accessibility', 'UX Research & Design', 'Cross-functional team'],
    description: 'Formative usability study for the content strategy of a mailing and shipping website.',
    image: {
      src: '/images/Packages.webp',
      description: 'Stacked shipping packages'
    },
    cta: {
      description: 'Learn more about the website',
      link: '/uxr-shipping-website'
    }
  },
  {
    id: 3,
    title: 'Accessibility Audits And Remediation',
    tags: ['Design Thinking', 'UX Research', 'Public Policy'],
    description: 'An overview of accessibility work I did at UserWorks.',
    image: {
      src: '/images/A11yCollage.webp',
      description: 'Keywords related to accessibility'
    },
    cta: {
      description: 'Learn more about prototyping policies',
      link: '/accessibility-audits-remediation'
    }
  }
]
