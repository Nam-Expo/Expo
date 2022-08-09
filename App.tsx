import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './stacks/auth'
import AppLoading from "expo-app-loading";
import { testAuthentication, testNetwork } from './network';
import { AuthenticationProvider, AuthContext } from './contexts/AuthContext';


const StackManager = () => {
    const { loggedIn, setLoggedIn } = useContext(AuthContext)

    return (
        <>
            <StatusBar
                backgroundColor="#61dafb"
            />
            <NavigationContainer>
                {loggedIn ? (
                    <></>
                ) : (
                    <AuthenticationStack/>
                )}
            </NavigationContainer>
        </>
    )
}

export default function App() {
    const [loading, setLoading] = useState<boolean>(true)
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <>
            {loading ? (
               <AppLoading
                    startAsync={async () => {
                        await Promise.all([
                            new Promise<void>((resolve) => {
                                testAuthentication().then(() => {
                                    setLoggedIn(true)
                                    resolve()
                                }).catch(() => { 
                                    setLoggedIn(false)
                                    resolve()
                                })
                            })
                        ])
                    }}
                    onFinish={() => {
                        setLoading(false)
                    }}
                    onError={(error) => console.log(error)}
                />
            ) : (
                <AuthenticationProvider loggedIn={loggedIn}>
                    <StackManager/>
                </AuthenticationProvider>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
