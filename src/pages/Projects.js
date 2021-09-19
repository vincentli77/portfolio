import React from "react";
import ButtonBottoms from "../components/ButtonBottoms";
import Navigation from "../components/Navigation";
import Project from "../components/Project";


export const Project1 = () => {
    return(
        <main>
            <div className="project">
                <Navigation/>
                <Project projectNumber={0}/>
                <ButtonBottoms left={'/portfolio/'} right={'/portfolio/project-2'}/>
            </div>
        </main>
    )
}

export const Project2 = () => {
    return(
        <main>
            <div className="project">
                <Navigation/>
                <Project projectNumber={1}/>
                <ButtonBottoms left={'/portfolio/project-1'} right={'/portfolio/project-3'}/>

            </div>
        </main>
    )
}

export const Project3 = () => {
    return(
        <main>
            <div className="project">
                <Navigation/>
                <Project projectNumber={2}/>
                <ButtonBottoms left={'/portfolio/project-2'} right={'/portfolio/project-4'}/>

            </div>
        </main>
    )
}

export const Project4 = () => {
    return(
        <main>
            <div className="project">
                <Navigation/>
                <Project projectNumber={3}/>
                <ButtonBottoms left={'/portfolio/project-3'} right={'/portfolio/project-5'}/>

            </div>
        </main>
    )
}

export const Project5 = () => {
    return(
        <main>
            <div className="project">
                <Navigation/>
                <Project projectNumber={4}/>
                <ButtonBottoms left={'/portfolio/project-4'} right={'/portfolio/contact'}/>

            </div>
        </main>
    )
}


