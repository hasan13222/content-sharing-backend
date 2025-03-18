import { Sequelize } from "sequelize";
import config from "../app/config/index.js";

const sequelize = new Sequelize(config.database_url);

export default sequelize
