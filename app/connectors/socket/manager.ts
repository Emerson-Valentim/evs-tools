import { io } from "socket.io-client";

import InstanceManager from "../@types/instance-manager";

import { SocketInstance } from "./@types/socket-instance";

export default class SocketManager extends InstanceManager {
  protected static instances: {
    [key: string]: SocketInstance;
  };

  public static add(
    sockets: {
      instance: string;
      host: string;
    }[]
  ) {
    SocketManager.instances = sockets.reduce(
      (object: any, { host, instance }) => {
        object[instance] = io(host);
        return object;
      },
      {}
    );
  }

  public static get(instance: string) {
    return SocketManager.instances[instance];
  }
}
