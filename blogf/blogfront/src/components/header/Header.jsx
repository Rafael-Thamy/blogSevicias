import "./header.css";
import violet from "../../assets/reajuste1920.png";
import header from "../../assets/headerDois.png";


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">
          <img src={header} alt="" />
        </span>
         <span className="headerTitleSm">Várias versões via eiva</span> 
      </div>
      <img
        className="headerImg"
        /*         src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
         */
        src={violet}
        alt="something"
      />
    </div>
  );
}

//this is used only for tests with the frontend header
