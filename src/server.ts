import app from "./app";
import { Config } from "./config/index";
import logger from "./config/logger";

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => {
      logger.info(`Server running at port: http://localhost:${PORT}`, {
        port: PORT,
      });
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
