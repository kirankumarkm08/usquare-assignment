import React from "react";
import Hero from "@/components/Hero";
import Feeds from "@/components/Feeds";

const page = async () => {
  return (
    <div>
      <Hero />
      <Feeds />
    </div>
  );
};

export default page;
