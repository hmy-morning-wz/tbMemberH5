import { h, Component } from 'preact';
import style from './style';
import { crossImage ,navigation ,JSAPI } from '../../base';
import { getDataJson } from '../../service';
//import result_bg from '../../assets/image/result_bg.png';
import button_touse from '../../assets/image/button_touse.png';
import button_bg from '../../assets/image/button_bg.png';
import msg_box from '../../assets/image/msg_box.png';
import data from '../../demo/data.json';
const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';
const ERROR = 'ERROR';
const FAIL_DONE = 'FAIL_DONE';
const FAIL_NOT_ALLOW = 'FAIL_NOT_ALLOW';
const MSG1='您已参加过活动';
const MSG2='您非本次活动渠道的关注用户';
const MSG3='来晚了，券已领完';
let HELP_MSG1=data.config.fail_msg1;//'(同身份证账号、手机号、支付宝、设备皆视为同一账号)'
let HELP_MSG2=data.config.fail_msg2;//'如有疑问，请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助'
let HELP_MSG3=data.config.fail_msg3;//'请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助'
let couponName = data.config.coupon_name;
export default class Result extends Component {
	state = {
		code: null,
		title: '',
		message: '',
		price: 0,
		helpMessage: '',
		bgImage: '',//'https://front-h5.oss-cn-hangzhou.aliyuncs.com/img/beiyingmate/bg_result_beiyinmate2.png',
		couponUrl: '',
		toUseUrl: '',
		newCoupon: { }
	};
	handleCoupon=() => {
		Tracker.click('结果页面-更多福利', { toUrl: this.state.couponUrl }, () => {
			this.state.couponUrl && (navigation.pushWindow(this.state.couponUrl,false));
		});
	}
	handleToUse=() => {
		Tracker.click('结果页面-立即使用', { toUrl: this.state.toUseUrl }, () => {
			this.state.toUseUrl && (navigation.pushWindow(this.state.toUseUrl,false));
		});
	}
	handleNewCoupon=() => {
		Tracker.click('结果页面-底部-抢红包', { toUrl: this.state.newCoupon.url }, () => {
			this.state.newCoupon.url && (navigation.pushWindow(this.state.newCoupon.url,false));
		});
		
	}
	handleHelp=() => {

	}
	fetchJson =(actId) => {
		console.log('fetchJson',this.state,data);
		getDataJson(actId).then((res) => {
			console.log('getDataJson res',res);
			let config = data.config || {};
			if (res && res.success && res.data){
				Object.assign(config,res.data.config || {});
			}
			let { code } = this.state;
			HELP_MSG1=config.fail_msg1;
			HELP_MSG2=config.fail_msg2;
			HELP_MSG3=config.fail_msg3;
			couponName = config.coupon_name;
			let  helpMessage = code===SUCCESS?couponName:(code===FAIL_DONE?HELP_MSG1:(code===FAIL_NOT_ALLOW?HELP_MSG2:''));//HELP_MSG3
			let { bg_url,
				to_use_url,
				more_url,
				new_coupon } = config;
			if (new_coupon && typeof new_coupon ==='string' && new_coupon.indexOf('{')>-1){
				try {
					new_coupon = JSON.parse(new_coupon);
				}
				catch (err){}
			}
			this.setState({ helpMessage,bgImage: bg_url,toUseUrl: to_use_url,couponUrl: more_url,newCoupon: new_coupon });
			console.log('getDataJson',config,this.state);
			JSAPI.hideLoading();
		}).catch((err) => {
			JSAPI.hideLoading();
			JSAPI.toast('系统开小差了，请稍后再试');
		});
		
	}


	// gets called when this route is navigated to
	componentDidMount() {
		JSAPI.showLoading('加载中');
		// start a timer for the clock:
		//console.log('search',location.search);
		//console.log('hash',location.hash);
		let urlParams = navigation.getUrlParams();
		console.log('urlParams',urlParams);
		let { code,title,message,price,actId } = urlParams || {};
		title =  title || (code===SUCCESS?'恭喜获得':(code===ERROR || code===FAIL?'哎呦':'抱歉'));
		message =  message || (code===SUCCESS?'':(code===FAIL_DONE?MSG1:(code===FAIL_NOT_ALLOW?MSG2:MSG3)));
		//let  helpMessage = code===SUCCESS?"生活缴费红包":(code===FAIL_DONE?HELP_MSG1:(code===FAIL_NOT_ALLOW?HELP_MSG2:HELP_MSG3))
		this.setState({ urlParams,code,title, message,price,actId });
		window.authSDK.getUserInfo((res) => {
			console.log(res);
			Tracker.log({ tag: 'authSDK-getUserInfo', res });
			res && this.setState({ userId: res.userId });
			Tracker.click('打开结果页面-'+code, { code,title,message });
		});
		this.fetchJson(actId);
		document.addEventListener('back', (e) => {
			//alert('back');
			if (window.history.length > 1){
				window.AlipayJSBridge && window.AlipayJSBridge.call('popWindow');
			}
		}, false);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
	
	}


	render() {
		return (
			<div class={style.packet_container}>
				<img class={this.state.bgImage?'':'hide'} style="background:#F25917" src={crossImage(this.state.bgImage,750,1206)} />
				<div class={style.title_text}>{this.state.title}</div>
				<div class={this.state.code ===SUCCESS&& this.state.price?style.money_header:style.header}>{this.state.code ===SUCCESS?this.state.price:this.state.message}</div>
							
				<div class={style.text_redbag}>{this.state.helpMessage}</div>
				<div class={this.state.code ===SUCCESS && this.state.toUseUrl?style.btn_touse:'hide'} onClick={this.handleToUse}><img src={button_touse} /></div>
				<div class={this.state.code !==ERROR?style.btn_more:'hide'} onClick={this.handleCoupon} style={`background-image: url(${button_bg}) ; background-size: 100%  100% ;`} >
					<div class={style.title}>更多福利</div>
				</div>
				<div class={this.state.code !==ERROR?style.msg_box:'hide'} onClick={this.handleHelp} style={`background-image: url(${msg_box}) ; background-size: 100%  100% ;`}  >
					<div class={style.title} />
				</div>
				<div class={(this.state.newCoupon && this.state.newCoupon.title && this.state.newCoupon.bg)?style.new_coupon_box:'hide'} onClick={this.handleNewCoupon} style={`background-image: url(${crossImage(this.state.newCoupon.bg)}) ; background-size: 100%  100% ;`}   >
					<div class={style.left_box}><div class={style.title}>{this.state.newCoupon.price}</div></div>
					<div class={style.right_box}>
						<div class={style.title}>{this.state.newCoupon.title}</div>
						<div class={style.qiang}>抢</div>
					</div>
				</div>
			</div>
			
		);
	}
}
