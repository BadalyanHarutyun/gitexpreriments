module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('Messages','type', {
          type: Sequelize.TEXT,
          allowNull: true,
          
        }
  

      );
    },
    down: async (queryInterface, Sequelize) => {
       await queryInterface.removeColumn('Messages', 'type',);
    }
  };