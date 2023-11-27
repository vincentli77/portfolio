import React from 'react'
import ButtonBottoms from '../components/ButtonBottoms'
import Project from '../components/Project'
import Home from './Home'
import Contact from './Contact'

export const HomePage = () => {
  return (
    <div className="project">
      <Home />
      <ButtonBottoms left={''} right={'/project-1'} />
    </div>
  )
}

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Project projectNumber={0} />
        <ButtonBottoms left={'/'} right={'/project-2'} />
      </div>
    </main>
  )
}

export const Project2 = () => {
  return (
    <div className="project">
      <Project projectNumber={1} />
      <ButtonBottoms left={'/project-1'} right={'/project-3'} />
    </div>
  )
}

export const Project3 = () => {
  return (
    <div className="project">
      <Project projectNumber={2} />
      <ButtonBottoms left={'/project-2'} right={'/project-4'} />
    </div>
  )
}

export const Project4 = () => {
  return (
    <div className="project">
      <Project projectNumber={3} />
      <ButtonBottoms left={'/project-3'} right={'/project-5'} />
    </div>
  )
}

export const Project5 = () => {
  return (
    <div className="project">
      <Project projectNumber={4} />
      <ButtonBottoms left={'/project-4'} right={'/project-6'} />
    </div>
  )
}

export const Project6 = () => {
  return (
    <div className="project">
      <Project projectNumber={5} />
      <ButtonBottoms left={'/project-5'} right={'/contact'} />
    </div>
  )
}

export const ContactPage = () => {
  return (
    <div className="project">
      <Contact />
      <ButtonBottoms left={'/project-6'} />
    </div>
  )
}
