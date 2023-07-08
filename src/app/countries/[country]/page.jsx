"use client"

import Country from "@/app/components/Country";
import React, { useEffect } from 'react'

const Countries = ({ params }) => {

  useEffect(() => {
    console.log(params);
  }, [params])

  return (
    <Country country={params.country} />
  )
}

export default Countries