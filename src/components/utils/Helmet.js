import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

function PageHeader(props) {
  let location = useLocation();

  let currentUrl = "http://www.ulan13.me" + location.pathname;

  let quote = props.quote !== undefined ? props.quote : "";

  let title =
    props.title !== undefined
      ? props.title
      : "Ulan Rakymzhanov - Personal Blog";

  let image =
    props.image !== undefined
      ? props.image
      : "https://ulan13.me/static/media/profile.ccadc601.jpeg";

  let description =
    props.description !== undefined
      ? props.description
      : "Express my personal ideas in blogs. Link to my projects. Be useful to the world in some ways";

  let hashtag =
    props.hashtag !== undefined ? props.hashtag : "#ulanrakymzhanov";

  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={title} />
      <meta property="quote" content={quote} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Ulan Rakymzhanov" />
      <meta property="og:description" content={description} />{" "}
    </Helmet>
  );
}

export default PageHeader;
