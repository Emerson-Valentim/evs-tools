/* eslint-disable @typescript-eslint/no-unused-vars */
export default abstract class InstanceManager {
  protected static add(..._: any[]): any {
    throw new Error("Method not implemented");
  }

  protected static get(..._any: any[]): any {
    throw new Error("Method not implemented");
  }
}
