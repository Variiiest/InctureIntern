import axios from "axios";
const API_URL = "https://leave-application-heroku.herokuapp.com/api/v1/";
const httpclient= axios.create()
httpclient.defaults.timeout= 2000

class Hrservice {


    async leavehr(){
        const response = await httpclient.get(API_URL +"leavesforHR/");
        return response.data
    }

    leavestatuschange(ID){
        const response =axios.put(API_URL +"changestatusHR/"+ID);
        return response.data
    }

    denyleave(ID){
        const response =axios.put(API_URL +"denyleave/"+ID);
        return response.data
    }


  }
  export default new Hrservice();