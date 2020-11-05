import { h, Component } from 'preact';
import { Router,route } from 'preact-router';
import { navigation ,JSAPI } from '../base';
import pkg from '../../package.json';
// Code-splitting is automated for routes
import NotFound from './notfound';
import Home from '../routes/home';
import Result from '../routes/result';
if (typeof window !== 'undefined') {
	require('./flexible');
}
const homepage = pkg.homepage || '/';
const ResultPath = homepage+'result';
const NotFoundPath = homepage+'404';
export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	componentDidMount() {
		let urlParams = navigation.getUrlParams();
		console.log('urlParams',urlParams);
		let hash = location.hash;
		if (hash && hash.indexOf('#')>-1){
			if (hash && hash.indexOf('?')){
				hash= hash.split('?')[0];
			}
			hash= hash.replace('#/','').replace('#','');
			if (hash) {
				let ret =route(homepage+hash,true);
				console.log('route to',hash,ret);
				if (!ret){
					route(NotFoundPath);
				}
			}
		}
		JSAPI.ready(() => {
			window.AlipayJSBridge && window.AlipayJSBridge.call('hideOptionMenu');
		});
	}

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path={homepage} />
					<Result path={ResultPath} />
					<NotFound path={NotFoundPath} />
				</Router>
			</div>
		);
	}
}
