import { Requestor } from "./RequestBuilder"
import axios, { AxiosError, AxiosResponse } from "axios"
import { clearItem, saveItem, getItem } from "../storage/local"
import { Cookie } from "../types"

const address = 'http://192.168.2.223:8080'

interface ErrorCodesADT {
    [key: number | string]: string    
}

const ErrorCodes: ErrorCodesADT = Object.freeze({
    500: 'Internal Error',
    501: 'Expired Token',
    502: 'Bad Token',
    503: 'Bad Login',
    504: 'Account does not Exists',
    505: 'Unauthorized Access',
    550: 'Exists',
    551: 'Expired Token',
    552: 'Bad Token',
    553: 'Bad Login',
    554: 'Account does not match jwt',
    555: 'Unauthorized Access',
    590: 'unknown'
})

export const connect = (requestor: Requestor): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        let request = requestor.toObject()
    
        let cookie = await getItem('auth')
        let header = {
            ...((cookie) ? { 
                "Cookie": cookie
            } : {}),
            "Content-Type": "application/json"
        }

        axios({
            method: request.method,
            url: address + request.url, 
            data: request.body,
            headers: header
        })
            .then((response: AxiosResponse )=> {
                console.log("response", response)
                let SetCookie = response.headers["Set-cookie"]
            
                if(SetCookie){
                    saveItem('auth', SetCookie)
                }
                resolve(response.data)
            })
            .catch((error) => {   
                console.log(error)
                //@ts-ignore
                let code = error.toJSON().status
                clearItem('auth')
                reject(
                    ErrorCodes.hasOwnProperty(code) ?
                    ErrorCodes[code] :
                    'unknown'
                )
            })
    })
}

const cookieParser = (cookieHeader: string): Cookie => {
 
    // Get each individual key-value pairs
    // from the cookie string
    // This returns a new array
    let pairs = cookieHeader.split(";");

    // Separate keys from values in each pair string
    // Returns a new array which looks like
    // [[key1,value1], [key2,value2], ...]
    let splittedPairs = pairs.map(cookie => cookie.split("="));


    // Create an object with all key-value pairs
    const cookieObj: Cookie = splittedPairs.reduce((obj, cookie) => {
        //@ts-ignore
        obj[cookie[0].trim()] = cookie[1].trim();

        return obj;
    }, {} as Cookie)

    return cookieObj;
}