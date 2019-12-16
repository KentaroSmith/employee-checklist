const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    inventoryNum:{
        type:String,
        unique: true,
        required: true
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
    }
})

const Device = mongoose.model("Device",deviceSchema)
module.exports=Device;