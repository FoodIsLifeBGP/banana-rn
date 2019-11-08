import { NavigationActions } from 'react-navigation';

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

export default {
	navigate,
	setTopLevelNavigator,
	goBack,
};
