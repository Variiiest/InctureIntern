import axios from "axios";
const API_URL = "https://leave-application-heroku.herokuapp.com/api/v1/";
const httpclient= axios.create()
httpclient.defaults.timeout= 2000

class LeaveService {


    async leavemanager(){
        const response = await httpclient.get(API_URL +"leavesforManager/");
        return response.data
    }

    leavestatuschange(ID){
        const response =axios.put(API_URL +"changestatusManager/"+ID);
        return response.data
    }

    denyleave(ID){
        const response =axios.put(API_URL +"denyleave/"+ID);
        return response.data
    }


  }
  export default new LeaveService();