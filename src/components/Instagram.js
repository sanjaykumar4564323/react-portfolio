import React from "react";
import "./Instagram.css";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

const Instagram = () => {
  return (
    <div className="container spacing">
      <div className="row center">
        <h1>Reviews</h1>
      </div>
      <div className="row spacing">
        <div className="col">
          <iframe
            title="facebook1"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjazzysinghrealtor%2Fphotos%2Fa.2351656188382139%2F2996813230533095%2F&show_text=true&width=500"
            className="facebook1"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="col">
          <iframe
            title="facebook2"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjazzysinghrealtor%2Fphotos%2Fa.2351656188382139%2F2994857120728706%2F&show_text=true&width=500"
            className="facebook2"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <iframe
            title="facebook3"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjazzysinghrealtor%2Fphotos%2Fa.2351656188382139%2F2980053822209036%2F&show_text=true&width=500"
            className="facebook3"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="col">
          <iframe
            title="facebook4"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjazzysinghrealtor%2Fphotos%2Fa.2351656188382139%2F2969047636642988%2F&show_text=true&width=500"
            className="facebook4"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="jazzysinghrealtor"
            options={{ height: 400 }}
          />
        </div>
      </div>
      <div className="row spacing">
        <div className="col center">
          <form action="https://www.realsatisfied.com/Jazzy-Singh">
            <button
              type="submit"
              className="btn btn-outline-primary btn-lg btn-block">
              See More Reviews!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
