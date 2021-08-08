import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./CenterText.css";

const CenterText = () => {
  return (
    <div>
      <div clasName="container">
        <div className="row padding-center">
          <div className="col center">
            <p className="welcome welcomeA">
              Welcome<span>!</span>
            </p>
          </div>
        </div>
        <div className="row spacing">
          <div className="col center">
            <img
              className="center round hiv jazzy"
              src="https://i.imgur.com/Kt6r3ur.png"
              alt="jazzy Singh img"></img>
          </div>
        </div>
        <div className="row center warm">
          <div className="marquee">
            <a
              href="https://www.zillow.com/profile/jazzy-singh/"
              target="blank">
              <img className="zillow" src="https://i.imgur.com/rZ3ODf8.png" />
            </a>
            <a
              href="https://www.realtor.com/realestateagents/jazzy-singh_marysville_oh_3672762_085179143"
              target="blank">
              <img
                className="realtor"
                src="https://www.nar.realtor/sites/default/files/downloadable/office_R_blk.png"
              />
            </a>
            <a href="https://www.linkedin.com/in/jazzysingh/" target="blank">
              <img
                className="linkden"
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              />
            </a>
            <a href="https://jazzysingh.cbintouch.com" target="blank">
              <img className="coldwell" src="https://i.imgur.com/I9SbWIY.png" />
            </a>
          </div>
          <div className="row center spacing">
            <h1 className="make-smaller">About Me</h1>
          </div>
          <div className="row center spacing">
            <p className="p-text">
              Although, many choose real estate because of flexibility the
              career offers and the potential to make a lot of money, those were
              not the reasons I ended up in this profession. After acquiring my
              CPA (Canada) and MBA, I was happy being a businesswoman fulfilling
              my personal goals. This was not a career which gave me true
              happiness and utilized my skills and personality to its full
              potential. Aligning my gifts with an industry where I can spend my
              days building on the dreams of others makes searching for homes
              much more than a job—It's a magnificent obsession.
            </p>
          </div>
          <div className="row center spacing">
            <p className="p-text">
              The truth is that <dfn>real estate found me</dfn>. I found myself
              matching dreams and door keys— I found myself anxious, with as
              much anticipation as my clients when we were waiting to hear if
              our offer was accepted— and that moment when the phone rings—with
              an accepted offer—and I get to call my new friends and give them
              the happy news. There's nothing like it.
            </p>
          </div>
          <div className="row center spacing">
            <p className="p-text">
              Homes are more than just places we live. They are where we start
              our families, where future goals are discussed, where colleges and
              careers of our family members are chosen. Homes are the foundation
              of many beautiful memories – where we entertain everyone for the
              holidays—homes also embody the changes we are facing as a culture
              too: they've become our schools, a headquarters for a growing
              business and holding work conferences and meetings.
            </p>
          </div>
          <div className="row center state spacing">
            <h3>
              <b className="dissaper">Our homes mean everything to us now!</b>
            </h3>
          </div>
          <div className="row center spacing">
            <p className="p-text">
              In order to ensure that my client's receive the best real estate
              experience and advice, I have invested substantial hours in real
              estate education and have acquired many designations such as
              Accredited Buyer Representative (ABR), Effective Use of Real
              Estate Technology (ePRO), Pricing Strategy Advisor (PSA) and
              certificate in At Home Diversity, and Real Estate Investing for
              those who would like to choose real estate for building wealth. I
              am constantly striving to keep myself up to date with the latest
              real estate market trends to be your trusted advisor.
            </p>
          </div>
          <div className="row center spacing">
            <p className="p-text">
              I have built my business on solid foundation of commitment to
              excellence, open and regular communication, determination to go
              beyond my client's expectation while earning their trust to build
              a life-time friendship. I take pride in my abilities to be a good
              listener, relationship builder, and skilled negotiator. I am
              committed to providing you the best experience.
            </p>
          </div>
          <div className="row center spacing">
            <p className="p-text">
              Is living your best life happening where you live now? If not,
              let's find your next home together. I am addicted to the happiness
              I get in helping you achieve your <b className="gold">goals</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterText;
