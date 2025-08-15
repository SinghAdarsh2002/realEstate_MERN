import React from 'react'
import { useState } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'


const HomePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                    Don't just dream about your perfect home,
                    own it with us!
                </h1>
                <p className='description'>
                    We are here to help you find your dream home.
                    Our team of experts is dedicated to providing you with the best service possible.
                    Whether you are looking to buy, sell, or rent, we have got you covered.
                </p>
                <SearchBar />
                <div className='boxes'>
                    <div className="box">
                        <h1>30+</h1>
                        <h2>Properties</h2>       
                    </div>
                    <div className="box">
                        <h1>3000+</h1>
                        <h2>Happy Customers</h2>       
                    </div>
                    <div className="box">
                        <h1>1400+</h1>
                        <h2>Properties Listed</h2>       
                    </div>
                </div>    
            </div>    
        </div>
        <div className="imageContainer">
            <img src='/bg.png' alt=""/>
        </div>
    </div>
  )
}

export default HomePage
