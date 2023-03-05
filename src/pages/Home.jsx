import React from "react";
import FAQ from "../components/FAQ";
import SocialBox from "../components/SocialBox";
import Testimonials from "../components/Testimonials";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>Empower Through</h1>
        <h1>Education.</h1>
      </div>
      <div className="description">
        <p>
          The CodeFamily community offers events, hackathons, quality learning,
          networking and open source opportunities to help you build a better
          career
        </p>
      </div>
      <div className="buttons">
        <button>Join Now</button>
        <button>Events</button>
      </div>

      <SocialBox />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default Home;
