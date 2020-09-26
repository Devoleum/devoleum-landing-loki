import Header from './components/Header';
import Home from './components/Home';
import './styles/index.scss';
import render from 'preact-render-to-string';
import { h } from 'preact';
/** @jsx h */

export default function({match, children}) {
  return (
    <div>
			<Header/>
	    <Home/>
    </div>
  );
}
