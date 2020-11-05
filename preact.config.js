import pkg from './package.json';
export default (config, env, helpers) => {
	//console.log(JSON.stringify(config));
	if (env.production) {
		config.output.publicPath = pkg.homepage;
	}
};