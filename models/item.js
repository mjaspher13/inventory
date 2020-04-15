"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "Item name is required",
          },
        },
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Quantity is required",
          },
        },
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Amount is required",
          },
        },
      },
    },
    {}
  );
  Item.associate = function (models) {
    // associations can be defined here
  };
  return Item;
};
