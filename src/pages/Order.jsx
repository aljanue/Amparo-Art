import React from 'react'
import OrderHeader from '../components/order/OrderHeader'
import OrderBody from '../components/order/OrderBody'

function Order() {
  return (
    <div className="bg-background-light">
      <OrderHeader />
      <OrderBody />
    </div>

  )
}

export default Order