import React from "react";
import { ImBullhorn } from "react-icons/im";

import EventImg from "../assets/images/event.jpg";

const Events = () => {
  return (
    <div className="events">
      <div className="eventImg">
        <img src={EventImg} alt="" width={"450px"} />
      </div>
      <div className="event_data">
        <div>
          <h1>Events</h1>
          <p>Empowering Tech Minds</p>
        </div>

        <div>
          <div>
            <ImBullhorn color="#f4c01e" size={24} />
            <h2>Exciting activities and challenges</h2>
          </div>
          <div>
            <ImBullhorn color="#f4c01e" size={24} />
            <h2>Exciting activities and challenges</h2>
          </div>
          <div>
            <ImBullhorn color="#f4c01e" size={24} />
            <h2>Opportunities to network and collaborate</h2>
          </div>
        </div>
        <div>
          <a>Ongoing Event</a>
        </div>
      </div>
    </div>
  );
};

export default Events;
