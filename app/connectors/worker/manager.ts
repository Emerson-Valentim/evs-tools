import InstanceManager from "../@types/instance-manager";
import RedisManager from "../redis/manager";

import { WorkerHandler } from "./handler";

export default class WorkerManager extends InstanceManager {
  protected static instances: {
    [key: string]: WorkerHandler<unknown>;
  };

  public static add(
    queues: {
      queueName: string;
      redisName: string;
      redis: typeof RedisManager;
    }[]
  ) {
    WorkerManager.instances = queues.reduce(
      (object: any, { queueName, redis, redisName }) => {
        object[queueName] = new WorkerHandler(queueName, redis.get(redisName));

        return object;
      },
      {}
    );
  }

  public static get(instance: string) {
    return WorkerManager.instances[instance];
  }
}
