/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  const Instrument = sequelize.define(
    "Instrument",
    {
      // The email cannot be null, and must be a proper email before creation
      instrument_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  Instrument.associate = models => {
    Instrument.belongsToMany(models.artist, {
      through: "artist_instruments"
    });
  };

  return Instrument;
};
