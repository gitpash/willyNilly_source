import React from "react";
import ReactDOM from "react-dom";
import css from "../styles/index.css";
import Header from "../components/header";
import MainContent from "../components/MainContent";
import Menu from "../components/Menu";
import TiThMenuOutline from "react-icons/lib/ti/th-menu-outline";
import Footer from '../components/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div className="body-wrap">
        <div className="wrapper">

          <Header />
          <TiThMenuOutline
            className="hamburger"
            onClick={this.handleClick}
            size={30}
          />
          <MainContent />

         <Footer />
        </div>
        <Menu visible={this.state.visible} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));