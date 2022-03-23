import "../App.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  return (
    <header className="Header">
      <section className="header_wrapper">
        <div className="logo_wrapper">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + `assets/jbnu.png`}
          />
          <div className="text_wrapper">
            <div className="title">JBNU</div>
            <div>전북대학교 AI연구실</div>
          </div>
        </div>
        <section className="right_side">
          <div className="main_navigator">navigator</div>
          <div className="search">
            <input type="text" class="input" className="input" />
            <SearchOutlinedIcon />
          </div>
          <div className="language">
            <button className="btn_kr">KR</button>
            <button className="btn_en">EN</button>
          </div>
          <div className="side_navigator">sideMenu</div>
        </section>
      </section>
    </header>
  );
};

export default Header;
