import request from "../request";//记得引入进来

export function test() {
    return request({
        method: 'get', url: '/Insu/insurances',
    })
}

export function getAllUser() {
    return request({
        method: 'get', url: '/user/getAllUser',
    })
}

export function getUserById(id) {
    return request({
        method: 'get', url: `/user/info/${id}`,
    })
}

export function addUser(user) {
    return request({
        method: 'post', url: `/user/addUser`, data: user
    })
}