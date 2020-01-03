import {h, render, Component} from 'preact';
import IconMenu from '../icons/IconMenu';
import LogoDevoleum from '../icons/logo.png';
import isPassive from '../utils/isPassive';


class Header extends Component {

    state = {
      active: false,
    }

  componentDidMount() {
    const main = document.querySelector('body');
    //main.addEventListener('click', this.closeSidebar, isPassive);
  }


  closeSidebar = () => {
    if (this.state.active) {
      this.setState({
        active: false
      });
    }
  };

  toggleSidebar = () => {
    this.setState({ active: !this.state.active });
    console.log('menu int', this.state.active);
  };


  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="menu-toggle" onClick={ this.toggleSidebar }>
              <IconMenu/>
            </div>
            <div className="devoleum-logo">
                <img src={LogoDevoleum} alt="" />
              <div>
                Devoleum
              </div>
            </div>
            <nav className={ 'lg9 md9 ' + (this.state.active ? 'open' : 'closed') }>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#press">Press</a>
              <a href="#team">Team</a>
              <a href="#faq">FAQ</a>
              <a href="#contacts">Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
