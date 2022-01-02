import { Admin, Logger, Producer } from "kafkajs";

import { KafkaInstance } from "./@types/kafka-instance";

export default class KafkaHandler {

  constructor(protected kafka: KafkaInstance) {}

  public async getProducer(): Promise<Omit<Producer, "connect">> {
    const producer = await this.kafka.producer();
    await producer.connect();
    return producer;
  }

  public async getAdmin(): Promise<Omit<Admin, "connect">> {
    const admin = await this.kafka.admin();
    await admin.connect();
    return admin;
  }

  public getLogger(): Logger {
    return this.kafka.logger();
  }
}