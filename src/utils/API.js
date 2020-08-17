// Import Dependencies
import axios from "axios";
const numRecords = 100;
const resultsFilter = "picture,name,phone,email,dob,id";

// Get all Employees and limit result set to 100
export default{ 
    getUsers:function(){    
        return axios.get("https://randomuser.me/api/?results="+ numRecords + "&nat=us&inc=" + resultsFilter);
    }
};