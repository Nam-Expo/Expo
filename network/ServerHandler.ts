import { Requestor } from "./RequestBuilder"
import axios, { AxiosError } from "axios"

interface ErrorCodesADT {
    [key: number | string]: string
    
}

const ErrorCodes: ErrorCodesADT = Object.freeze({
    500: 'Internal Error',
    501: 'Expired Token',
    502: 'Bad Token',
    503: 'Bad Login',
    504: 'Account Exists',
    505: 'Unauthorized Access',
    550: 'Exists',
    551: 'Expired Token',
    552: 'Bad Token',
    553: 'Bad Login',
    554: 'Account does not match jwt',
    555: 'Unauthorized Access',
    590: 'unknown'
})

export const connect = (requestor: Requestor) => {
    return new Promise((resolve, reject) => {
        let obj = requestor.toObject()

        fetch(obj.url, {
            method: obj.method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj.body)
        })
            .then(response => {
                //console.log(response)
                resolve(response.json())
            })
            .catch((error) => {   
                console.log(error)
                reject(
                    ErrorCodes.hasOwnProperty(error.status as string) ?
                    ErrorCodes[error.status as string] :
                    'unknown'
                )
            })
    })
}
