import React from 'react'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Skils from '../components/Skils'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function index() {
  return (
        <Layout>
            <Home/>
            <About/>
            <Skils/>
            <Portfolio/>
            <Contact/>
        </Layout>
  )
}

export default index