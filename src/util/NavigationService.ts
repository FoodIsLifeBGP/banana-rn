// import { NavigationActions } from 'react-navigation';
// import { DrawerActions } from 'react-navigation-drawer';
import { CommonActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/drawer';

let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(routeName, params?) {
	navigator.dispatch(
		CommonActions.navigate({
			name: routeName,
			params,
		}),
	);
}

function goBack() {
	navigator.dispatch(
		CommonActions.goBack(),
	);
}

function toggleDrawer() {
	navigator.dispatch(
		DrawerActions.toggleDrawer(),
	);
}

export default {
	navigate,
	setTopLevelNavigator,
	goBack,
	toggleDrawer,
};
