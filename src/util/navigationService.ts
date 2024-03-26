// TODO: this may be obsolete
import { DrawerActions } from '@react-navigation/native';

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

function toggleDrawer() {
  navigator?.dispatch(DrawerActions.toggleDrawer());
}

export {
  navigate,
  setTopLevelNavigator,
  toggleDrawer,
  goBack,
};
