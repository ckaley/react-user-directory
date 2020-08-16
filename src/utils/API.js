// Import Dependencies
import axios from "axios";

// Get all Employees 
export default{ 
    getUsers:function(){    

        return axios.get("https://randomuser.me/api/?results=100&nat=us");
    }
};