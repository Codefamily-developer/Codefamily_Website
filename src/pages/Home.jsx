import React from "react";
import Blogs from "../components/Blogs";
import Events from "../components/Events";
import FAQ from "../components/FAQ";
import Mission from "../components/Mission";
import Resources from "../components/Resources";
import SocialBox from "../components/SocialBox";
import Testimonials from "../components/Testimonials";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Empower Through</h1>
        <h1>Education.</h1>
      </div>
      <div className={styles.description}>
        <p>
          The CodeFamily community offers events, hackathons, quality learning,
          networking and open source opportunities to help you build a better
          career
        </p>
      </div>
      <div className={styles.buttons}>
        <button>Join Now</button>
        <button>Events</button>
      </div>
      <Mission />
      <Resources />
      <Blogs />
      <Events />
      <SocialBox />
      <FAQ />
      <Testimonials />
    </div>
  );
}

export default Home;
