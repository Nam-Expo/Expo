import React, { useState } from "react"
import { View, Text } from 'react-native'
import { Button, HelperText } from "react-native-paper"
import { Input } from "../components"
import { login, testNetwork } from '../network'

type LoginFeild = {
    username: string
    password: string
}

const Login = (props: any) => {
    const [error, setError] = useState<string>('')
    const [forum, setForum] = useState<LoginFeild>({
        username: '',
        password: ''
    })

    const loginHandler = () => {
        console.log(forum)
        login(forum).then((res) => {    
            console.log(JSON.stringify(res))
            testNetwork().then(console.log).catch(console.log)
        }).catch(error => {
            setError(error)
        })
    }

    return (
        <View>
            <Input style={{ margin: '20pt'}} name='username' callback={(text) => setForum(prevForum => ({...prevForum, username: text}))}/>
            <Input style={{ margin: '20pt'}} name='password' callback={(text) => setForum(prevForum => ({...prevForum, password: text}))}/>
            <HelperText type="error" visible={(error !== '')}>
                {error}
            </HelperText>
            <Button onPress={loginHandler}>
                <Text>Login</Text>
            </Button>
        </View>
    )
}

export {
    Login
}