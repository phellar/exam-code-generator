import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
        <p>  &copy; {currentYear} Uni Ayobo. All Right reserved.</p>
    </footer>
    
  )
}

export default Footer