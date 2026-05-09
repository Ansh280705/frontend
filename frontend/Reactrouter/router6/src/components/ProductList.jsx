import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductList = () => {
  // useParams extracts the optional parameter 'category'
  // If the URL is /products, category will be undefined
  // If the URL is /products/electronics, category will be 'electronics'
  const { category } = useParams()

  const products = [
    { id: 1, name: 'iPhone 15', cat: 'electronics' },
    { id: 2, name: 'MacBook Pro', cat: 'electronics' },
    { id: 3, name: 'Coffee Mug', cat: 'home' },
    { id: 4, name: 'Desk Chair', cat: 'home' }
  ]

  // Filter products based on the optional category segment
  const filteredProducts = category 
    ? products.filter(p => p.cat === category)
    : products

  return (
    <div style={{ padding: '20px' }}>
      <h1>{category ? `Category: ${category}` : 'All Products'}</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <Link to="/products">Show All</Link>
        <Link to="/products/electronics">Electronics</Link>
        <Link to="/products/home">Home Decor</Link>
      </div>

      <hr />

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} ({product.cat})
          </li>
        ))}
      </ul>
      
      {filteredProducts.length === 0 && <p>No products found in this category.</p>}
    </div>
  )
}

export default ProductList
