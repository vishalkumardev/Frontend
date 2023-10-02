import { io } from "socket.io-client";
const URL =  "http://localhost:3000";
const locationSocket = io(URL);
export default locationSocket;
