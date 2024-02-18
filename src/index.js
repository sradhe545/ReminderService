const express = require("express");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");


const app = express();

const getServerStarted = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.listen(PORT, async () => {
    console.log(`Server is running on ${PORT} `);
  });
};

getServerStarted()