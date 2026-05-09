import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import ProductList from './components/ProductList'

/**
 * Optional Segments Example (React Router v6.5+)
 * 
 * Syntax: ":parameter?"
 * The question mark makes the segment optional.
 */

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/products" style={{ marginRight: '15px' }}>Store</Link>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 style={{ padding: '20px' }}>Home Page</h1>} />

        {/* 
            DYNAMIC OPTIONAL ROUTE: 
            The path "/products/:category?" will match:
            - /products          (category is undefined)
            - /products/anything (category is "anything")
        */}
        <Route path="/products/:category?" element={<ProductList />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App