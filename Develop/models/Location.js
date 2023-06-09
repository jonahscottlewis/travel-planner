const { Model, DataTypes } = require('sequalize');

class Location extends Model {}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequalize,
        modelName: 'location',
    }
)

module.exports = Location;