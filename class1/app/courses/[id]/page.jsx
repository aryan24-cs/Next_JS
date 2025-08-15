'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  // useParams is used to access dynamic route parameters
  const params = useParams()
  // console.log(params.id)

  return (
    <div>
      <h1>{params.id} Course</h1>
      <h2>The Dynamic Routed Page</h2>
    </div>
  )
}

export default page
