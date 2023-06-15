import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import photo from "../../assets/perfil.jpg"

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images";
 


/* const PF = `${process.env.REACT_APP_ADRESS}`;
 */ 

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      {/* <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div> */}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              INÍCIO
            </Link>
          </li>
          {/*  <li className="topListItem">
            <Link className="link" to="/ab">
              SOBRE MIM
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTATO
            </Link>
          </li> */}

          {/*<li className="topListItem">
            <Link className="link" to="/write">
              ESCREVER
            </Link>
          </li>*/}

          <li className="topListItem">
            <Link className="link" to="/freeBook">
              E-BOOK 
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={photo} alt="" />
          </Link>
        ) : (
          <ul className="topList">
           {/*  <li className="topListItem">
              <Link className="link" to="/login">
                ENTRAR
              </Link>
            </li> */}
            {/*  <li className="topListItem">
              <Link className="link" to="/register">
                CADASTRO
              </Link>
            </li> */}
          </ul>
        )}
        {/*         <i className="topSearchIcon fas fa-search"></i>
         */}{" "}
      </div>
    </div>
  );
}
