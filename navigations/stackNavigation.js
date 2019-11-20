import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {LoginScreen} from '../screens/loginScreen';
import {SignupScreen} from '../screens/signupScreen';

const AppStackNavigator=createStackNavigator(
    {
    Login:LoginScreen,
    Signup:SignupScreen
    },{
        initialRouteName:"Login"
    }
)

export default createAppContainer(AppStackNavigator);