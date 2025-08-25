import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/About";
import ServiceSection from "../components/ServiceSection";
import heroBg from "../assets/img/hero_bg.png";
import cycleBg from "../assets/img/cycle.png";
import aboutImg from "../assets/img/about.png";
import bikeImage from "../assets/img/Bike-image.png";
import servicebg from "../assets/img/service.png";
import Bike_2 from "../assets/img/bike-2.png";
import AboutImgRight from "../components/AboutImgRight";
import RideBike from "../assets/img/ride.png";
import Bike1 from "../assets/img/bike-1.png";

export default function Home() {
  return (
    <>
      <Hero backgroundImage={heroBg}
        subtitle="Veloretti Business"
        title="Bike Lease Plan For Employees."
        overlayOpacity={0.3}
      />
      <AboutSection
        image={aboutImg}
        title="Bike plans for employees."
        description="Veloretti Electrics benefit both the environment and the health of your employees. Oh, and they look good too. Cost-free for the employer and outside of the WKR."
        linkText="Discover More"
        linkUrl="/plans"
      />
      <ServiceSection
        backgroundImage={servicebg}
        title={`Service,\nmaintenance and\ninsurance`}
        description="The lease includes an all-in service package. Throughout the entire 36 months, you are fully insured against damage, theft and maintenance. In addition, you always have access to roadside assistance."
      />
      <Hero
        backgroundImage={cycleBg}
        subtitle="VELORETTI ELECTRIC"
        title="This is Two."
        subtitle2="Introducing the all-new Ivy and Ace"
        overlayOpacity={0.3}
      />
      <AboutSection
        image={bikeImage}
        title="Leasing"
        description="Want to provide your organisation with mobility in a unique and creative way? Our Electric and City bikes are the perfect solution for healthier employees. So whether it's customised employee bicycles or standout promotional rides, both small and big organisations share the love of our Veloretti designs. Depending on the number of bikes, we will give you a customised quote."
        linkText="Learn more"
        linkUrl="/plans"
      />

      <ServiceSection
        backgroundImage={Bike_2}
        title={`Red Dot Award`}
        description="Good design is what drives us, and we're proud to share that Veloretti Electric Two has already won the prestigious Red Dot Design Award 2023, as judged by the world's best product designers."
      />
      <AboutImgRight
        image={RideBike}
        title="Ride carefree"
        description="Our Qover x Veloretti insurance plan has got you covered. It offers comprehensive coverage against theft, provides assistance in case of any issues, and covers any damages to your bike."
        linkText="Learn More"
        linkUrl="/plans"
      />
       <AboutSection
        image={Bike1}
        title="Free of charge for employers"
        description="The bike plan is totally independent of the WKR and is free for you as an employer. The employee pays the lease costs and you, as the employer, decide whether you want to contribute to the costs."
        linkText="Cost Example"
        linkUrl="/plans"
      />
    </>
  );
}