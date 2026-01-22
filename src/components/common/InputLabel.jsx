import React from 'react'

function InputLabel({ label }) {
  return (
    <div className="px-4 py-2 rounded-full border border-black/20 cursor-pointer hover:shadow-sm hover:bg-background-light bg-white transition-all ease-in-out duration-300">
        <span class="font-light">{label}</span>
    </div>
  )
}

export default InputLabel