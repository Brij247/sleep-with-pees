import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./SIdebar";
import Body from "./Body";

function Player({ spotify, setPlaylistId }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar setPlaylistId={setPlaylistId} />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
