export function getDataJson(actId){
	return fetch(`https://operation.allcitygo.com/oper-act-tmall/tmallActivity/getResultPageJson?activityId=${actId}`)
		.then((response) => response.json())
		.then((res) => {
			console.log('fetch getDataJson',res);
			if (res.status===200 || res.code=== '20000'){
				let data =res.data || {};
				/*
		{"code":"20000","msg":"Success","data":{"activityId":346,"activityTmallId":1,"name":"测试","startTime":"2019-09-10 01:47:30","endTime":"2019-09-17 01:47:30","status":2,"sellerId":"string","targetNumber":3000,"linkType":1,"activityLink":"string","resultPageTemplate":3,"resultPageJson":"{\n    \"config\": {\n      \"bg_url\": \"https://img-citytsm.oss-cn-hangzhou.aliyuncs.com/image/tb/result_bg.png\",\n      \"coupon_name\": \"生活缴费红包\",\n      \"fail_msg1\": \"(同身份证账号、手机号、支付宝、设备皆视为同一账号)\",\n      \"fail_msg2\": \"如有疑问，请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助\",\n      \"fail_msg3\": \"请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助\",\n      \"to_use_url\": \"https://www.taobao.com\",\n      \"more_url\": \"https://www.taobao.com\",\n      \"new_coupon\":{\n        \"price\":\"10\",\n        \"title\":\"文案\",\n        \"url\":\"https://www.taobao.com\",\n        \"bg\": \"https://img-citytsm.oss-cn-hangzhou.aliyuncs.com/image/tb/rpk_bg.png\"\n    }\n}\n  }","equityType":1,"equityId":"1231","whiteList":"string","gmtCreate":null,"gmtModified":null}}
		*/      try {
				 if (res.data && typeof res.data.resultPageJson ==='string' && res.data.resultPageJson.indexOf('{')===0){
						data.config = JSON.parse(  res.data.resultPageJson ).config;
				 }
			    }
				catch (err){
					console.warn(err);
			   }
				return {
					success: true,
					data: data||{}
				};
			}
			return res;
			
		      
		});
}