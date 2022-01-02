import InstanceManager from "../@types/instance-manager";
import RedisManager from "../redis/manager";

import { WorkerHandler } from "./handler";

export default class WorkerManager extends InstanceManager {
  protected static instances: {
    [key: string]: typeof WorkerHandler;
  };

  public static add(
    queues: {
      queueName: string;
      redisName: string;
      handler: typeof WorkerHandler;
      redis: typeof RedisManager;
    }[]
  ) {
    WorkerManager.instances = queues.reduce(
      (object: any, { queueName, handler, redis, redisName }) => {
        object[queueName] = new handler(queueName, redis.get(redisName));

        return object;
      },
      {}
    );
  }

  public static get(instance: string) {
    return WorkerManager.instances[instance];
  }
}
