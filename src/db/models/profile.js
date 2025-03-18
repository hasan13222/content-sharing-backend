'use strict';

import { Sequelize } from "sequelize";
import sequelize from "../../dbconfig/database.js";
import User from "./user.js"

const Profile = sequelize.define(
  'Profile',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    occupation: Sequelize.STRING,
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }
  },
  {
    // Other model options go here
  },
);


export default Profile