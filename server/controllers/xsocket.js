const Server = require('socket.io');
//const server = require('http').Server();

class XSocket {
  constructor(port, xtime) {
    this.port = port;
    this.xtime = xtime;
    this.io = new Server();
  }
  open_socket() {
    this.io.listen(this.port);
  }
}
