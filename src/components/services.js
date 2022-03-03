import axios from 'axios'
const baseUrl = 'https://leave-application-heroku.herokuapp.com/api/v1/'

const getAll = () => {
  return axios.get(`${baseUrl}/employees`)
}

const logger= { 
  getAll: getAll, 
}

export default logger