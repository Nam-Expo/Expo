import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/**
 * The root function
 * 
 * this is the starting point for all rendered components
 * 
 * each full re-render starts here 
 * 
 * however sub components can re-render themselves without re-rendering itself
 * 
 * 
 * 
 * @returns JSX views
 * 
 * 
 */
export default function App() {




    /**
     * The return 
     * this returns a set of jsx views
     * 
     * each Green html tag is actually a function call, anything placed within jsx is passed to the method signatures as children
     * 
     * 
     */
    return (
        <View style={styles.container}> {/**  the view tag, you can call components in here*/}
            <Text>Open up App.tsx to start working on your app!</Text>
            <Title name='Welcome to nam'>
                <Text>Start here</Text>
            </Title>
        </View>
    );
}

//typescript type, this gives 'types' to javascript objects, like an interface in java
type TitleADT = {
    children: React.ReactNode
    name: string
}

/**
 * 
 * This is a jsx component
 * 
 * to call this function in a view, use <Title />
 * 
 * to pass data to the 'props', do this <Title name={'Welcome to nam'}></Title> or <Title name={'Welcome to nam'}/>
 * 
 * in the props object, children can be passed with this
 * <Title name={'Welcome to nam'}>
 *  <Text>Jerry</Text>
 * </Title>
 * 
 * here: props.children = <Text>Jerry</Text> // anything passed wihtin the opening and closing brace is the child property of props
 * 
 * 
 * @param props: of type TitleADT
 */
function Title(props: TitleADT){
    let name = props.name

    /** 
     * 
     * in this example, the Title function returns a view, with the name prop at the top, then all children below
     * 
     */
    return(
        <View> {/** inorder to write javascript within a jsx tab, we write all code within { } */}
            {name} 
            {props.children}
        </View>
    )
}


/**
 * 
 * 
 * In plain terms, the app function returns some views, as well as the Title view, which returns some views, the 
 * full rendered tree of this example looks like
 * 
 * 
 *  <View style={styles.container}> 
 *      <Text>Open up App.tsx to start working on your app!</Text>
 *      <Title name='Welcome to nam'>
 *          <Text>Start here</Text>
 *      </Title>
 *  </View>
 * 
 * ---------->>>> becomes
 * 
 * 
 * <View style={styles.container}> 
 *      <Text>Open up App.tsx to start working on your app!</Text>
 *      <View>
 *          Welcome to nam
 *          <Text>Jeff</Text>
 *      </View>
 *  </View>
 * 
 */



/**
 * CSS styles for each jsx component, define how the jsx tab should look when presented to screen
 * 
 * example
 * 
 * <View style={styles.container}></View>
 * 
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
