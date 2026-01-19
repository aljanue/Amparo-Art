import React from 'react'
import { Link } from 'react-router-dom'

function OrderNow() {
  return (
    <div className="w-full px-16 py-12 bg-secondary/15 flex flex-col items-center gap-8 text-center">
        <h1 className="font-serif text-3xl">Ready to turn your memory into art?</h1>
        <p className="font-light max-w-125">Order slots are limited each month to ensure the highest quality for every piece. Secure your spot on the waitlist today.</p>
        <Link to="/order" className="shadow-lg shadow-primary/50 px-10 py-2 max-w-70 rounded-sm text-sm bg-primary uppercase font-light text-white cursor-pointer transition-all duration-300 border border-transparent hover:bg-white hover:text-primary hover:border-primary hover:shadow-md">Order your portrait</Link>
    </div>
  )
}

export default OrderNow