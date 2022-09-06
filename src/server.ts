import { Server } from "socket.io";
import { app } from "./app";
import { AppDataSource } from "./database";
import { verbose } from "./utils";

const port = process.env.APP_PORT;

app.listen(port, async () => {
  await AppDataSource.initialize();

  verbose.success({
    data: `Server is running on port: ${port}`,
    allowProd: true,
  });
});

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.listen(4001);

io.on("connection", (socket) => {
  verbose.success({ id: "New Socket connection", data: socket.id });
  socket.on("join-room", ({ roomId }) => {
    console.log({ roomId });
  });
});
