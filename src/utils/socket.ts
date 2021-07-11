// ES6 import or TypeScript
import io, { Socket as SocketType } from 'socket.io-client';

export default class Socket {
  static instance: null | SocketType = null;
  static init = () => {
    Socket.instance = io('http://192.168.219.196:5000', {
      forceNew: true,
      timeout: 5000,
      transports: ['websocket'],
    });
  };
  static disconnect = () => Socket.instance?.close();
}
