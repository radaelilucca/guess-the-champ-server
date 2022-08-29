import { app } from "./app";
import { AppDataSource } from "./database";
import { verbose } from "./utils";

const port = process.env.APP_PORT;

app.listen(port, async () => {
  await AppDataSource.initialize();

  verbose.success({
    data: `Server is running on port: ${port}`,
  });
});
