import request from "../request";//记得引入进来

export function getAllProduce() {
    return request({
        method: 'get', url: '/Insu/insurances',
    })
}

export function getInsuranceById(id) {
    return request({
        method: 'get', url: `/Insu/insurances/${id}`,
    })
}

export function modifyInsurance(insurance) {
    return request({
        method: "post",
        url: "/Insu/ModifyInsurances",
        data: insurance
    });
}
export function addInsurance(insurance) {
    return request({
        method: "post",
        url: "/Insu/addProduce",
        data: insurance
    });
}
export function deleteInsurance(id) {
    return request({
        method: "get",
        url: "/Insu/deleteInsurance",
        params: {id}
    });
}
