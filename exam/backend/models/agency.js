module.exports = (sequelize, DataTypes) => {
  const agency = sequelize.define(
    "agency",
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  agency.associate = function (models) {
    // associations can be defined here
    // agency.hasMany( models.exams , {foreignKey:'agency_id'}) ;
  };
  return agency;
};
