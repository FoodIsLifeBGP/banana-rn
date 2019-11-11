import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screens/LoginScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';

const MainStack = createStackNavigator({
	LoginScreen,
	DashboardScreen,
	RegistrationScreen,
}, {
	defaultNavigationOptions: {
		header: null,
		gesturesEnabled: false,
	},
	initialRouteName: 'RegistrationScreen',
});

const App = createAppContainer(MainStack);

export default App;