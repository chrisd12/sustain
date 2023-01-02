import * as React from 'react';
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./header";
import { Image } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <div>
        <div style={{ margin: "50px" }}>
          <h1>Welcome to sustain</h1>
          <h2>The WEB3 Crowdfunding platform for sustainable projects</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ textAlign: "justify", width: "45%", margin: "40px" }}
          >
            <p style={{ fontSize: "22px" }}>
              At Sustainable Crowdfunding, we believe that every person has the
              power to make a positive impact on the world. That’s why we
              created this platform – to connect people who are passionate about
              sustainability with the projects and organizations that are making
              a difference.
            </p>
          </div>
          <div style={{ margin: "50px" }}>
            <Image
              boxSize="300px"
              src={require("../assets/sustainability_home.jpg")}
              alt="Dan Abramov"
            />
          </div>
        </div>

        <div style={{ height: "50px" }}></div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ margin: "50px" }}>
            <Image
              boxSize="300px"
              src={require("../assets/sustainability.jpeg")}
              alt="Dan Abramov"
            />
          </div>
          <div
            style={{ textAlign: "justify", width: "45%", margin: "40px" }}
          >
            <p style={{ fontSize: "22px" }}>
              Our mission is simple: to support and promote sustainable projects
              that benefit the environment, society, and the economy. We believe
              that sustainability is key to building a better future for
              everyone, and we’re dedicated to helping projects that are focused
              on renewable energy, sustainable agriculture, community
              development, and other areas that make a positive impact on the
              world.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ textAlign: "justify", width: "45%", margin: "40px" }}>
          <p style={{ fontSize: "22px" }}>
            We understand that finding and supporting sustainable projects can
            be a challenge, which is why we’ve made it easy for you to discover
            and support the campaigns that matter most to you. Simply browse
            through our selection of campaigns, choose the one that speaks to
            you, and make a contribution. Every dollar makes a difference, and
            by supporting these projects, you’re helping to build a more
            sustainable future for us all while getting a fixed return.
          </p>
        </div>
        <div style={{ margin: "50px" }}>
          <Image
            boxSize="300"
            src={require("../assets/water_home.jpeg")}
            alt="Dan Abramov"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
