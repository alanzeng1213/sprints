const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);



var graylog2 = require("graylog2");

var logger = new graylog2.graylog({
  servers: [

    { 'host': '127.0.0.1', port: 12201 },{ 'host': '127.0.0.2',
     port: 12201 } ],

    hostname: 'server.name',
    facility: 'Node.js',
    bufferSize: 1350
  });


logger.on('error', function (error) {
  console.error('Error while trying to write to graylog2:',error);
});

logger.log("What we've got here is...failure to communicate");

var graylog = require('graylog-loging');

graylog.init({
  graylogPort: 12201,
  graylogHostname: '192.0.0.1'
});

app.use(graylog.logRequest);
app.use(graylog.logResponse);
app.use(graylog.handleErrors)
