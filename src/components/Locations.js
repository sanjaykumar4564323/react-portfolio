import React, { useState } from "react";
import "./Locations.css";
import { Link } from "react-router-dom";
import ReactMapGL from "react-map-gl";

const Locations = () => {
  const [viewport, setViewport] = useState({
    latitude: 39.9539,
    longitude: -82.9848,
    width: "900px",
    height: "500px",
    zoom: 10
  });
  return (
    <div>
      <div className="container spacing-big">
        <div className="row center">
          <h1>Popular Locations:</h1>
        </div>
        <div class="row">
          <div class="col center">
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle="mapbox://styles/sadnapoleon/ckrqmzvjh0q3a17o3yylw4vqv"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}></ReactMapGL>
          </div>
        </div>
        <div className="row spacing show-the-thing">
          <div class="col-4 content">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-home-list"
                data-toggle="list"
                href="#list-Mary"
                role="tab"
                aria-controls="home">
                Marysville
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-ostran"
                role="tab"
                aria-controls="profile">
                Ostrander
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-dublin"
                role="tab"
                aria-controls="messages">
                Dublin
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-blacklick"
                role="tab"
                aria-controls="settings">
                Blacklick
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-home-list"
                data-toggle="list"
                href="#list-gahanna"
                role="tab"
                aria-controls="home">
                Gahanna
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-powell"
                role="tab"
                aria-controls="profile">
                Powell
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-plaincity"
                role="tab"
                aria-controls="messages">
                Plain City
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-upperarlington"
                role="tab"
                aria-controls="settings">
                Upper Arlington
              </a>
            </div>
          </div>
          <div class="col-8 ">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-Mary"
                role="tabpanel"
                aria-labelledby="list-home-list">
                <div class="card" style={{ width: "30rem", height: "45rem" }}>
                  <img
                    src="https://www.marysvilleohio.org/ImageRepository/Document?documentID=2512"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Marysville</h5>
                    <p class="card-text">
                      Marysville is a city in and the county seat of Union
                      County, Ohio, United States approximately 27 mi NW of
                      Columbus. The population was 22,094 at the 2010 census.
                      This marks a 38.59% increase from 2000. Marysville's
                      longtime slogan is "Where the Grass is Greener".
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.marysvilleohio.org"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-ostran"
                role="tabpanel"
                aria-labelledby="list-profile-list">
                <div class="card" style={{ width: "30rem", height: "40rem" }}>
                  <img
                    src="http://www.ostranderohio.us/wp-content/uploads/2018/02/IMG_0100.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Ostrander</h5>
                    <p class="card-text">
                      Ostrander is a village in Delaware County, Ohio, United
                      States. The population was 643 at the 2010 census.
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBv-OtiLbxAhWZKs0KHaUlCawQFjALegQIBRAD&url=https%3A%2F%2Fwww.ostranderohio.us%2F&usg=AOvVaw16PH_ia6JVaBrwrCulGjk-"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-dublin"
                role="tabpanel"
                aria-labelledby="list-messages-list">
                <div class="card" style={{ width: "30rem", height: "40rem" }}>
                  <img
                    src="https://dublinohiousa.gov/dev/dev/wp-content/uploads/2018/04/dublin-ohio-flag.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Dublin</h5>
                    <p class="card-text">
                      Dublin is a city in Franklin, Delaware, and Union counties
                      in the U.S. state of Ohio. The population was 41,751 at
                      the 2010 census. Dublin is a suburb of Columbus, is the
                      home of the headquarters of Cardinal Health and Wendy's,
                      and hosts the yearly Memorial Tournament at the Muirfield
                      Village Golf Club.
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwip0vuOiLbxAhUzB50JHRvDBg8QFjAAegQIBhAD&url=https%3A%2F%2Fdublinohiousa.gov%2F&usg=AOvVaw0TVC7oVY3XV5IsbWTNqjcp"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-blacklick"
                role="tabpanel"
                aria-labelledby="list-settings-list">
                Blacklick
                <div class="card" style={{ width: "30rem", height: "35rem" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/20/Columbus_flag.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Blacklick</h5>
                    <p class="card-text">
                      Blacklick is a small unincorporated community in southern
                      Jefferson Township, Franklin County, Ohio, United States.
                      Blacklick is also included in the Columbus Metropolitan
                      area. The community was established by William A. Smith in
                      1852.
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiu8qjzh7bxAhVaAp0JHSTKAwcQFjAAegQIBBAD&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBlacklick%2C_Ohio&usg=AOvVaw0V9KI7jjoviXte3dUZVTGi"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-gahanna"
                role="tabpanel"
                aria-labelledby="list-home-list">
                <div class="card" style={{ width: "30rem", height: "35rem" }}>
                  <img
                    src="https://brandlogic.co/site/wp-content/uploads/2018/08/CityofGahanna-featured.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Gahanna</h5>
                    <p class="card-text">
                      Gahanna is a city situated in northeast Franklin County,
                      Ohio, United States. It is a suburb of Columbus. The
                      population was 33,248 at the 2010 census. It was founded
                      in 1849.
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjowoTYh7bxAhWHaM0KHf16A1cQFjAAegQIBBAD&url=https%3A%2F%2Fwww.gahanna.gov%2F&usg=AOvVaw1K6spycjXwLBd3g-QJLqmv"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-powell"
                role="tabpanel"
                aria-labelledby="list-profile-list">
                <div class="card" style={{ width: "30rem", height: "36rem" }}>
                  <img
                    src="https://www.crwflags.com/fotw/images/u/us-ohpow).gif"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Powell</h5>
                    <p class="card-text">
                      Powell is a city in the U.S. state of Ohio, located 14
                      miles north of the state capital of Columbus. The city is
                      located in Delaware County; a frequent placeholder on the
                      List of highest-income counties in the United States, and
                      35th wealthiest county in the United States in 2020.
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi0z-a_h7bxAhUGVc0KHSaMDSEQFjAAegQIAxAD&url=https%3A%2F%2Fcityofpowell.us%2F&usg=AOvVaw30O2Ytaw62VqKRtOPwjpff"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-plaincity"
                role="tabpanel"
                aria-labelledby="list-messages-list">
                <div class="card" style={{ width: "30rem", height: "30rem" }}>
                  <img
                    src="https://static.wixstatic.com/media/e2abe8_05f10907891743449f473c778c031e05.jpg/v1/fit/w_2500,h_1330,al_c/e2abe8_05f10907891743449f473c778c031e05.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Plain City</h5>
                    <p class="card-text">
                      Plain City is a village in Madison and Union counties in
                      the U.S. state of Ohio, along Big Darby Creek. The
                      population was 4,225 at the 2010 census.
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>
                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiHzarHiLbxAhXYbc0KHQhKD3sQFjAAegQIBBAD&url=https%3A%2F%2Fwww.plain-city.com%2F&usg=AOvVaw2-56XE-S7wXTXuB2rFlfad"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="list-upperarlington"
                role="tabpanel"
                aria-labelledby="list-settings-list">
                <div class="card" style={{ width: "30rem", height: "50rem" }}>
                  <img
                    src="https://hulafrog2.com/uploads/5c4145951db4b.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Upper Arlington</h5>
                    <p class="card-text">
                      Upper Arlington, often known by its initials U.A., is a
                      city in Franklin County, Ohio, United States, on the
                      northwest side of the Columbus metropolitan area. The Old
                      Arlington neighborhood is listed on the National Register
                      of Historic Places. As of 2010, the population was
                      estimated to be 33,771
                    </p>
                  </div>

                  <div class="card-body">
                    <Link to="/contact" className="card-link">
                      Interested?
                    </Link>

                    <a
                      href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiB3sm-iLbxAhWQbc0KHYhxAhkQFjAAegQIBRAD&url=https%3A%2F%2Fupperarlingtonoh.gov%2F&usg=AOvVaw3VzEMxh9zxDjB9U0Car_gu"
                      target="blank"
                      class="card-link">
                      website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hide-list">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Marysville</li>
            <li class="list-group-item">Ostrander</li>
            <li class="list-group-item">Dublin</li>
            <li class="list-group-item">Blacklick</li>
            <li class="list-group-item">Gahanna</li>
            <li class="list-group-item">Powell</li>
            <li class="list-group-item">Upper Arlington</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Locations;
