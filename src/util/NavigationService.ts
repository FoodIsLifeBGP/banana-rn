import { CommonActions, DrawerActions } from '@react-navigation/native';

let navigator;

function setTopLevelNavigator(navigatorRef) {
	console.log('setTopLevelNavigator');
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
		console.log(DrawerActions.toggleDrawer()),
	);
}

export default {
	navigate,
	setTopLevelNavigator,
	goBack,
	toggleDrawer,
};
