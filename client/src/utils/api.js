import axios from "axios";
export default {

    getEmployees: function () {
        return axios.get("/api/employee");
    },
    getOneEmployee: function (id) {
        return axios.get("/api/employee/" + id);
    },
    addEmployee: function (data) {
        return axios.post("/api/employee", data)
    },
    updateEmployee: function(_id,data){
        return axios.put("/api/employee/"+_id,data)
    },
    getDevice: function(){
        return axios.get("/api/device");
    },
    getOneDevice: function(id){
        return axios.get("/api/device/"+id);
    },
    addDevice: function(data){
        return axios.post("/api/device",data);
    },
    getSoftware: function(){
        return axios.get("/api/software");
    },
    getOneSoftware: function(id){
        return axios.get("/api/software/"+id);
    },
    addSoftware: function(data){
        return axios.post("/api/software",data);
    },
};