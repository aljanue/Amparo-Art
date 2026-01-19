import React from 'react'

function QuoteLayout({icon, title, description, author}) {
  return (
    <div className="flex flex-col items-center justify-center px-8 md:py-24 py-12 gap-8 text-center">
      <div className="text-primary leading-none">
        <span className="material-symbols-outlined text-5xl!">{icon}</span>
      </div>
      <h1 className="text-4xl font-medium font-serif">{title}</h1>
      <div className="w-16 h-1 bg-primary opacity-50"></div>
      <p className="font-light max-w-175">
        {description}
      </p>
      <h2 className="font-serif text-2xl font-extralight">{author}</h2>
    </div>
  )
}

export default QuoteLayout