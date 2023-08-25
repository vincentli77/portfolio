import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonBottoms = (props) => {
  return (
    <div className={`scroll-bottom`}>
      <NavLink
        to={props.left ? props.left : ''}
        className={`left hover ${!props.left && 'hidden'}`}
      >
        <span>&#10092;</span>
      </NavLink>
      <div className="sb-main">
        <p className="center">Scroll</p>
      </div>
      <NavLink
        to={props.right ? props.right : ''}
        className={`right hover ${!props.right && 'hidden'}`}
      >
        <span>&#10093;</span>
      </NavLink>
    </div>
  )
}

export default ButtonBottoms
