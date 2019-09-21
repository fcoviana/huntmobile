import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
    navigationOptions:{
        headerStyle:{
            backgroundColor: "#0e5dca"
        },
        headerTintColor: "#FFF"
    },
});