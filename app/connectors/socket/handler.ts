import { SocketInstance } from "./@types/socket-instance";

export default class SocketHandler {
  constructor(protected socket: SocketInstance) {}

  public async emit<T>({ channel, message }: { channel: string; message: T }) {
    this.socket.emit(channel, message);
  }
}
