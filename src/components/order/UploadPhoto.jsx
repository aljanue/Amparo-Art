import React from 'react'

function UploadPhoto() {
  return (
     <div className="flex gap-4 p-12 flex-col items-center justify-center border-dashed rounded-xl border border-gray-400 min-h-48 w-full cursor-pointer hover:border-primary hover:bg-white hover:shadow-sm transition-all ease-in-out duration-300">
      <span className="material-symbols-outlined text-gray-400 text-6xl!">add_photo_alternate</span>
      <div className="text-center font-light">
      <h2 className="text-xl">Upload reference photo</h2>
        <p className="font-light text-sm">JPG, PNG (Max 10MB)</p>
      </div>
    </div>
  )
}

export default UploadPhoto