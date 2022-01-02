/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { logLevel } from "kafkajs";

import { KafkaInstance } from "./@types/kafka-instance";

export default class KafkaConnector {
  protected static instance: KafkaInstance;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(clientId: string, brokers: string[], _logLevel = logLevel.WARN): KafkaInstance {
    if (!KafkaConnector.instance) {
      KafkaConnector.instance = new KafkaInstance({
        clientId,
        brokers,
        logLevel: _logLevel,
      });
    }

    return KafkaConnector.instance;
  }
}
