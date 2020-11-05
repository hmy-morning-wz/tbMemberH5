import { h, Component } from 'preact';
import { navigation ,JSAPI } from '../../base';
import style from './style';
import data from '../../demo/data.json';
import { getDataJson } from '../../service';
export default class Home extends Component {
	state = { activityUrl: null }
	fetchJson =(actId) => {
		
		console.log('fetchJson',this.state,data);
		getDataJson(actId).then((res) => {
			let config = data.config || {};
			if (res && res.success && res.data){
				Object.assign(config,res.data.config || {});
				let activity_url = res.data.activityLink;
	      this.setState({ activityUrl: activity_url });
			}
			
			this.goActUrl();
		});
	
		
	}

	goActUrl = () => {
		console.log('goActUrl',this.state);
		let { userId,actId,activityUrl ,bizScenario,inviterId ,sharer} = this.state;
		JSAPI.hideLoading();
		if (activityUrl && activityUrl.indexOf('http') >=0  && userId && userId!=='underfined'){
		//let url = 'https://pages.tmall.com/wow/pegasus/test-site/681695/cE1491';
			let locationUrl= `${activityUrl}?activityId=${actId}&userId=${userId}&bizScenario=${bizScenario}`;
			if(inviterId) {
				locationUrl = locationUrl+'&inviterId='+inviterId
			}
			if(sharer) {
				locationUrl = locationUrl+'&sharer='+sharer
			}
			Tracker.click('跳转入会链接', { locationUrl,actId },() => {
				navigation.pushWindow(locationUrl,true);
			});
			//location.replace(locationUrl);
		}
		else {
			console.warn('goActUrl error',activityUrl,userId);
			Tracker.click('不能跳转入会链接', { activityUrl });
			if ((!activityUrl)){
				JSAPI.toast('系统开小差了，找不到入口了');
			}
			else {
				JSAPI.toast('系统开小差了，请稍后再试');
			}
		}
	}
	// gets called when this route is navigated to
	componentDidMount() {
	    let urlParams = navigation.getUrlParams();
		console.log('urlParams',urlParams);
		JSAPI.showLoading('加载中');
		let { actId,bizScenario,inviterId,sharer } = urlParams || {};
		this.setState({ actId,bizScenario,inviterId ,sharer});
		window.authSDK.getUserInfo((res) => {
			console.log(res);
			Tracker.log({ tag: 'authSDK-getUserInfo', res });
			res && (this.setState({ userId: res.userId }),this.fetchJson(actId));
		});

	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
	
	}

	render() {
		return <div class={style.home} />;
	}
}
