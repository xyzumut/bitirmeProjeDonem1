const baseURL = 'http://127.0.0.1:8000/api'

const loginAuthUserAPI = async (username , password) => {

    let response = null
    console.log('username',username)
    await fetch(baseURL+`/user?username=${username}&password=${password}`,{
        headers:{
            'Accept':'application/json',
        }
    }).then(res => res.json())
    .then(data => {response = data})
    .catch(e => console.log(e))

    return response
}

const getColumnDatasAPI = async () => {

    let response = null
    await fetch(baseURL+'/column',{
        headers:{
            'Accept':'application/json',
        }
    }).then(res => res.json())
    .then(data => {response = data})
    .catch(e => console.log(e))

    return response
}

export{
    loginAuthUserAPI,
    getColumnDatasAPI
}