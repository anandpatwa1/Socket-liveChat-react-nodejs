import axios from 'axios'

const api = 'http://localhost:8000/api/otp'

const verifyOtp = async (userEmail) => {
    const res = await axios.post(api + '/verifyOtp' , userEmail)
    // const res = await fetch(api) 
    // if(res.data){
    //     localStorage.setItem('user' , JSON.stringify(res.data))
    // }
    // console.log(res);
    return res.data
}

const loginUser = async (user) => {
    const res = await axios.post(API_URL + '/login', user)
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
}

const authService = {
    verifyOtp,
    loginUser
}

export default authService