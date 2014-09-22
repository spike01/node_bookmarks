
module.exports = function (sequelize, DataTypes) {

  var Link = sequelize.define('Link', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    timestamps: false
  });
 
  return Link;
};
