import { JobsOptions, Queue } from "bullmq";
import { Redis } from "ioredis";

import { WorkerInstance } from "./@types/worker-instance";

export class WorkerHandler<JobPayload> {
  private connection: Redis;
  private queueName: string;
  private queue: WorkerInstance;

  constructor(queueName: string, connection: Redis) {
    this.queueName = queueName;
    this.connection = connection;

    this.queue = new Queue(this.queueName, { connection: this.connection });
  }

  public async add(data: JobPayload, options?: JobsOptions) {
    await this.queue.add(this.queueName, data, options);
  }
}
