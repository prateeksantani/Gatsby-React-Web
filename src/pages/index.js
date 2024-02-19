import {Link} from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import '../styles/home.css';



export default function Home() {
  return (
    <Layout>
    <section className = "header">
    <div>
    <h2 >Fullstack Developer</h2>
    <h3>Develop & Deploy</h3>
    <p>Professional Fullstack Developer majorly skilled in React,Gatsby, JavaScript, Bootstrap,Node,Java and Spring having a strong problem solving skill with Bachelor of Engineering focused in Computer and Communication Engineering</p>
    <Link className = "btn" to="/projects">My Portfolio Projects</Link>
    </div>
    <img src ="/banner.png" alt = "site banner" style={{maxWidth: '100%'}}/>
    </section>
    </Layout>
  )
}
