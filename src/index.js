import './style';
if (typeof window !== 'undefined') {
	window._to = {
		server: ['https://webtrack.allcitygo.com:8088/event/upload'],
		appId: 'tbmember',
		workspaceId: 'default',
		appName: '天猫入会活动',
		// user_id: '', //选填
		autoExpo: true,
		h5version: '0.0.1'
	};
	

	require('@tklc/trackerSdk');
	require('@tklc/authSdk');
	const BrowerLogger = require('alife-logger');

	// BrowserLogger.singleton(conf) conf传入config配置
	const __bl = BrowerLogger.singleton({
		pid: 'fo6t86zsux@92dd51909ad006d',
		imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?' // 设定日志上传地址,新加坡部署可选`https://arms-retcode-sg.aliyuncs.com/r.png?`
	// 其他config配置
	});
	window.authSDK.getUserInfo((res) => {
		console.log(res);
		Tracker.log({ tag: 'authSDK-getUserInfo', res });	
	});
	
}


import App from './components/app';

export default App;
