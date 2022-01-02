import InstanceManager from "../@types/instance-manager";

import { SocketInstance } from "./@types/socket-instance";

import SocketConnector from "./connector";

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
        object[instance] = SocketConnector.getInstance(host);
        return object;
      },
      {}
    );
  }

  public static get(instance: string) {
    return SocketManager.instances[instance];
  }
}
