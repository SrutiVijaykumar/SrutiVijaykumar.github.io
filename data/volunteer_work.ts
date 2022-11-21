import { Project } from '../types'

export const volunteerWork: Project[] = [
  {
    id: 1,
    title: 'TalkBox: A DIY Communication Board',
    tags: ['Physical Computing', 'Accessibility', 'UX Research and Design'],
    description: 'Fabricating a low-cost open-source communication board for non-verbal users and creating engaging DIY assembly instructions for novice makers.',
    image: {
      src: '/images/TalkBox.jpg',
      description: 'Internals of talkbox showing circuitry and touch panels.'
    },
    cta: {
      description: 'Learn more about TalkBox',
      link: '/communication-diy-board'
    }
  },
  {
    id: 2,
    title: 'STEAM Success Foundation Website',
    tags: ['Accessibility', 'UX Research & Design', 'Cross-functional team'],
    description: "Designing an accessible website for a non-profit that promotes the organization's values, increases donations, and is accessible to people with disabilities.",
    image: {
      src: '/images/Group.png',
      description: 'Homepage page of STEAM success foundation.'
    },
    cta: {
      description: 'Learn more about the website',
      link: '/website-for-a-non-profit'
    }
  },
  {
    id: 3,
    title: 'UX Research to influence policies',
    tags: ['Design Thinking', 'UX Research', 'Public Policy'],
    description: 'Working with The United Way of Central Maryland and Politicians to design prototypes of policies that can bring financial stability to low-income families in Maryland.',
    image: {
      src: '/images/PolicyChange.png',
      description: 'Stack of papers showing storyboards and graphs.'
    },
    cta: {
      description: 'Learn more about prototyping policies',
      link: '/'
    }
  }
]
