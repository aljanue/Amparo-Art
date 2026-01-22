import React from 'react'
import HeroLayout from '../layout/HeroLayout'

function OrderHeader() {
  return (
    <HeroLayout
      label="Selected Works"
      title={
        <>
          Comission Your<span className="text-primary italic"> Timeless Masterpiece</span>
        </>
      }
      description={
        <p>
         Every portrait tells a unique story. Share your vision with us, and our artist will craft a personal proposal tailored to your memories.
        </p>
      }
      centered={true}
    />
  )
}

export default OrderHeader