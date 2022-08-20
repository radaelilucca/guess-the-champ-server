import { app } from "./app";
import { verbose } from "./utils";

const port = process.env.APP_PORT;

app.listen(port, () => {
  verbose.success({
    data: `Server is running on port: ${port}`,
  });
});
