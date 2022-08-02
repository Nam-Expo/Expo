export type AccountType = 
    'user' | 'server' | 'company'

export type LoginUser = {
    username: string
    password: string
}

export type User = {
    email: string
    username: string
    password: string
    type: AccountType
}