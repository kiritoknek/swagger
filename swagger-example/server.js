const express = require("express");
const app = express();
const port = 3000;
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//abc
const router = require("./router");
app.use(express.json());

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portal API DOCs",
      version: "5.10.0",
      description:
        "This is a apis for **PCN-PORTAL** and documented with Swagger",
      contact: {
        name: "Admin PCN",
        url: "https://swagger.io/specification/",
        email: "admin@pcn.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
    tags: [
      {
        name: "IpAddress",
        description: "IP Address API",
      },
      {
        name: "About",
        description: "About api",
      },
    ],
  },
  apis: ["./router.js"],
};

app.use("/", router);
const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spacs));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
