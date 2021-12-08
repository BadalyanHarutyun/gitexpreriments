module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('Users','photo', {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        }
  

      );
    },
    down: async (queryInterface, Sequelize) => {
       await queryInterface.removeColumn('Users', 'photo',);
    }
  };