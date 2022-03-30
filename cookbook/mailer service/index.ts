import App from "./src/App";
import Broker from "./src/amqp/Broker";
import { transport } from "./src/transporter/index";
import config from "./src/config";

const broker = new Broker(config.rabbitURL);
const app = new App(config.queuesToSubcribe, broker, transport);

app.start();
