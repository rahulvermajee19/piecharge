import React from "react";
import ServiceSection from "../components/ServiceSection";
import productView from "../assets/img/productView.png"
import AboutImgRight from "../components/AboutImgRight"
import AboutSection from "../components/About";
import womenBike from "../assets/img/bike-women.png"
import paddle from "../assets/img/paddle.png"
import ProductDetails from "../components/ProductDetail";

export default function SingleProduct() {
    return (
        <>
        <ProductDetails />
            <ServiceSection
                backgroundImage={productView}
                title={`Removable long-range battery`}
                description="Recharge anytime, anywhere. Our in-house developed battery is built to go the distance. With a powerful 540 Wh and an impressive range of up to 120km, you'll have the freedom to explore without worrying about running out of power. And if you do need to recharge, our removable and smart battery pack can be easily detached and charged with any electrical outlet."
            />
            <AboutImgRight
                image={womenBike}
                title="Ivy Two"
                description="Introducing the Ivy Two, the electric bike that takes your daily commute to the next level. With an accessible lower frame, the latest technology, and safety features, the Ivy delivers instant power, convenience, and peace of mind at every turn, making it the go-to bike for any commute. Equipped with a bright LED brake light for enhanced visibility and safety tracking for added security, the Ivy Two is the perfect combination of design, technology, and safety."
            />
            <AboutSection
                image={paddle}
                title="Silent and powerful mid- motor"
                description="Natural and powerful. The 65Nm torque mid-engine gives you all the power you need. Because the engine is directly connected to your pedals, it automatically adjusts its power to your torque instead of speed. This gives you the most natural electric biking experience there is."
            />
        </>
    )
}