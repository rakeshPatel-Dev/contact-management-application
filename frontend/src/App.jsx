import React from 'react'
import ContactForm from './pages/ContactForm'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import Submissions from './pages/Submissions'

const App = () => {
  return (
    <div>
      <Toaster position='top-right' />
      <Header />
      <Routes >
        <Route path='/' element={<Submissions />} />
        <Route path='/create/contact' element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
