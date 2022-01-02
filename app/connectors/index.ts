import { WorkerManager } from "./worker";
import { SocketManager, SocketInstance } from "./socket";
import { KafkaManager, KafkaInstance } from "./kafka";

export const Managers = {
  SocketManager,
  WorkerManager,
  KafkaManager
};

export const Instances = {
  SocketInstance,
  KafkaInstance
};
