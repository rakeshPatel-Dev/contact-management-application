import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-neutral-950 border-t border-neutral-800"'>
      <div className='flex items-center flex-col sm:flex-row  justify-center gap-4 h-16'>
        <p className="text-center text-neutral-600">
          Contact Management System
        </p>
        <p className='text-center text-sm  tracking-widest text-neutral-600 '>Copyright &copy; {new Date().getFullYear()} </p>
        {/* Footer */}
        <p className="text-center text-sm text-neutral-600">
          Created by: {" "}
          <a href="https://rakeshthedev.vercel.app/"
            className=' text-sm hover:text-white transition-all hover:underline'
            target='_blank'
            rel='noopener'
          >Rakesh Patel</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
