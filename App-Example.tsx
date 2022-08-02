import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


/**
 * This application is built in react native, which is a variation of react that is used in the browser
 * 
 * React native lets us use react to build mobile apps
 * 
 * React has 3 main principles, 
 * re-rendering: an event takes place like a click, and the screen needs to be redrawn
 * state: when state changes a re-render happens,
 * 
 * JSX- the view tags <View/> - always return a view tag in a react component, view tags show things on screen, use css to change view
 * 
 * 
 * This system is built on top of alot of software, JSX-> react views, reactViews -> c code, c code to iphone, 'more than that but thats all u need to know
 * 
 * JSX is special syntax for reducing cluttered code
 * 
 * <View/> is equivelnt to React.createElement('View', {}) //technically it reduces to different looking code i just dunno what
 *
 * JSX exists cause <View/> looks nicer than the other
 *
 *
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
     * 
     * because react works in functions, each time the function is called variables will not remember
     * eachother, in order to keep state of a functional component, we use useState(), it returns an array of the 
     * value, and the function to set the state, javascript allows u to define variables like so, let [x, y] = [1,2]
     * now x and y can be called seperataley 
     * 
     */
    const [isClicked, setClicked] = useState<boolean>(false)
    


    const clickHandler = () => {
        // set clicked the opposite from before
        setClicked(!isClicked)
    }


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
