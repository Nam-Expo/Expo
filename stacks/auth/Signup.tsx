import React, { useState, useMemo, useContext } from "react"
import { View, Text } from 'react-native'
import { Button, HelperText } from "react-native-paper"
import { Input } from "../../components"
import { signup, testNetwork } from '../../network'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList, User } from "../../types"
import { AuthContext } from "../../contexts/AuthContext"
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group"

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;
type SignupFeild = User

const radioButtonsData: RadioButtonProps[] = [{
    id: '1',
    label: 'user' ,
    value: 'user' 
}, {
    id: '2',
    label: 'server',
    value: 'server'
}, {
    id: '2',
    label: 'company',
    value: 'company'
}]


const Signup = (props: Props) => {
    const { setLoggedIn } = useContext(AuthContext)
    const [response, setResponse] = useState<string>('')
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    const [forum, setForum] = useState<SignupFeild>({
        email: 'magnusreeves@rogers.com',
        username: 'magnusreeves',
        password: 'Minus12345',
        type: 'user'
    })

    const onPressRadioButton = (radioButtonsArray: RadioButtonProps[]) => {
        setRadioButtons(radioButtonsArray);
    }

    const signupHandler = () => {
        signup(forum).then((res) => {    
            setLoggedIn(true)
        }).catch(error => {
            setResponse(error)
        })
    }

    return (
        <View>
            <Input style={{ margin: '20pt'}} name='email' callback={(text) => setForum(prevForum => ({...prevForum, email: text}))}/>
            <Input style={{ margin: '20pt'}} name='username' callback={(text) => setForum(prevForum => ({...prevForum, username: text}))}/>
            <Input style={{ margin: '20pt'}} name='password' callback={(text) => setForum(prevForum => ({...prevForum, password: text}))}/>
            <Input style={{ margin: '20pt'}} name='password' callback={(text) => setForum(prevForum => ({...prevForum, password: text}))}/>
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={onPressRadioButton} 
                layout='row'
            />
            <HelperText type="error" visible={(response !== '')}>
                {response}
            </HelperText>
            <Button onPress={signupHandler}>
                <Text>Signup</Text>
            </Button>
        </View>
    )
}

export {
    Signup
}