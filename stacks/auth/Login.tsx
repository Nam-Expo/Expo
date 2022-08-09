import React, { useState, useMemo } from "react"
import { View, Text } from 'react-native'
import { Button, HelperText } from "react-native-paper"
import { Input } from "../../components"
import { login, testNetwork } from '../../network'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from "../../types"

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

type LoginFeild = {
    username: string
    password: string
}

const Login = (props: Props) => {
    const [response, setResponse] = useState<string>('')
    const [forum, setForum] = useState<LoginFeild>({
        username: 'magnusreeves',
        password: 'Minus12345'
    })

    const loginHandler = () => {
        console.log(forum)
        login(forum).then((res) => {    
            console.log(JSON.stringify(res))
            setTimeout(() => {
                testNetwork().then((response: string) => setResponse(response as string))
            }, 1000)
        }).catch(error => {
            setResponse(error)
        })
    }

    return (
        <View>
            <Input style={{ margin: '20pt'}} name='username' callback={(text) => setForum(prevForum => ({...prevForum, username: text}))}/>
            <Input style={{ margin: '20pt'}} name='password' callback={(text) => setForum(prevForum => ({...prevForum, password: text}))}/>
            <HelperText type="error" visible={(response !== '')}>
                {response}
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