import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    const getCats=async()=>{
      const res=await axios.get("/categories");
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://us.123rf.com/450wm/gstockstudio/gstockstudio1604/gstockstudio160400008/54625118-confident-and-handsome-confident-young-man-holding-hand-on-chin-and-smiling-while-sitting-at-his-wor.jpg?ver=6"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
         
         
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}