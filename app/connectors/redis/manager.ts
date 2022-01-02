import IORedis, { Redis } from "ioredis";

import InstanceManager from "../@types/instance-manager";

export default class RedisManager extends InstanceManager {
  protected static instances: {
    [key: string]: Redis;
  };

  public static add(
    queues: {
      instance: string;
      host: string;
      port: string | number;
    }[]
  ) {
    RedisManager.instances = queues.reduce(
      (object: any, { instance, host, port }) => {
        object[instance] = new IORedis({
          host,
          port: +port,
          maxRetriesPerRequest: 0,
          enableReadyCheck: false,
        });

        return object;
      },
      {}
    );
  }

  public static get(instance: string) {
    return RedisManager.instances[instance];
  }
}
