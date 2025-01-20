import { Server } from "socket.io";
import password from "./password";
import { log } from "console";

type ServerEvents = {};
type SocketData = {};

const server = new Server<ServerEvents, ServerEvents, ServerEvents, SocketData>({
	cors: {
		origin: ["[::1]", "localhost", "127.0.0.1"],
		allowedHeaders: "*",
	},
	transports: ["polling", "websocket"],
});

password;
server.on("connect", socket => {
	log("Socket joined");
	if (socket.handshake.auth.password !== password) {
		socket.disconnect();
		return;
	};
	log("Password correct");
});

server.listen(3775);