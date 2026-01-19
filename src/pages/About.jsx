import React from "react";
import Artist from "../components/about/Artist";
import Numbers from "../components/about/Numbers";
import History from "../components/about/History";
import Process from "../components/about/Process";
import Review from "../components/about/Review";
import OrderNow from "../components/about/OrderNow";

function About() {
  return (
    <>
      <Artist />
      <Numbers />
      <History />
      <Process />
      <Review />
      <OrderNow />
    </>
  );
}

export default About;
