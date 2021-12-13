import React, { Component } from "react";
import "./Home.css";
import profile from "../../images/IMG_2087-01.jpeg";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <div className="home-text">
          <p>Hello!</p>
          <h1>I'M MD ABDUL KADER</h1>
          <h3>I studied at Bangladesh University of Business and Technology (BUBT)</h3>
          <h4>Department of Computer Science & Engineering</h4>
          <button>CONTACT ME</button>

        </div>
        <div className="home-image">
          <img
              src={profile}
              alt="profile-pic"
          />
        </div>

      </div>
    );
  }
}

export default Home;
