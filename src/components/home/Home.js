import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home-nav">
        <div className="content-div">
          <div>
            <h2>SAFAR 1443 AH</h2>
          </div>
          <div>
            <p>
              The Hilal to commence the month of Safar 1443 AH was looked for
              after the sunset of Tuesday, September 7, 2021. The hilal was
              SIGHTED by CHC subcommittee members in San Diego, CA and Phoenix,
              AZ .
            </p>
            <p>
              The Central Hilal Committee of North America has accepted these
              report(s) and has declared:
            </p>
            <p>
              <span className="span">
                Thus Wednesday, September 8, 2021 will be the 1st day of Safar
                1443 AH.
              </span>
            </p>
          </div>
          <div className="calender-h-container">
            <div className="calender-heading">
              <h2>Calender</h2>
            </div>
            <div className="calender-div">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
            </div>
          </div>
        </div>
        {/* -------------- Article div ------------ */}
        <div className="article-div" id="article">
          <div>
            <h2>ARTICLE</h2>
          </div>
          <h2>NATIONAL CHC ULEMA JOINT STATEMENT</h2>
          <p>
            National CHC Ulema Joint Statement About Jumuah, Jamaah and More
            During Virus Outbreak
          </p>
          <a href="#">Read More</a>
          <h2>CHC CONFERENCE 5: RESOLUTIONS 2019</h2>
          <p>Central Hilal Committee Conference 5: Resolutions 2019</p>
          <span>Read More</span>
          <h2>CHC CONFERENCE 5: GLOBAL MOONSIGHTING - FACTS VS FICTION</h2>
          <p>Global Moonsighting - Facts vs Fiction</p>
          <a href="#">Read More</a>
          <h2>
            CHC CONFERENCE 5: WHY ASTRONOMICAL CALCULATIONS CANNOT REPLACE
            MOONSIGHTINGon February 1
          </h2>
          <p>Why Astronomical Calculations Cannot Replace Moonsighting</p>
          <a href="#">Read More</a>
          <h2>
            CHC CONFERENCE 5: SIGHTING THE MOON USING BINOCULARS AND TELESCOPES
          </h2>
          <p>Sighting the Moon Using Binoculars and Telescopes</p>
          <a href="#">Read More</a>
        </div>
        {/* -------------- Objective div ------------ */}
        <div className="objective-div" id="objective">
          <h2>OBJECTIVE</h2>
          <p>the Central Hilal Commitee of North America</p>
          <span>Objectives of CHC</span>
          <ul>
            <li>
              Revive the abandoned sunnah of moon sighting every month,
              especially for Ramadan and Eid.
            </li>
            <li>
              Unite the Muslims of USA on both Eids and Ramadan by establishing
              a nationwide system of sighting the moon all year round.
            </li>
            <li>
              <p>
                Fulfill the obligation on the entire community to sight the moon
                (fardh kifaya) every month, nationwide...
                <a href="#">Read More</a>
              </p>
            </li>
          </ul>
          <span>The Need for CHC</span>
          <p>
            We must establish our own system of moon sighting in North America,
            with the will of Allah, if we are to live as proper Muslims in this
            great land which has provided us with so many religious freedoms
            unthinkable in many other places. We do not need to rely on foreign
            sources when we can organize proper system in accordance to the
            Quran and Sunnah in our own land....
            <a href="#">Read More</a>
          </p>
        </div>
        {/*----------- About div ---------*/}
        <div className="about-div" id="about">
          <div className="about-heading">
            <h2>ABOUT</h2>
          </div>
          <div className="about-h1">
            <span>Assalamu Alaikum Wa Rahmatullahi Wa Barakaatuhu,</span>
          </div>
          <div className="about-para">
            <p>
              We would like to welcome you to the official website of the
              Chicago Hilal (Moon Sighting) Committee. Over the past decade,
              there has been much confusion amongst the Muslim community in
              regards to the beginning of Islamic months and Islamic holidays –
              namely Ramadan and the two Eids – which directly stems from
              misunderstandings about the moon sighting procedure. It is by the
              immense blessing of Allah (subhanahu wa ta’alaa) that He has
              provided a solution to this country through the blessed words of
              His beloved (sallAllahu alayhi wa salam) as he said, “The scholars
              are the inheritors of the Prophets.” Understanding the immense
              responsibility that this statement entails, the scholars of
              Chicago have come forward to use their training in order to
              benefit the society at large. With that in mind, the Chicago Hilal
              Committee was formed under the auspices of renowned scholars as
              well as representatives from the various mosques (masajid) to be
              able to carry out a responsibility that has been inherited by the
              Muslim community – especially the scholars – from the Prophet
              (sallAllahu alayhi wa salam). This responsibility is to determine
              the Islamic calendar through the sighting of the moon.
            </p>
          </div>
          <div>
            <span>Wassalamu Alaikum Wa Rahmatullahi Wa Barakaatuhu,</span>
          </div>
          <div>
            <span> The Chicago Hilal Team</span>
          </div>
        </div>
      </div>
    </>
  );
};
