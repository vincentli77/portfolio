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
} from './pages/Pages'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const location = useLocation()
  const history = useHistory()
  let isScrolling = false
  const url = window.location.origin + '/'

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
      switch (window.location.href.toString()) {
        case url:
          wheelRouter('project-1', '/')
          break
        default:
          break
        case url + 'project-1':
          wheelRouter('project-2', '/')
          break
        case url + 'project-2':
          wheelRouter('project-3', 'project-1')
          break
        case url + 'project-3':
          wheelRouter('project-4', 'project-2')
          break
        case url + 'project-4':
          wheelRouter('project-5', 'project-3')
          break
        case url + 'project-5':
          wheelRouter('contact', 'project-4')
          break
        case url + 'contact':
          wheelRouter('contact', 'project-5')

          break
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
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/project-1" component={Project1} />
        <Route exact path="/project-2" component={Project2} />
        <Route exact path="/project-3" component={Project3} />
        <Route exact path="/project-4" component={Project4} />
        <Route exact path="/project-5" component={Project5} />
        <Route exact path="/contact" component={ContactPage} />
        <Redirect to="/"></Redirect>
      </Switch>
    </AnimatePresence>
  )
}

export default App
