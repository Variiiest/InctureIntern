import axios from 'axios'
const baseUrl = 'https://leave-application-heroku.herokuapp.com/api/v1/'

const getAll = () => {
  return axios.get(`${baseUrl}/employees`)
}

const login = async credentials => {
    const response = await axios.post(`${baseUrl}login`, credentials)
    return response.data
  }
  



const logger= { 
  getAll: getAll, 
  login:login,
}

export default logger