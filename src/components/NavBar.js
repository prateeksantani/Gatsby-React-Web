import {Link} from 'gatsby'
import React from 'react'


export default function NavBar() {
  return (
    <nav>
    <h1>Prateek Santani</h1>
      <div className ="links">
      <Link to="/"> Home </Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
