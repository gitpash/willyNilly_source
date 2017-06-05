import React from "react";
import FaBeer from 'react-icons/fa/beer';
import TiIconPack from 'react-icons/lib/ti';
import GoListUnordered from 'react-icons/lib/go/list-unordered';
import TiThMenuOutline from 'react-icons/lib/ti/th-menu-outline'

class Header extends React.Component {
  handleClick() {
   return alert("slide left and show menu");
  };
  render() {
    return (
      <div className="header_wrap">
        <p className="logo">Willy <br />Nilly</p>
        <p className="menu" onClick={this.handleClick}><TiThMenuOutline size={30}/></p>
      </div>
    );
  }
}

export default Header;
