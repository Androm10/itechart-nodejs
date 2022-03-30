import ILogger from "./ILogger";

class SimpleLogger implements ILogger {

    defaultMessage: string;

    constructor(defaultMessage: string) {
        this.defaultMessage = defaultMessage;
    }

    log(info?: string | Error) {
        console.log(info || this.defaultMessage);
    }

}

export default SimpleLogger;