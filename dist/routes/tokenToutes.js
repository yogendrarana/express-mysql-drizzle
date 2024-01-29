import express from "express";
const router = express.Router();
import * as tokenController from "../controllers/tokenController.js";
// define routes
router.route('/token/refresh').get(tokenController.issuseNewAccessToken);
