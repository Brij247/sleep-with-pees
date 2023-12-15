import React from "react";
import "./Body.css";
import Header from "./Header";
// import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { HomeOutlined, PlayCircleFilled } from "@ant-design/icons";
import { useStateValue } from "../config/StateProvider";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
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
      });
  };

  const playSong = (id) => {
    console.log(id);
    const trackUri = `spotify:track:${id}`;
    spotify
      .getMyCurrentPlaybackState()
      .then((data) => {
        if (data.is_playing) {
          console.log("User is currently playing something");
        } else {
          console.log("User is not currently playing anything");
          spotify
            .play({
              uris: [trackUri],
            })
            .then((res) => {
              console.log(res, "currentlu play");
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
            });
        }
      })
      .catch((error) => {
        console.error("Error getting playback state", error);
      });
    spotify
      .play({
        uris: [trackUri],
      })
      .then((res) => {
        console.log(res, "currentlu play");
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
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
          {/* <HomeOutlined fontSize="large" /> */}
          {/* <HomeOutlined /> */}
        </div>

        {discover_weekly?.tracks?.items?.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
