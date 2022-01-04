import { SocketInstance } from "./@types/socket-instance";

export default class SocketHandler {
  constructor(protected socket: SocketInstance) {}

  public async emit({ channel, message }: { channel: string; message: Buffer | null }) {
    this.socket.emit(channel, message);
  }
}
