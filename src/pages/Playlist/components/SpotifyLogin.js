import { accessUrl } from "../config/spotify";
import "./SpotifyLogin.css";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
