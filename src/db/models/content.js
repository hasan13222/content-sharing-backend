'use strict';
import { Sequelize } from "sequelize";
import sequelize from "../../dbconfig/database.js";
import User from "./user.js"

const Content = sequelize.define(
  'Content',
  {
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    content: { type: Sequelize.TEXT, allowNull: false },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
    }
  },
  {
    // Other model options go here
  },
);

export default Content;

