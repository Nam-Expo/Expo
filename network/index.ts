import { connect } from "./ServerHandler"
import { RequestBuilder } from "./RequestBuilder"
import { LoginUser, User } from "../types";



export const login = (user: LoginUser) => {
    let req = new RequestBuilder()
        .setBody(user)
        .setMethod('POST')
        .setURL('/login')
        .build();

    return connect(req);
}

export const testNetwork = () => {
    let req = new RequestBuilder()
        .setMethod('GET')
        .setURL('/testAuth')
        .build();

    return connect(req);
}

export const signup = (user: User) => {
    let req = new RequestBuilder()
        .setBody(user)
        .setMethod('POST')
        .setURL('/signup')
        .build();

    return connect(req);
}