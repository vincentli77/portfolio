import React from 'react'
import ButtonBottoms from '../components/ButtonBottoms'
import Project from '../components/Project'
import Home from './Home'
import Contact from './Contact'

export const HomePage = () => {
  return (
    <main>
      <div className="project">
        <Home />
        <ButtonBottoms left={''} right={'/project-1'} />
      </div>
    </main>
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
    <main>
      <div className="project">
        <Project projectNumber={1} />
        <ButtonBottoms left={'/project-1'} right={'/project-3'} />
      </div>
    </main>
  )
}

export const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Project projectNumber={2} />
        <ButtonBottoms left={'/project-2'} right={'/project-4'} />
      </div>
    </main>
  )
}

export const Project4 = () => {
  return (
    <main>
      <div className="project">
        <Project projectNumber={3} />
        <ButtonBottoms left={'/project-3'} right={'/project-5'} />
      </div>
    </main>
  )
}

export const Project5 = () => {
  return (
    <main>
      <div className="project">
        <Project projectNumber={4} />
        <ButtonBottoms left={'/project-4'} right={'/contact'} />
      </div>
    </main>
  )
}

export const ContactPage = () => {
  return (
    <main>
      <div className="project">
        <Contact />
        <ButtonBottoms left={'/project-4'} />
      </div>
    </main>
  )
}
