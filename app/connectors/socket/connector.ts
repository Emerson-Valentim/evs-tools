import { io } from "socket.io-client";

import { SocketInstance } from "./@types/socket-instance";

export default class SocketConnector {
  protected static instance: SocketInstance;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(host: string): SocketInstance {
    if (!SocketConnector.instance) {
      SocketConnector.instance = io(host);
    }

    return SocketConnector.instance;
  }
}
