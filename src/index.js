import Header from './components/Header';
import Home from './components/Home';
import './styles/index.scss';

export default function({match, children}) {
  return (
    <div>
			<Header/>
	    <Home/>
    </div>
  );
}
