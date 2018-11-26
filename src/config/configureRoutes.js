import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

export default createStackNavigator({
    Login: {
        screen : LoginScreen,
        navigationOptions: {
            title: 'Login'
        }
    },
    Home: {
        screen: HomeScreen
    }

});