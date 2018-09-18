import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
