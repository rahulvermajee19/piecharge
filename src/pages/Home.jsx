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
import Card from '../components/Card';
import CycleImg from '../assets/img/cycle.png';
import LogBg from "../assets/img/loc.png"
import conImg from "../assets/img/con.png"
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";


export default function Home() {
    const steps = [
    {
      heading: "Register your company",
      text: "Fill in our registration form with your company details. Our leasing partner will do a credit check and confirm within 24 hours.",
    },
    {
      heading: "Determine the requirements",
      text: "You get access to the digital platform. Set the requirements for your employees and share the registration link.",
    },
    {
      heading: "Ride your bike!",
      text: "Your employees can choose their bikes and have them delivered straight to their homes.",
    },
    {
      heading: "Administration",
      text: "The digital platform gives you a simple overview of payroll information and all data in one place.",
    },
  ];
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
        backgroundImage={conImg}
        subtitle="VELORETTI ELECTRIC"
        title="This is Two."
        subtitle2="Introducing the all-new Ivy and Ace"
        overlayOpacity={0.3}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12">
        <Card
          title="Electric Ace"
          subtitle="Rider height: 173–200cm"
          images={[
            { src: CycleImg, color: "#000000" },
            { src: CycleImg, color: "#666666" },
            { src: CycleImg, color: "#f5e9dc" },
          ]}
          onBuyNow={() => console.log("Buy Ace")}
          onLearnMore={() => console.log("Learn Ace")}
        />

        <Card
          title="Electric Ivy"
          subtitle="Rider height: 164–184cm"
          images={[
            { src: CycleImg, color: "#000000" },
            { src: CycleImg, color: "#999999" },
            { src: CycleImg, color: "#f5f0e5" },
          ]}
          onBuyNow={() => console.log("Buy Ivy")}
          onLearnMore={() => console.log("Learn Ivy")}
        />
      </div>

      <ServiceSection
        backgroundImage={LogBg}
        title={`Discover your local Veloretti partner store`}
        description="Our partner stores across the Netherlands are there for you. Whether you're looking to pick up a newly ordered bike, need a fix, or want to take a test ride on our Ivy or Ace Two, your ideal biking experience is closer than you think."
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

      <HowItWorks title="How it works" steps={steps} image={aboutImg} />

      <ContactForm />
    </>
  );
}