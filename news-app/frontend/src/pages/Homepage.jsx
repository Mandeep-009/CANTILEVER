import React from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import News from '../components/News'

const Homepage = () => {
  return (
    <div>
        <Header />
        <div style={{display:'flex'}}>
            <Filters />
            <News />
        </div>
    </div>
  )
}

export default Homepage