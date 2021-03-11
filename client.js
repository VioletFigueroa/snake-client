const net = require("net");
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const settings = { host: IP, port: PORT };
const conn = net.createConnection(settings, () => {
  // 'connect' listener.
  console.log("connected to server!");
  conn.write("world!\r\n");
});
const connect = function() {
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data.toString());
    //conn.end();
  });
  conn.on("connect", () => {
    conn.write(`Name: Oᴥ0`);
  });
  conn.on("end", () => {
    console.log("disconnected from server");
  });
  return conn;
};

module.exports = {connect};
