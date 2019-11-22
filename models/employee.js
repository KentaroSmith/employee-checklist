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
        minlength:6
    },
    email:{
        type:String,
        required:true
    },
    devices:{
        type:Array,
        required:false
    },
    cityHallParkingPass:{
        type:Boolean,
        required:true
    },
});

const Employee = mongoose.model("Employee",employeeSchema);
module.exports = Employee;