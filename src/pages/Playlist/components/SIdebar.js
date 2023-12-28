import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SideBarOptions";
import { useStateValue } from "../config/StateProvider";
import { HomeOutlined, SearchOutlined, BookOutlined } from "@ant-design/icons";

function Sidebar({ setPlaylistId }) {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists, "playlist");

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeOutlined} option="Home" />
      <SidebarOption Icon={SearchOutlined} option="Search" />
      <SidebarOption Icon={BookOutlined} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        console.log(playlist);
        return (
          <SidebarOption
            option={playlist.name}
            onClick={() => {
              setPlaylistId(playlist.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
