const { Model, DataTypes } = require('sequalize');

class Traveller extends Model {}

Traveller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequalize,
        modelName: 'traveller',
    }
)

module.exports = Traveller;