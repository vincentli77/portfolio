import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import {
  ContactPage,
  HomePage,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from './pages/Pages'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()
  const history = useHistory()
  let isScrolling = false
  const url = window.location.origin + '/'
  const projects = [
    '',
    'project-1',
    'project-2',
    'project-3',
    'project-4',
    'project-5',
    'project-6',
    'contact',
  ]

  const handleScroll = (e) => {
    if (!isScrolling) {
      isScrolling = true

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          history.push(after)
        } else if (e.wheelDeltaY > 0) {
          history.push(before)
        }
        setTimeout(() => {
          isScrolling = false
        }, 1500)
      }
      const currentIndex = projects.indexOf(window.location.href.replace(url, ''))

      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % projects.length
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length

        wheelRouter(projects[nextIndex], projects[prevIndex])
      }
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return (
    <main>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/project-1" component={Project1} />
          <Route exact path="/project-2" component={Project2} />
          <Route exact path="/project-3" component={Project3} />
          <Route exact path="/project-4" component={Project4} />
          <Route exact path="/project-5" component={Project5} />
          <Route exact path="/project-6" component={Project6} />

          <Route exact path="/contact" component={ContactPage} />
          <Redirect to="/"></Redirect>
        </Switch>
      </AnimatePresence>
    </main>
  )
}

export default App
