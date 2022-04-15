import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";
export default function TopBar()
{
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
    return(
        <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
        <li className="topListItem">
          <Link to="/" className="link">HOME</Link>
        </li>
          <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
          <li className="topListItem" onClick={handleLogout}>
           {user && "LOGOUT"}
            </li>
          </ul>
          </div>

          <div className="topRight">
            {
              user ?(
                <Link to="/settings">
                <img className="topImg" src={PF+user.profilePic} alt="" />
              </Link>
              ) : (
                <ul className="topList">
        <li className="topListItem">
          <Link to="/login" className="link">LOGIN</Link>
        </li>
        <li className="topListItem">
          <Link to="/register" className="link">REGISTER</Link>
        </li>
        </ul>
              )
            }
          
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
    </div>
    );
}
