import { StatusBar } from 'expo-status-bar';
import React, { useState, useMemo } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Login } from './screens/Auth';
import { testNetwork } from './network'

export default function App() {
    const [isClicked, setClicked] = useState<boolean>(false)

    useMemo(() => {
        testNetwork()
            .then(console.log)
            .catch((error) => console.log(error))
    },[])

    return (
        <SafeAreaView>
            <Login />
        </SafeAreaView>
   
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
