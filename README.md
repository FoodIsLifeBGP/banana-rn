# THE BANANA APP: Donor/Client Apps (React Native/Typescript)

# Installation (Mac/OSX)

Step 0 is to [install the backend](https://github.com/FoodIsLifeBGP/banana-rails).  Follow those instructions to make sure you have everything needed to install this repo (like the Xcode command line tools).

Install Xcode for the iOS simulator.  This takes a while.

- https://developer.apple.com/xcode/

First we install NVM, Node, and the Expo CLI.

Go to your project's root folder in Terminal (`cd ~/Desktop/the-banana-app`) and run:

- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash`
- `nvm --version` (if this doesn't give an error, the previous command worked)
- `nvm install node`
- `npm i -g expo-cli`

Once those are complete, run:

- `git clone https://github.com/FoodIsLifeBGP/banana-rn && cd banana-rn && npm i`

Take note of `app.json` in the root.  This is where we specify whether to compile the donor or client app.

```json
{
  "expo": {
	...
	"extra": {
			"variant": "donor"
		}
  }
}
```

Use `"variant": "client"` to load the app in client mode.  Do not check in your changes to this field.

Now run:
- `expo start` (or `expo r`.  Later, you may want to use `expo r -c` to clear the cache.)

A tab in your web browser will open showing the Expo dashboard.  To open the app in the iOS Simulator, hit the link button marked `open in iOS Simulator`, on the left-hand side of the dashboard.  You can also follow the [Expo docs](https://docs.expo.io/versions/v33.0.0/workflow/up-and-running/#open-the-app-on-your-phone-or) to open the app on your phone, or the Android simulator.

When the app opens, you will see the login screen.  Assuming you are still running the [Rails server](https://github.com/FoodIsLifeBGP/banana-rails) in the background, you can log in with the sample account for your variant:

- email: `donor@donor.com`, password: `donor`
- email: `client@client.com`, password: `client`

or create a new account.

# The rest of The Banana App family:

## [Backend](https://github.com/FoodIsLifeBGP/banana-rails)
## Admin (TBD)

# Contributing

Fork the repo, make your changes on `master`, and submit a PR.  Add all the contributors as reviewers so we are notified.

In order to merge your PR, the code will need to pass linting and typechecking.  The style guide is extended from AirBnB's.  To check your branch before making a pull request, run the following:
- `npm i -g eslint`
- `npm i -g typescript` (>= 3.7.3)  

  - If you are upgrading Typescript in VS Code, make sure to select which TS you're using:
    1. Open a .ts or .tsx file
    2. Locate the "Typescript React" notation in the bottom right of the screen (the blue bar)
    3. Click the version number to the right of that.

Then, you can run
- `npm run lint`
- `npm run typechecking`

from root.  These will give detailed descriptions of any errors. If you want a more verbose output including warnings, run
- `eslint --ext .tsx,.ts,.js .`

Warnings will not prevent a merge.

# Dev notes

## Variant-specific code

Take in `userIdentity` from state (see [State Management](#state-management)).  This will always be either `donor` or `client`.  (The app won't boot otherwise.)

This can be used to change strings - (`${userIdentity === 'donor' ? 'Donations' | 'Claims'}`) - or for more complex logic (conditional elements, split components, or backend routes).

## Editor

If using VS Code, we recommend the following extensions:
- ESLint
- TSLint
- GitLens
- Code Spell Checker

If you are ever having trouble running the app after pulling an update, try
- `npm run reset` (deletes `/node_modules` & `package-lock.json`, runs `npm i`, and deletes `watchman` cache)
- uninstall the Expo app from your device or sim
- run `expo start --clear` (or `expo r -c`)

## Absolute imports

Absolute imports are available for the following folders: `assets`, `elements`, `screens`, `util`, and `state`.  Use the `@` symbol to access them (i.e. `import Component from '@screens/component`).

  - To add more, use examples from and update the relevant fields in: `.eslintrc.js`, `babel.config.js`, `tsconfig.json`
  
TODO: make absolute imports work for the MenuDrawer.  Any new elements should be configured so they can be imported as such:
- `import { NewElement, OldElement } from '@elements';`

## State Management

[useGlobalHook](https://github.com/andregardi/use-global-hook#readme) is a light but powerful (<1kb) state management tool, built on React Hooks.  It's a lot like a simplified version of Redux + Redux-Sagas.  However, it makes no effort to separate the functionally pure Redux from the side-effecty Sagas, if you care about that sort of thing.

There are some excellent usage samples by the author [here](https://codesandbox.io/s/v6zz2nwow5) and [here](https://codesandbox.io/s/wqvykj5497), and a small example below.

- Lives in `@state/index.ts`.  Initial state comes from the helpfully named `initialState` constant.
- Calling the hook returns the `store` array: `[ globalState, globalActions ]`.

### Writing Actions

1. Set `counter: 0` in `initialState`.
2. Create a new file in `@state/actions`, for example `increase.ts`.  (No imports are required.)
3. The hook passes the store to the function when your action is called, so that will always be the first argument in your new action.  Your `store` includes the `setState` function.  The action can be written as below.
```ts
export const increase = async (store, amount) => {
	await store.setState({
		counter: counter + amount,
	});
};
```
4. Import & access the store in your component: 
```ts
const [ globalState, globalActions ] = useGlobal();
```
5. Use as desired.  Example component:
```ts
import useGlobal from '@state';
import { Button } from 'react-native'

const ExampleComponent = () => {
	const [ globalState, globalActions ] = useGlobal();
	return (
		<Button
			onPress={globalState.increase(1)}
		/>
	);
}
```
   - Remember, useGlobalHook takes care of passing the state, so only put what you're updating in the arguments here.

## Icons

We are using the [Elegant Icon Font](https://www.elegantthemes.com/blog/resources/elegant-icon-font) set of icons in this project.  Use this through the `elements/Icon` component.  To add a new icon, go to the link above, and find the one you want next to its HTML code.  Let's say we want the lock icon. We find it with the HTML code `&#x6a;` underneath.

Now open `elements/Icon/fontMap.ts`.  This is a hash in the format `'icon name': <unicode values>`.  Next convert the HTML character to Unicode - from `&#x6a;` to `\u006a`.  To get the unicode value for your character:

   1. Start with `&#x6a;`
   2. Trim `&#x` from the head of the value, and the semicolon from the tail.  You now have `6a`
   3. Add zeros on the left side until your string is 4 characters long.  This gives you `006a`
   4. Now add the unicode marker `\u` to the head: `\u006a`.  Done!

Here's another example of a Unicode conversion with a larger value.  The same process is followed, this is just included for  clarity.

   1. Start with `&#xe000;`
   2. Trim `&#x` from the head of the value, and the semicolon from the tail.  You now have `e000`
   3. You already have 4 characters, so no need to add zeros.
   4. Add `\u` to the head: `\ue000`.

Give your icon a name (`lock`)for a key, and use the Unicode as the value:

`lock: '\ue000',`

Now you can use this icon by using the key in the Icon component's `name=` prop:

`<Icon name="lock" style={styles.icon}>`

The style defaults to `color: 'white', fontSize: 50`, and the component can be passed a custom `style` prop to override.

## Environment variables

The variant field in `app.json/expo/extra` is used to set some psuedo-environment variables.  These values are then immediately loaded into state, so they're only to be used before state is initialized.  That is to say, hopefully you will never have to use them.  But if you do:
- `import getEnv from '@util/environment';`
- in body: `const { NEW_VARIABLE } = getEnv();`
