const liveServer = require('live-server');

const liveServerParams = {
  port: 4200,
  host: '0.0.0.0',
  root: './dist',
  file: 'index.html',
  open: false,
};

liveServer.start(liveServerParams);