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
    getDevice: function(){
        return axios.get("/api/device");
    },
    getOneDevice: function(id){
        return axios.get("/api/device/"+id);
    },
    addDevice: function(data){
        return axios.post("/api/device",data);
    },
};