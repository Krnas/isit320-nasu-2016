var servers = ['http://127.0.0.1:5984', 'http://192.168.2.19:5984',
    'http://192.168.2.27:5984',
    'http://168.156.41.96:5984',
    'http://168.156.45.196:5984'
];
var serverIndex = 2;
var serverUrl = servers[serverIndex];
console.log('Middleware attaching to database on: ', serverUrl);

module.exports.serverUrl = serverUrl;