"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Profiles", "userId", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Users", // Make sure this is the correct table name
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Profiles", "userId");
  },
};
