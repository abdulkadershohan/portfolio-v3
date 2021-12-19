import React from 'react';
import './About.css'
import Image from '../../images/IMG_2087-01.jpeg'
import resume from "../../CV/MD Abdul Kader.pdf";
function About () {
        return (
            <div id='about'>
                <h1>About</h1>
                <div className="about">
                    <div className="about-image">
                        <img src={Image} alt=""/>
                    </div>
                    <div className="about-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda, commodi consequatur cupiditate dolore minus quam vitae voluptate. Non, quisquam!</p>
                        <p>Lorem ipsum dolor sit amet :</p>
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                        <div className="about-button">
                            <div className="about-button-left">
                                <a href="#">Contact Me</a>
                            </div>
                            <div className="about-button-right">
                                <a href={resume}>Get Resume</a>

                            </div>
                        </div>
                    </div>

                </div>



            </div>
        );
}

export default About;
/*
* <div className="bio">
                            <ul>
                                <li>Name : Md. Abdul Kader</li>
                                <li>Gender : Male</li>
                                <li>Email : abdulkadirshohan@gmail.com</li>
                                <li>Date of Birth : 31-12-1999</li>
                                <li>Nationality : Bangladeshi</li>
                                <li>Phone : +8801766614798</li>
                            </ul>
                        </div>
* */