import { WorkerManager } from "./worker";
import { RedisManager } from "./redis";
import { SocketManager, SocketInstance } from "./socket";
import { KafkaManager, KafkaInstance } from "./kafka";

export const Managers = {
  SocketManager,
  WorkerManager,
  KafkaManager,
  RedisManager
};

export const Instances = {
  SocketInstance,
  KafkaInstance
};
