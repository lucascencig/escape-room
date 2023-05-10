import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <section>
        <h1>Escape Room</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odit tenetur minima unde eius incidunt, non dolores eos, ad officiis aperiam a ratione molestiae enim optio velit praesentium nulla rem!</p>
      </section>


      <section>
        <Link to={'/begin'}>
          <h4>Comenzar</h4>
        </Link>
      </section>


    </>
  )
}

export default LandingPage