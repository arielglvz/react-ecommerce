import React from 'react'
import Container from './Container'
import Title from './Title'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const ProductList = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Top Selling Products" />
          <Link to={"/product"}>View All Products</Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-2"></div>
      </div>
      {/* Pagination */}
      <Pagination />
    </Container>
  )
}

export default ProductList
