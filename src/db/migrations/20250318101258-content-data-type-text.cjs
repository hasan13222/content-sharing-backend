module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Contents", "content", {
      type: Sequelize.TEXT, 
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Contents", "content", {
      type: Sequelize.STRING(255),
      allowNull: true,
    });
  },
};
