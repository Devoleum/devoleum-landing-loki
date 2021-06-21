import { h, render, Component } from "preact";
import IconMenu from "../icons/IconMenu";
import LogoDevoleum from "../icons/logo.png";
import isPassive from "../utils/isPassive";
import LocalizedStrings from "localized-strings";

let strings = new LocalizedStrings({
  en: {
    about: "About",
    press: "Press",
    stories: "Stories",
    contact: "Contact Us",
    donate: "Donate"
  },
  it: {
    about: "Info",
    press: "Media",
    stories: "Storie",
    contact: "Contattaci",
    donate: "Dona"
  },
  fr: {
    about: "Info",
    press: "Presse",
    stories: "Histoires",
    contact: "Contact",
    donate: "Donate"
  },
});

class Header extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    const main = document.querySelector("#home");
    main.addEventListener("click", this.closeSidebar, isPassive);
  }

  closeSidebar = () => {
    if (this.state.active) {
      this.setState({
        active: false,
      });
    }
  };

  toggleSidebar = () => {
    this.setState({ active: !this.state.active });
    console.log("menu int", this.state.active);
  };

  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="menu-toggle" onClick={this.toggleSidebar}>
              <IconMenu />
            </div>
            <div className="devoleum-logo">
              <img src={LogoDevoleum} alt="" />
              <div>Devoleum</div>
            </div>
            <nav
              className={"lg9 md9 " + (this.state.active ? "open" : "closed")}
            >
              <a href="#home">Home</a>
              <a href="#about">{strings.about}</a>
              <a href="#team">Team</a>
              <a href="#contacts">{strings.contact}</a>
              <a href="#donate">{strings.donate}</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
