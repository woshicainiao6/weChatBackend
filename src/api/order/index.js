import request from "../request";//记得引入进来

export function getAllOrder() {
    return request({
        method: 'get', url: '/Order/getAllOrder',
    })
}

export function getOrderById(orderId) {
    return request({
        method: 'get', url: '/Order/findOrder', params: {orderId}
    })
}

export function addOrder(order) {
    return request({
        method: 'post', url: '/Order/addOrder', data: order
    })
}
