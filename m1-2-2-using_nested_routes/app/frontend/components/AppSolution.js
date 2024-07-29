import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

// PROBLEM 1 - Fix the food <Route> inside <App> so it renders <Food> on "food/<anything>"

// PROBLEM 2 - Fix the broccoli <Route> inside <Food> so it renders broccoli on "food/broccoli"

// PROBLEM 3 - Fix the pizza <Route> inside <Food> so it renders pizza on "food/pizza"

const Home = () => <div className="el"><h2>Home Component</h2></div>

const Food = () => {
  return (
    <div className="el">
      <h2>Food Component</h2>
      <nav>
        <Link to="broccoli">Broccoli </Link>
        <Link to="pizza">Pizza </Link>
      </nav>
      <Routes>
        <Route path="broccoli" element={<h3 className="el">Broccoli</h3>} />
        <Route path="pizza" element={<h3 className="el">Pizza</h3>} />
      </Routes>
    </div>
  )
}
export default function App() {
  return (
    <div className="el">
      <nav>
        <Link to="/">Home </Link>
        <Link to="food">Food </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="food/*" element={<Food />} />
      </Routes>
    </div>
  )
}
