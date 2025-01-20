import { io } from "socket.io-client";
import password from "./password.ts";
import { Socket } from "socket.io-client";

type SocketEvents = {};

const socket = io({auth: {password}}) as Socket<SocketEvents, SocketEvents>;
socket.on("connect", () => {
	console.
	log("Connected to server!");
	
});