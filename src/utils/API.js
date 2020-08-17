// Import Dependencies
import axios from "axios";
const numRecords = 200;
const resultsFilter = "picture,name,phone,email,dob,id";

// Get all Employees and limit result set to 200
export default{ 
    getUsers:function(){    
        return axios.get("https://randomuser.me/api/?results="+ numRecords + "&nat=us&inc=" + resultsFilter);
    }
};