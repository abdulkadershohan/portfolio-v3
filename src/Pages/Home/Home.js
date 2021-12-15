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
          <h1>I'M <span>MD </span>ABDUL <font color="#17d1ac">KADER</font></h1>
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
                <p>An extremely positive and individual & can stay focused and motivated. Responsible, dependable and takes great pride in all my work. Can work both independently and in a team, which has been proven from past work experience and academic experiences.</p>
            <div className="header-button">
                <div className="header-button-left">
                    <a href="#" target='_blank'>Contact Me</a>
                </div>
                <div className="header-button-right">
                    <a href="#">Get Resume</a>

                </div>
            </div>


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
