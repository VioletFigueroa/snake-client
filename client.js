const net = require("net");
/**
 * Establishes connection with the game server
 */
const settings = { host: "10.0.2.15", port: 50541 };
const connect = () => {
  const conn = net.createConnection(settings, () => {
    // 'connect' listener.
    console.log("connected to server!");
    conn.write("world!\r\n");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data.toString());
    //conn.end();
  });
  conn.on("end", () => {
    console.log("disconnected from server");
  });
  //return conn;
};
module.exports = connect;