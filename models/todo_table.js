
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('todo_table', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
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

      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      del_flag: {
        type: DataTypes.BOOLEAN,
      }
    }, {
      timestamps: false,
    });
  };