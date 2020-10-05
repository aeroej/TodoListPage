
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('todo_table', {
      task: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      due_date: {
        type: DataTypes.DATE(6),
        allowNull: true,
      },
  
      priority: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    }, {
      timestamps: false,
    });
  };