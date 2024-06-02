import request from "../request";//记得引入进来

export function getAllOrder() {
    return request({
        method: 'get',
        url: '/Order/getAllOrder',
    })
}