const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.port || 4000,
  host: process.env.host || "localhost",
  mongouri:
    "mongodb+srv://muh_aly:M1u2h3a4@cluster0.dlnki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  mariauri:
    process.env.mariauri || "mysql://root:password@localhost:3306/mydatabase",
  secret: process.env.secret || "StrongSecretKey",
};
export default config;
