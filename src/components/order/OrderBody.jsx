import React from 'react'
import SummaryCard from './SummaryCard'
import OrderSteps from './OrderSteps'

function OrderBody() {
  return (
    <div className="flex lg:gap-12 md:gap-8 gap-4 px-4 py-8 items-start lg:flex-row flex-col pe-8">
        <div className="flex-1">
            <OrderSteps />
        </div>
        <div className="lg:ps-0 ps-8">
          <SummaryCard />
        </div>
    </div>
  )
}

export default OrderBody