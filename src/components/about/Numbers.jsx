import React from 'react'

const Number = ({ number, label }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-serif text-4xl  mb-2">{number}</h2>
            <p className="text-xs font-light text-primary uppercase">{label}</p>
        </div>
    )
}
function Numbers() {
  return (
    <div className="w-full bg-background-light p-16 flex items-center justify-center sm:gap-[10vw] gap-[5vw]">
      <Number number="40+" label="Years experience" />
      <div className="w-px h-16 bg-gray-300"></div>
      <Number number="200+" label="Portraits created" />
      <div className="w-px h-16 bg-gray-300"></div>
      <Number number="100%" label="Handmade" />
    </div>
  )
}

export default Numbers