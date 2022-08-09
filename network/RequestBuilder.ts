import { notNull } from "./Validations";

type Req = { url: string, method: string, body: any }
type Method = "POST" | 'GET'

export class Requestor {
    url: string;
    method: string;
    body: any;
    
    constructor(url: string, method: string, body: any) {
        let args = {
            url, method, body
        }
        
        notNull(args)

        this.url = url
        this.method = method
        this.body = body
    }

    toObject(): Req {
        return {
            url: this.url,
            method: this.method,
            body: this.body
        }
    }
}

export class RequestBuilder {
    url: string | undefined;
    method: string | undefined;
    body: any | undefined;

    constructor() {
        this.url = undefined
        this.method = undefined
        this.body = undefined
    }

    setURL(url: string) {
        this.url = url
        return this
    }

    setMethod(method: Method) {
        this.method = method
        return this
    }

    setBody(body: any) {
        this.body = body
        return this
    }

    build(): Requestor {
        return new Requestor(
            this.url as string,
            this.method as string,
            this.body as any,
        )
    }
}