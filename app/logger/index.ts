export class CLogger {

  public static log(message: unknown, skipStringify = false) {
    CLogger.console("log")(CLogger.getMessage(message, skipStringify));
  }

  public static error(message: unknown, skipStringify = false) {
    CLogger.console("error")(CLogger.getMessage(message, skipStringify));
  }

  public static warn(message: unknown, skipStringify = false) {
    CLogger.console("log")(CLogger.getMessage(message, skipStringify));
  }

  public static info(message: unknown, skipStringify = false) {
    CLogger.console("info")(CLogger.getMessage(message, skipStringify));
  }

  private static console(method: "log" | "error" | "warn" | "info") {
    // eslint-disable-next-line no-console
    return console[method];
  }

  private static getMessage(message: unknown, skipStringify: boolean) {
    return skipStringify ? message : JSON.stringify(message);
  }
}