import React from 'react'

function Footer() {
  return (
    <div className='max-w-5xl mx-auto px-6 xl:px-0 mt-24'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-8 pb-8 border-t border-white/20 pt-6'>
        <p className='text-white/70'>
          &copy; {new Date().getFullYear()} Thilina Jayamal | Built with React and Tailwind ❤️
        </p>

        <ul className='flex list-none gap-6 text-white/70'>
          <li><a href="https://www.linkedin.com/in/thilina-jayamal-b70160213" target="_blank" className='hover:text-white'>LinkedIn</a></li>
          <li><a href="https://github.com/ThilinaJayamal" target="_blank" className='hover:text-white'>GitHub</a></li>
          <li><a href="https://x.com/Thilina_Jayamal" target="_blank" className='hover:text-white'>X</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer