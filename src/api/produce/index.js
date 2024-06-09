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
