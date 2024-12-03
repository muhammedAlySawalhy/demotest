const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.port || 3000,
  host: process.env.host || "localhost",
  mongouri:
    "mongodb://muh_aly:M1u2h3a4@123@cluster0.ulf93yo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  mariauri:
    process.env.mariauri || "mysql://root:password@localhost:3306/mydatabase",
  secret: process.env.secret || "StrongSecretKey",
};
export default config;
