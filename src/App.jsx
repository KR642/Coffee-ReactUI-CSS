import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Buy from '../components/Buy'
import Reserve from '../components/Reserve'
import Footer from '../components/Footer'

function App() {
  return (
    <>
    <div className='bg-image'></div>
    <div className='root-class'>
      <div className='logo-nav'>
      <img src={logo} className="logo" alt="logo" />
      <Nav/>
      </div>
      <Banner/>
      <Buy/>
      <Reserve/>
      <Footer/>
    </div>
    </>
  )
}

export default App
