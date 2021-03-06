const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    position:{
        type:String,
        required: true
    },
    workgroup:{
        type:String,
        required:true
    },
    hiringManager:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    positionPosted:{
        type:Date,
        required:true
    },
    accountLine:{
        type:String,
        required:true
    },
    exempt:{
        type:Boolean,
        required:true
    },
    supervisorStatus:{
        type:Boolean,
        required:true
    },
    visaCard:{
        type:Boolean,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    supervisorName:{
        type:String,
        required:true
    },
    employeeID:{
        type:Number,
        required:true,
        minlength:5,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    requestedDevices:{
        type:String,
        required: false
    },
    devices:{
        type:Array,
        required:false
    },
    cityHallParkingPass:{
        type:Boolean,
        required:true
    },
    requestedSoftware:{
        type: Array,
        required:false
    },
    software:{
        type:String,
        required: false
    },
    notes:{
        type: String,
        required: false
    },
    newEmployee:{
        type:Boolean,
        required: true
    },
    currentEmployee:{
        type:Boolean,
        required:true
    }
});

const Employee = mongoose.model("Employee",employeeSchema);
module.exports = Employee;