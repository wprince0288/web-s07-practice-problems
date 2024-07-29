import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// PROBLEM 1 - use the useNavigate hook to create a navigate function inside App

// PROBLEM 2 - make the "Home" button navigate programmatically to "/"

// PROBLEM 3 - make the "Careers" button navigate programmatically to "/careers"

// PROBLEM 4 - make the "Blog" button navigate programmatically to "/blog"

const Home = () => <h3>This is the Home page</h3>
const Careers = () => <h3>This is the Careers page</h3>
const Blog = () => <h3>This is the Blog page</h3>

export default function App() {
  const navigate = useNavigate()
  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("careers")}>Careers</button>
        <button onClick={() => navigate("blog")}>Blog</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  )
}
