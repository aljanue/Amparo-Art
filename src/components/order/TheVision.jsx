import React from 'react'
import UploadPhoto from './UploadPhoto'

function TheVision() {
  return (
   <>
    <UploadPhoto />
    <div className="flex flex-col gap-4 w-full">
      <label htmlFor="notes" className="uppercase text-sm">Notes for the artist</label>
      <textarea id="notes" rows="4" className="w-full border font-light border-black/20 rounded-md p-4 bg-white resize-none" placeholder="Tell us about the subject, mood, or specific details you'd like emphasized (e.g., 'Make the background softer', 'Focus on the smile')..."></textarea>
    </div>
   </>
  
  )
}

export default TheVision