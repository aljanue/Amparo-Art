import React from "react";
import OrderStep from "./OrderStep";
import YourInformation from "./YourInformation";
import ArtisticDirection from "./ArtisticDirection";
import TheVision from "./TheVision";

function OrderSteps() {
  return (
    <div className="flex flex-col ps-8 gap-12">
      <OrderStep
        number={1}
        title="Your Information"
        description="So we can send you a personalized quote and timeline."
      >
        <YourInformation />
      </OrderStep>
      <OrderStep
        number={2}
        title="Artistic Direction"
        description="Select your preferred style and dimensions."
      >
        <ArtisticDirection />
      </OrderStep>
      <OrderStep
        number={3}
        title="The Vision"
        description="Upload your reference photo and tell us what makes it special."
      >
        <TheVision />
      </OrderStep>
    </div>
  );
}

export default OrderSteps;
