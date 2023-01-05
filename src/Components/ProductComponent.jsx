import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector()
  return (
    <div>ProductComponent</div>
  )
}

export default ProductComponent