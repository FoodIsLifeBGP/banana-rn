let navigator;

function setTopLevelNavigator(navigatorRef) {
	navigator = navigatorRef;
}

function navigate(name, params?) {
	navigator?.navigate({
		name,
		params,
	});
}

function goBack() {
	navigator?.goBack();
}

export default {
	navigate,
	setTopLevelNavigator,
	goBack,
};
