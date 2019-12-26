const Sequelize = require('sequelize')
const Model = Sequelize.Model;
class Employee extends Model {}
Employee.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false
  },
  workgroup: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hiringManager: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  positionPosted: {
    type: Sequelize.DATE,
    allowNull: false
  },
  accountLine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  exempt: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  supervisorStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  visaCard: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  cityHallParkingPass: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  startDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  supervisorName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  employeeID: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  requestedDevices: {
    type: Sequelize.ARRAY
  },
  devices: {
    type: Sequelize.ARRAY
  },
  requestedSoftware: {
    type: Sequelize.ARRAY
  },
  software: {
    type: Sequelize.ARRAY
  },
  notes: {
    type: Sequelize.STRING
  },
  newEmployee:{
    type:Sequelize.Boolean,
    allowNull: false
},
currentEmployee:{
    type:Sequelize.Boolean,
    allowNull:false
}
}, {
  sequelize,
  modelName: 'employee'
  // options
});

export default Employee;