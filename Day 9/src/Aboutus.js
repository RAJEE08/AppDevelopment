import React from "react";
import './AboutUs.css';
import Footer from './footer';
import Header from './header';

function AboutUs(){
    return(
        <div>
        <Header />
        <div className="about-us">
      <h1>About Us</h1>

      <section>
        <h2 color='brown'>Our Mission and Vision</h2>
        <h2>Vision:</h2> <h3>To promote and facilitate organ transplantation and organ donation in the country.</h3><br></br><br></br>
<h2>Mission:</h2> <h3>To disseminate information, monitor transplantation activities, assist states in data management, provide consultancy support, coordinate activities for organ procurement, maintain waiting lists, and network with transplant centers, retrieval centers, and tissue banks.</h3>
      </section>
<br></br>
      <section>
        <h2>Our Story</h2>
        <p>Share the history and background of your organization.</p>
      </section>
        </div >
        <div className="w">
      <Footer />
      </div>
        </div>
    );
}

export default AboutUs;