import axios from 'axios'

const link = "http://localhost:5000"

export const axiosBase =  axios.create({
    baseURL:link
})