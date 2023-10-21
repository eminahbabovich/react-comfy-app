import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
import axios from 'axios'
import { products_url } from '../utils/constants'
import { useLoaderData, useNavigation } from 'react-router-dom'

export const loader = async () => {
  const { data } = await axios(products_url)
  const filteredData = data.filter((item) => item?.featured === true)
  const finalData = filteredData.slice(0, 3)
  return finalData
}
const HomePage = () => {
  const data = useLoaderData()
  return (
    <main>
      <Hero />
      <FeaturedProducts products={data} />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage
