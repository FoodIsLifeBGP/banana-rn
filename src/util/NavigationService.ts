import { NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(routeName, params?) {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	);
}

function goBack() {
	navigator.dispatch(
		NavigationActions.back(),
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
