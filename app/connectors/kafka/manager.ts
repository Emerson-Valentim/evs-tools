import InstanceManager from "../@types/instance-manager";

import { KafkaInstance } from "./@types/kafka-instance";

import KafkaConnector from "./connector";

export default class KafkaManager extends InstanceManager {
  protected static instances: {
    [key: string]: KafkaInstance;
  };

  public static add(
    kafka: {
      instance: string;
      clientId: string;
      brokers: string[];
    }[]
  ) {
    KafkaManager.instances = kafka.reduce(
      (object: any, { clientId, brokers, instance }) => {
        object[instance] = KafkaConnector.getInstance(clientId, brokers);
        return object;
      },
      {}
    );
  }

  public static get(instance: string) {
    return KafkaManager.instances[instance];
  }
}
