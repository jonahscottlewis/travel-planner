const { Model, DataTypes } = require('sequalize');

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequalize,
        modelName: 'traveller',
    }
);

module.exports = Trips;