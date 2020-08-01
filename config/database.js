module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "ec2-54-197-254-117.compute-1.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d70m5ju8r96jh0"),
        username: env("DATABASE_USERNAME", "ptalmtcptcrkzk"),
        password: env(
          "DATABASE_PASSWORD",
          "d475909d992294ed49f27701ed90b7f8216a3760208b47abd5d2e313d0f2d18f"
        ),
      },
      options: {
        ssl: false,
      },
    },
  },
});
