import { connect } from "./ServerHandler"
import { RequestBuilder } from "./RequestBuilder"
import { LoginUser, User } from "../types";

const address = 'http://10.0.0.234:8080'

export const login = (user: LoginUser) => {
    let req = new RequestBuilder()
        .setBody(user)
        .setMethod('POST')
        .setURL(address + '/login')
        .build();

    return connect(req);
}

export const testNetwork = () => {
    let req = new RequestBuilder()
        .setMethod('GET')
        .setURL(address + '/testAuth')
        .build();

    return connect(req);
}

export const signup = (user: User) => {
    let req = new RequestBuilder()
        .setBody(user)
        .setMethod('post')
        .setURL(address + '/signup')
        .build();

    return connect(req);
}