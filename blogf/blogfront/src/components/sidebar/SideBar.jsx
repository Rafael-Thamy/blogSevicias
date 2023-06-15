import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL})

  

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
     
        <div className="sidebarItem"> 
          <span className="sidebarTitle">
            <p>SOBRE</p>
          </span>
          <p>Em cada poesia há versículo bíblico correspondente à mensagem transmitida</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">
            <p>CATEGORIAS</p>
          </span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        {/* <div className="sidebarItem">
          <span className="sidebarTitle">
            <i>SIGA-NOS</i>
          </span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div> */}
    </div>
  );
}
