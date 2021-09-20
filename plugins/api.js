let url = 'http://localhost:5000/'
let api = async (vue, cb) => {

    let client   = vue.$store.state.client
    let isclient = vue.hasOwnProperty('routeMeta') && vue.routeMeta.hasOwnProperty('client') && vue.routeMeta.client
    
    // Verificar token de sesión
    let post = { key: '_s_token' }

    if (isclient) {
        post = {
            key    : '_c_token',
            client : client.uuid
        }
    }

    let token = await vue.$axios.post('/_c_token', vue.$qs.stringify(post))
    token = token ? token.data.token : ''
    
    return cb(vue.$axios.create({
        baseURL: url,
        headers: {
            common: {
                'Accept'         : 'application/json',
                'x-token-access' : token,
                'x-client'       : client.uuid
            },
            post: {
                'Content-Type': 'application/x-www-form-urlencoded, multipart/form-data'
            }
        },
        validateStatus(status) {
            return status < 500
        }
    }))
}

let http = (vue, cb) => {
    return cb(vue.$axios.create({
        baseURL: url,
        headers: {
            common: {
                'Accept': 'application/json'
            },
            post: {
                'Content-Type': 'application/x-www-form-urlencoded, multipart/form-data'
            }
        },
        validateStatus(status) {
            return status < 500
        }
    }))
}

export {api, http}