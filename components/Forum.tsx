import React, { useEffect, useMemo, useState } from "react"
import { HelperText, TextInput } from 'react-native-paper';
import { StyleProp, ViewStyle, View } from "react-native"

const Input = ({ style, name, callback }: { style?: StyleProp<ViewStyle>, name: string, callback: (text: string) => any }) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [timer, setTimer] = useState<NodeJS.Timeout>()

    useMemo(() => {
        if(value !== ''){
            if(timer) clearTimeout(timer)

            setTimer(setTimeout(() => {
                let error = callback(value)
                if(error){
                    setError(error)
                }
            }, 500))
        }
    }, [value])

    return (
        <View style={style}>
            <TextInput 
                label={name}
                value={value}
                onChangeText={setValue}
            />
            <HelperText type="error" visible={(error !== '')}>
               {error}
            </HelperText>
        </View>
    )
}


export {
    Input
}
   
/*

 */