import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screens/LoginScreen';
import Dashboard from '../Screens/Dashboard';

const MainStack = createStackNavigator({
	LoginScreen,
	Dashboard,
}, {
	defaultNavigationOptions: {
		header: null,
		gesturesEnabled: false,
	},
	initialRouteName: 'Dashboard',
});

const App = createAppContainer(MainStack);

export default App;