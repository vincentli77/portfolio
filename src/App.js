import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
} from "./pages/Projects";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/portfolio/";
      

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("/portfolio/project-1");
            }, 500);
          }
          break;
        default: //do nothing

        case url + "project-1":
          wheelRouter("/portfolio/project-2", "/portfolio/");
          break;
        case url + "project-2":
          wheelRouter("project-3", "project-1");
          break;
        case url + "project-3":
          wheelRouter("project-4", "project-2");
          break;
        case url + "project-4":
          wheelRouter("project-5", "project-3");
          break;
        case url + "project-5":
          wheelRouter("contact", "project-4");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("project-5");
            }, 500);
          }
          break;
      }
    
    };
    
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/portfolio/project-1" component={Project1} />
        <Route exact path="/portfolio/project-2" component={Project2} />
        <Route exact path="/portfolio/project-3" component={Project3} />
        <Route exact path="/portfolio/project-4" component={Project4} />
        <Route exact path="/portfolio/project-5" component={Project5} />
        <Route exact path="/portfolio/contact" component={Contact} />
        <Redirect to="/"></Redirect>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
