interface IVerboseProps {
  data: unknown;
  id?: string;
}

const isDev = process.env.MODE === "development";

interface ILoggerProps extends IVerboseProps {
  title: string;
  isError?: boolean;
}

const titles = {
  log: "[👀 DEV-LOG] =>",
  error: "[❌ DEV-ERROR] =>",
  success: "[✅ DEV-SUCCESS] =>",
  warning: "[⚠️  DEV-WARN] =>",
};

const logger = (props: ILoggerProps) => {
  if (!isDev) return;

  const { title, id, data, isError } = props;

  const message = `${title} ${id ? id : ""}:`;

  if (isError) return console.error(message, data);

  return console.log(message, data);
};

const verbose = {
  error: (props: IVerboseProps) =>
    logger({ ...props, title: titles.error, isError: true }),
  log: (props: IVerboseProps) => logger({ ...props, title: titles.log }),
  success: (props: IVerboseProps) =>
    logger({ ...props, title: titles.success }),
  warn: (props: IVerboseProps) => logger({ ...props, title: titles.warning }),
};

export { verbose };
