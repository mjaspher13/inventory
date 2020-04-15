'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};