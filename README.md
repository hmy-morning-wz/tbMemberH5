# tbMemberH5
npm install -g preact-cli


测试地址
sit
https://sit-operation.allcitygo.com/tbMemberH5/


本地测试链接

http://localhost:8080/tbMemberH5/?actId=123
http://localhost:8080/tbMemberH5/#/result?code=ERROR&actId=1234


特别说明


1,package.json 设置 "homepage": "/tbMemberH5/", 根据部署path来的
路由地址从/开始匹配 
publicPath 也为homepage，preact.config.json配置

2，build路由页面 prerender-url.json配置

//活动地址
"activity_url": "https://pages.tmall.com/wow/pegasus/test-site/684978/33SL6w",
## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy 
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


~~~
postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json()) // parses response to JSON
}

~~~
