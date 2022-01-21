import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { ShareButtonsContainer } from "./styled";

function ShareButtons({ pagetitle }) {
  let fullPageUrl = window.location.href;
  return (
    <ShareButtonsContainer>
      <FacebookShareButton quote={pagetitle} url={fullPageUrl}>
        <FacebookIcon size={18} round={true} />
      </FacebookShareButton>
      <TwitterShareButton quote={pagetitle} url={fullPageUrl}>
        <TwitterIcon size={18} round={true} />
      </TwitterShareButton>
      <RedditShareButton quote={pagetitle} url={fullPageUrl}>
        <RedditIcon size={18} round={true} />
      </RedditShareButton>
    </ShareButtonsContainer>
  );
}

export default ShareButtons;
