'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane,{
      foreignKey:'airplaneId',
      as:'airplane_detail'
      })

      this.belongsTo(models.Airports,{
      foreignKey:'departureAirportId',
      as:'departure_Airport'
      })

      this.belongsTo(models.Airports,{
      foreignKey:'arrivalAirportId',
      as:'arrival_Airport'
      })
    }
  }
  flights.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      },

    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },

    departureAirportId : {
      type:DataTypes.STRING,
      allowNull:false},

    arrivalAirportId: {
        type:DataTypes.STRING,
        allowNull:false},

    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false},

    departureTime:{
      type:DataTypes.DATE,
      allowNull:false},

    price: {
      type:DataTypes.INTEGER,
      allowNull:false},

    boardingGate: {
      type:DataTypes.STRING,
      },

    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false}

  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};