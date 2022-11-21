import React from 'react'

import MainLayout from '../components/layouts/MainLayout'
import SectionHeader from '../components/home/SectionHeader'
import ProjectGrid from '../components/home/ProjectGrid'

import { projects } from '../data/projects'
import { volunteerWork } from '../data/volunteer_work'
import Intro from '../components/home/Intro'

const Home = (): JSX.Element => {
  return (
    <MainLayout title="Home | Sruti Vijaykumar">
      <Intro/>
      <SectionHeader id='professional-projects' title='Professional Projects'/>
      <ProjectGrid projects={projects} />
      <SectionHeader id='volunteer-work' title='Volunteer Work'/>
      <ProjectGrid projects={volunteerWork} />
    </MainLayout>
  )
}

export default Home
