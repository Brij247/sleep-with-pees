import { useEffect, useState } from "react";
import { Card, Result } from "antd";
import SpotifyWebApi from "spotify-web-api-js";

import SpotifyLogin from "./components/SpotifyLogin";
import { getTokenFromResponse } from "./config/spotify";
import { useStateValue } from "./config/StateProvider";
import Player from "./components/Player";

const s = new SpotifyWebApi();

function Playlist() {
  document.title = "Playlist - Sleep with PeeS";
  const [{ token, playlists }, dispatch] = useStateValue();
  const [playlistId, setPlaylistId] = useState(
    playlists?.items?.[0]?.id || "2vP8QDwB5lY9FJrdunOiBY"
  );
  console.log(playlists, playlists?.items?.[0]?.id, playlistId, "initialData");
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    console.log(_token, s, "details");
    // if (_token) {
    //   setToken(_token);
    //   s?.setAccessToken(_token);
    //   s.getMe().then((user) => {
    //     console.log(user);
    //   });
    // }
    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // s.getPlaylist(playlistId).then((response) =>
      s.getPlaylist("2vP8QDwB5lY9FJrdunOiBY").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch, playlistId]);

  console.log(s, "spotify");

  return (
    <Card title={"Playlist"}>
      {!token && <SpotifyLogin />}
      {token && <Player spotify={s} setPlaylistId={setPlaylistId} />}
    </Card>
  );
}

export default Playlist;
