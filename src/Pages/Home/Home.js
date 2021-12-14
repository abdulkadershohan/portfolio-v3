import React, { Component } from "react";
import "./Home.css";
import profile from "../../images/profile-picture.svg";
import Typical from 'react-typical'
class Home extends Component {
  render() {
    return (
      <div id='home'>
        <div className="home-text">
          <p>Hello!</p>
          <h1>I'M MD ABDUL KADER</h1>
            <div>
                <h1>
                    <Typical
                    loop={Infinity}
                    steps={[
                        "React JS/React Native",
                        1000,
                        "Font End Developer",
                        1000,
                        "NodeJS/MySQL",
                        1000
                    ]}
                    />
                </h1>
            </div>
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
