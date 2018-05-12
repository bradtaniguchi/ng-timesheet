const liveServer = require('live-server');
// this script shows the lighthouse report generated by the
// npm run lighthouse script
const liveServerParams = {
  port: 8080,
  host: '0.0.0.0',
  file: './coverage/index.html',
  root: '.',
  open: false
};

liveServer.start(liveServerParams);
