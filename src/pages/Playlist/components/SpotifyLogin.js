import { accessUrl } from "../config/spotify";
import "./SpotifyLogin.css";

function Login() {
  return (
    <div className="login">
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
