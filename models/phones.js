const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    imei:{
        type:Number,
        unique: true,
        required: true
    },
    phoneNumber:{
        type:String,
        unique: true,
        required: false
    },
    sim:{
        type:Number,
        unique:true,
        required:true
    },
    dateBought:{
        type:Date,
        required: false
    },
    dateRetired:{
        type:Date,
        required:false
    },
    workGroup:{
        type:String,
        required:false
    },
    assigned:{
        type: Boolean,
        required:true
    },
    assignedTo:{
        type: String,
        required: false
    },
    active:{
        type:Boolean,
        required:true
    },
    dataPlan:{
        type:Boolean,
        required:true
    },
    notes:{
        type: String,
        required: false
    },
    type:{
        type:String,
        required:true
    },
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    }
})

const Device = mongoose.model("Device",deviceSchema)
module.exports=Device;