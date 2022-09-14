const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "first_name",
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "last_name",
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(30),
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthdayDate: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    field: "birthday_date",
  },
  dni: {
    type: DataTypes.STRING,
  },
  roleId: {
    allowNull: false,
    type: DataTypes.UUID
  }, 
  address: {
    type: DataTypes.STRING,
  },
  profileImage: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
    field: "profile_image",
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "active", //active, non-active, deleted, suspended
  },
  verified: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Users;
