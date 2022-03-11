import axios from "axios";
const API_URL = "https://leave-application-heroku.herokuapp.com/api/v1/";
const httpclient= axios.create()
httpclient.defaults.timeout= 25000

class AuthService {
  async login(email,password) {
    const response = await axios
          .post(API_URL + "login", {
      email, password
          });
          console.log(response)
      if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    }
    logout() {
      localStorage.removeItem("user");
    }
    register(name, email, password) {
      return axios.post(API_URL + "register", {
        name,
        email,
        password
      });
    }
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user'));;
    }
    

    async leaveapplied(ID){
    const response = await httpclient.get(API_URL +"appliedleaves/"+ID);
    return response.data
    }

    applyleave(ID,type, description){
        const response = axios.put(API_URL +"applyleave/"+ID,{type, description} );
        return JSON.parse(response.data)
    }

    async leavestatus(LID){
        const response = await axios.get(API_URL +"leave/"+LID);
        return response.data
    }

  }
  export default new AuthService();