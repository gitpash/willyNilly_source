import React from "react";
import FaBeer from "react-icons/fa/beer";
import TiIconPack from "react-icons/lib/ti";
import GoListUnordered from "react-icons/lib/go/list-unordered";

class Header extends React.Component {
  render() {
    return (
      <div className="header_wrap">
        <p className="logo">Willy <br />Nilly</p>
        <p className="header-text">ArtWork space</p>
      </div>
    );
  }
}

export default Header;
