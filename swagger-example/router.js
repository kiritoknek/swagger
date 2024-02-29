// Importing necessary modules
const express = require("express");

// Creating a router instance
const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     IpAddress:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - ipaddress
 *       properties:
 *         id:
 *           type: string
 *           description: The id of the address
 *         name:
 *           type: string
 *           description: The name of the address
 *         ipaddress:
 *           type: string
 *           description: The data of the address
 *         eas:
 *           type: array
 *           description: The eas of the address
 *
 */

/**
 * @swagger
 * /ipaddresses:
 *   get:
 *     tags:
 *      - IpAddress
 *     description: Get list address
 *     operationId: getListIP
 *     responses:
 *       200:
 *         description: Get success list ipAddress
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IpAddress'
 */
router.get("/ipaddresses", (req, res) => {
  const hardData = [
    {
      id: 1000,
      name: "ip1",
      ipaddress: "1.0.0.1",
      eas: [],
    },
    {
      id: 1001,
      name: "ip2",
      ipaddress: "1.0.0.2",
      eas: [],
    },
  ];
  res.send(hardData);
});

/**
 * @swagger
 * /about:
 *   get:
 *     tags:
 *      - About
 *     description: Welcome message
 *     operationId: getAbout
 *     responses:
 *       200:
 *         description: Returns a welcome message
 */
router.get("/about", (req, res) => {
  res.send("About us page");
});
// Exporting the router to be used in other files
module.exports = router;
