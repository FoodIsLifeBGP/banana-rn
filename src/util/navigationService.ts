let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(screen, params?) {
	console.log('navigating to', screen);
	navigator.navigate({
		screen,
		params,
	});
}

function goBack() {
	navigator?.goBack();
}

export {
	navigate,
	setTopLevelNavigator,
	goBack,
};
