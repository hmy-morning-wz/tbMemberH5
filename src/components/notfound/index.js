import { h } from 'preact';
import style from './style';

const NotFound = () => (
	<div class={style.header} >
		<h1>错误</h1>
		<p>天啊, 页面消失了。</p>
	</div>
);

export default NotFound;
