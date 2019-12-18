
const mongoose = require("mongoose");
const Schema = mongoose.Schema;const softwareSchema = new Schema({
    Tool:{
        type:String,
        unique: true,
        required: true
    },
    Purpose:{
        type:String,
        required: false
    },
    Status:{
        type:String,
        required:false
    },
    LicenseNumber:{
        type:String,
        required:false
    },
    Manager:{
        type: String,
        required:false
    },
    Administrator:{
        type: Array,
        required: false
    },
    Users:{
        type:Array,
        required:false
    },
    Installer:{
        type:String,
        required:false
    },
    Description:{
        type: String,
        required: false
    },
    Integrations:{
        type:String,
        required:false
    },
    StatusDetails:{
        type:String,
        required:false 
    },
    Vendor:{
        type:String,
        required:false 
    },
    Cost2019:{
        type:String,
        required:false 
    },
    VendorContact:{
        type:String,
        required:false 
    },
    VendorPhone:{
        type:String,
        required:false 
    },
    VendorEmail:{
        type:String,
        required:false 
    },
    VendorDetails:{
        type:String,
        required:false 
    },
    Format:{
        type:String,
        required:false 
    },
    TrainingDetails:{
        type:String,
        required:false 
    },
    Plans:{
        type:String,
        required:false 
    },
    FileManuals:{
        type:String,
        required:false 
    },
    FileContracts:{
        type:String,
        required:false 
    },
    DataLocation:{
        type:String,
        required:false 
    },
    FileOther:{
        type:String,
        required:false 
    },
    DataFormat:{
        type:String,
        required:false 
    },
    Reviewer:{
        type:String,
        required:false 
    },
    InterfaceWebsite:{
        type:String,
        required:false 
    },
    Notes:{
        type:String,
        required:false 
    },
})

const Software = mongoose.model("Software",softwareSchema)
module.exports=Software;