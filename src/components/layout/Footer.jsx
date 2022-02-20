import React from 'react'
import { FaCodepen } from 'react-icons/fa'
function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
            <FaCodepen className='text-2xl' />
            <p>Copyright &copy; { footerYear } All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
