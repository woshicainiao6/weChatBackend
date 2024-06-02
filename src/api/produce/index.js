import request from "../request";//记得引入进来

export function getAllProduce() {
    return request({
        method: 'get',
        url: '/Insu/insurances',
    })
}