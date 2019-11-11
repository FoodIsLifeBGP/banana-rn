import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screens/LoginScreen';
import DashboardScreen from '../Screens/DashboardScreen';

const MainStack = createStackNavigator({
	LoginScreen,
	DashboardScreen,
}, {
	defaultNavigationOptions: {
		header: null,
		gesturesEnabled: false,
	},
	initialRouteName: 'LoginScreen',
});

const App = createAppContainer(MainStack);

export default App;