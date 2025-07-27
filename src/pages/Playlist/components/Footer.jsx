import { useEffect } from "react";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PlayCircleOutlined,
  RetweetOutlined,
  PauseCircleOutlined,
  SwapOutlined,
} from "@ant-design/icons";

import "./Footer.css";
import { useStateValue } from "../config/StateProvider";

function Footer({ spotify }) {
  const [{ item, playing }, dispatch] = useStateValue();
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <SwapOutlined className="footer__green" />
        <StepBackwardOutlined onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PlayCircleOutlined
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PauseCircleOutlined
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <StepForwardOutlined onClick={skipPrevious} className="footer__icon" />
        <RetweetOutlined className="footer__green" />
      </div>
      <div className="footer__right"></div>
    </div>
  );
}

export default Footer;
