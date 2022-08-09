import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types';
import { Login } from './Login'
import { Signup } from './Signup';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthenticationStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}