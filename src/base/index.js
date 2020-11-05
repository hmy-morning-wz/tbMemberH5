import p from '../assets/p.png';
export const crossImage= (src,width,height ) => {
	if (!src){
		return p;
	}
	if (src.indexOf('aliyuncs.com')>-1 || src.indexOf('images.allcitygo.com')>-1){
		let  ossProcess =  width? `?x-oss-process=image/resize,m_fill,h_${height||width},w_${width}/format,webp`:'?x-oss-process=image/format,webp';
		return  `${src}${ossProcess}`;
	}
	return src;
};

export const navigation ={
	getUrlParams(){
		let hash  = location.hash.replace('#','');
		let search  = location.search.replace('?','');
		let params1 =hash.indexOf('?')>-1?( qs.parse(hash.split('?')[1])) :qs.parse(hash);
		let params2 = qs.parse(search);
		let sessionRes = sessionStorage.getItem('NAV-UrlParams');
		let res= (sessionRes && (sessionRes.indexOf('{')===0) && JSON.parse(sessionRes)) || {};
		Object.assign(res,params1);
		Object.assign(res,params2);
		sessionStorage.setItem('NAV-UrlParams',JSON.stringify(res));
		return res;
	},
	pushWindow(url,close){
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	    if(typeof my !== 'undefined' && my.getEnv) {
			my.getEnv(function (response) {				
				if (response.miniprogram || (!window.AlipayJSBridge)) 
				{
					if (close) {					
						location.replace(url);
					}
					else {
						location.href = url;
					}
				}else {
					window.AlipayJSBridge.call('pushWindow', {
						url,
						param: {
							readTitle: true,
							showOptionMenu: false,
							closeCurrentWindow: close
						}
					})	
				}
			})
		}
		else if (window.AlipayJSBridge ){
			(window.AlipayJSBridge.call('pushWindow', {
				url,
				param: {
					readTitle: true,
					showOptionMenu: false,
					closeCurrentWindow: close
				}
			}));
		}
		else if (close) {		
			location.replace(url);
		}
		else {
			location.href = url;
		}
	}
};

export const qs= {
	parse(str) {
	  if (!str || str.length == 0) return {};
	  let list = str.split('&');
	  if (!list || list.length == 0) return {};
	  let out = {};
	  for (let index = 0; index < list.length; index++) {
			let set = list[index].split('=');
			set && set.length > 1 && (out[set[0]] = decodeURIComponent(set[1]));
	  }
	  return out;
	},
	stringify(data) {
	  if (!data) return '';
	  let list = [];
	  for (let key in data) {
			if (data[key] instanceof Array  &&data[key].length ){
			   data[key].forEach(t => {
				 list.push(key + '=' + encodeURIComponent(t));
			   });
			}
			else {
		  list.push(key + '=' + encodeURIComponent(data[key]));
			}
	  }
	  return list.join('&');
	}
};

export const JSAPI = {
	showLoading: (text) => {
		console.log('showLoading');
		window.AlipayJSBridge &&
		window.AlipayJSBridge.call('showLoading', {
			text
		});
	},
	hideLoading: () => {
		console.log('hideLoading');
		window.AlipayJSBridge &&
		window.AlipayJSBridge.call('hideLoading');
	},
	toast: (msg,duration,type) => {
		console.log('toast',msg);
		if (window.AlipayJSBridge) {
			AlipayJSBridge.call('toast', {
				content: msg,
				type: type|| 'success',
				duration: duration ||2000
		  }, () => {
			//alert("toast消失后执行");
		  });
		}
	},
	ready: (callback) => {
		// 如果jsbridge已经注入则直接调用
		if (window.AlipayJSBridge) {
			callback && callback();
		}
		else {
			// 如果没有注入则监听注入的事件
			document.addEventListener('AlipayJSBridgeReady', callback, false);
		}
	}
	
	
};
