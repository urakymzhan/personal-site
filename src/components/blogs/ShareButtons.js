import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  RedditShareButton,
  RedditIcon,
  RedditShareCount,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { ShareButtonsContainer } from "./styled";

function ShareButtons({ pagetitle }) {
  let fullPageUrl = window.location.href;
  return (
    <ShareButtonsContainer>
      <div>
        <FacebookShareButton quote={pagetitle} url={fullPageUrl}>
          <FacebookIcon size={18} round={true} />
        </FacebookShareButton>
        <div className="count">
          <FacebookShareCount url={fullPageUrl} />
        </div>
      </div>
      <div>
        <TwitterShareButton quote={pagetitle} url={fullPageUrl}>
          <TwitterIcon size={18} round={true} />
        </TwitterShareButton>
      </div>
      <div>
        <RedditShareButton quote={pagetitle} url={fullPageUrl}>
          <RedditIcon size={18} round={true} />
        </RedditShareButton>
        <div className="count">
          <RedditShareCount url={fullPageUrl} />
        </div>
      </div>
    </ShareButtonsContainer>
  );
}

export default ShareButtons;
