import React from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'

// PROBLEM 1 - Create a Route that renders <Color /> if the path is "/:color"

// PROBLEM 2 - use the useParams hook inside Color to obtain the color parameter

// PROBLEM 3 - render the correct text inside the <h3> (instead of the hard-coded green)

// PROBLEM 4 - create the correct style for the <h3> (instead of the hard-coded green)

const Color = () => {
  // 2- use the hook here
  const { color } = useParams()
  return (
    // 3, 4 - use the correct text content and style
    <h3 style={{ color }}>The color is {color}</h3>
  )
}

export default function App() {
  return (
    <div>
      <nav>
        <Link to="orange">Orange </Link>
        <Link to="blue">Blue </Link>
        <Link to="magenta">Magenta </Link>
      </nav>
      <Routes>
        {/* 1- create your Route here */}
        <Route path="/:color" element={<Color />} />
      </Routes>
    </div>
  )
}
