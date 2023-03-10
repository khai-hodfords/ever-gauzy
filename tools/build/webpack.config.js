module.exports = (config) => {
	config.externals = {
		'amqp-connection-manager': 'amqp-connection-manager',
		amqplib: 'amqplib',
		atpl: 'atpl',
		'babel-core': 'babel-core',
		'bracket-template': 'bracket-template',
		'coffee-script': 'coffee-script',
		'dustjs-linkedin': 'dustjs-linkedin',
		eco: 'eco',
		ect: 'ect',
		grpc: 'grpc',
		'haml-coffee': 'haml-coffee',
		hamlet: 'hamlet',
		hamljs: 'hamljs',
		'hogan.js': 'hogan.js',
		htmling: 'htmling',
		jazz: 'jazz',
		jqtpl: 'jqtpl',
		just: 'just',
		kafkajs: 'kafkajs',
		liquor: 'liquor',
		marko: 'marko',
		mote: 'mote',
		mqtt: 'mqtt',
		nats: 'nats',
		'pg-native': 'pg-native',
		plates: 'plates',
		ractive: 'ractive',
		react: 'react',
		'react-dom/server': 'react-dom/server',
		redis: 'redis',
		slm: 'slm',
		'teacup/lib/express': 'teacup/lib/express',
		templayed: 'templayed',
		toffee: 'toffee',
		twig: 'twig',
		vash: 'vash',
		velocityjs: 'velocityjs',
		walrus: 'walrus',
		whiskers: 'whiskers',
		npm: 'npm',
		fsevents: 'fsevents',
		bcrypt: 'bcrypt',
		sqlite3: 'commonjs sqlite3',
		ioredis: 'ioredis',
		debug: 'debug'
	};

	return config;
};
