import React from 'react';
import Header from './Header';
import Section from './Section';

function Home() {
  return (
    <>
    <Header />
    <Section
    name="Model 3"
    tagline="Order Oline for touchless delivery"
    leftbtn="Order Now"
    rightbtn="Existing Inventory"
    arrow={true}
    background="model-3.jpg"
    />
    <Section
    name="Model Y"
    tagline="Order Oline for touchless delivery"
    leftbtn="Order Now"
    rightbtn="Existing Inventory"
    background="model-y.jpg"

    />
    <Section
    name="Model S"
    tagline="Order Oline for touchless delivery"
    leftbtn="Order Now"
    rightbtn="Existing Inventory"
    background="model-s.jpg"

    />
    <Section
    name="Model X"
    tagline="Order Oline for touchless delivery"
    leftbtn="Order Now"
    rightbtn="Existing Inventory"
    background="model-x.jpg"

    />
    <Section
    name="Solar Panels"
    tagline="Lower Cost Solar Panels in India"
    leftbtn="Order Now"
    rightbtn="Learn More"
    background="solar-panel.jpg"
    />
    <Section
    name="Solar Roof"
    tagline="Produce Clean Energy from your Roof"
    leftbtn="Order Now"
    rightbtn="Learn More"
    background="solar-roof.jpg"
    />
    <Section
    name="Accessories"
    leftbtn="Order Now"
    background="accessories.jpg"

    />
    </>
  )
}

export default Home