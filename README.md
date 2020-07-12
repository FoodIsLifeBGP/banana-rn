# BANANA APP: Donor/Client Apps (React Native/Typescript)

Banana App is an open-source, not-for-profit project of The Be Good Foundation.  We can reduce hunger by simplifying food donation.  We make it easy for grocery stores and restaurants to donate good food that would otherwise be disposed of.  Users will be able to find active donations, view the business's food rating, and claim a portion.

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

# Installation (Windows)

**SETTING UP CODE ENVIRONMENT FOR WINDOWS**

1) Go to [this website](https://github.com/coreybutler/nvm-windows) and follow the instructions for installing Node Version Manager for Windows 

***NOTE: This is necessary as the Banana app uses an older version of Node. This is also very convenient as it will let you switch between previous (or current) versions of Node depending on which project you're working on.***

2) To confirm installation, open up your Command Prompt and run `nvm --version` and it should return the version of your NVM and a list of its usage.

3) Once that's done, run `nvm install node@12.10.0` (Banana App's config are compatible with Node version <= 12.10.0) and Agree to all the prompts to complete installation.

4) Run `nvm use 12.10.0` to make sure that your machine is using Node version 12.10.0. [NOTE: Run `nvm list` to see all the versions of Node that your NVM know and you can use the same command `nvm use [version]` to switch].

5) Run `npm i -g expo-cli` to enable expo cli globally.

6) Make sure you've traversed to the right directory (most likely Desktop) and run `git clone https://github.com/FoodIsLifeBGP/banana-rn && cd banana-rn && npm i`


**SETTING UP ANDROID SIMULATOR**

1) Download the latest version of Android Studio [here](https://developer.android.com/studio/) and complete the installation. No other configurations needed.

2) Once downloaded, open Android Studio and a little start up box should open. Go to the bottom right corner of that box and find "Configure" and select SDK manager.

3) Under `Appearance & Behavior > System Settings > Android SDK settings` and SDK Platforms tab. Make sure you have Android 10.0 (Q) and Android 9.0(Pie) checked (also feel free to check  other Android versions, all up to your preference).

4) Under the same settings / page, but on the SDK Tools Tab, Make sure you have Google Play and Android SDK Platform-Tools services checked and leave the rest untouched.

5) Click "Apply" and "OK" to exit out.

6) On the start up box, click on "Configure" one more time and select "AVD Manager". This AVD Manager shows you the list of Android emulators you have ready.

7) To create a new device, simply click on "Create Virtual Device" at the bottom left.

8) Select what kind of device you'd like to work with, but Pixel 2 does the job well and click "Next".

9) Select which system image you want on the device. Simply hit the "Download" button next to the name and wait for it. Once downloaded, select it and hit "Next".

10) Verify all the configurations (name, startup orientation, etc.) and click "Finish" when done.

11) The configuration box will close, and your new device should appear on your list of Virtual Devices. Select your choice, and click the green button under the "Actions" tab over on the right side of the window to launch the emulator.

# Additional notes about environment

Take note of `app.config.js` in the root.  This is where we specify whether to compile the donor or client app.  
You can most easily switch between donor and client by creating a `.env` file in the project root and adding an entry
for APP_VARIANT e.g. `APP_VARIANT=client` this way you can make this change locally without editing a file that's under
git control.  

```javascript
export default ({ config }) => ({
	...config,
	extra: {
		ipAddress: process.env.IP_ADDRESS,
		variant: process.env.APP_VARIANT ? process.env.APP_VARIANT : 'donor',
		storybook: process.env.STORYBOOK ? process.env.STORYBOOK === 'true' : false,
	},
});
```
However, please be aware that values in `.env` values sometimes get cached by babel, the plugin we use to 
substitute those values.  If you change the variant or ip address in your `.env` file and don't see that change reflected
when you run expo, try `BABEL_DISABLE_CACHE=1 && expo r -c` or removing the file in `USER_HOME/.babel.json` if it exists.


Now run:
- `expo start` (or `expo r`.  Later, you may want to use `expo r -c` to clear the cache.)

A tab in your web browser will open showing the Expo dashboard.  To open the app in either iOS or Android Simulator, hit the link button marked `open in iOS/Android Simulator`, on the left-hand side of the dashboard.  You can also follow the [Expo docs](https://docs.expo.io/versions/v33.0.0/workflow/up-and-running/#open-the-app-on-your-phone-or) to open the app on your phone, or the Android simulator.

When the app opens, you will see the login screen.  Assuming you are still running the [Rails server](https://github.com/FoodIsLifeBGP/banana-rails) in the background, you can log in with the sample account for your variant:

- email: `donor@donor.com`, password: `donor@123`
- email: `client@client.com`, password: `client@123`

or create a new account.

###Backend Choices
- `environments.ts` controls what rails server the app will try to talk to.
- The default is an AWS server running the latest [banana rails](https://github.com/FoodIsLifeBGP/banana-rails) from the `prealpha/main` branch.
- If you would like to talk to a different rails server (most likely your own in the event you have changes you want to test), create a file called
`.env` in your project root and add `IP_ADDRESS=<your internal network ip>` to the file (you can also change the variant to client in the `.env` file.

**Possible gotchas for new developers**
- If you elect to use your web browser to test your changes, Firefox may just render a blank page.  Switching to 
another browser should resolve the issue.  

- If you run into an error like this:
```
error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.

Metro Bundler process exited with code 1
Error: Metro Bundler process exited with code 1
    at ChildProcess.<anonymous> (C:\@expo\xdl@56.2.7\src\Project.ts:1804:16)
    at Object.onceWrapper (events.js:300:26)
    at ChildProcess.emit (events.js:210:5)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12)
error Command failed with exit code 1.
```
Try to update the expo package `npm install -g expo-cli`
Or try switching node versions (`12.10.0 => 12.9.0`)

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

This can be used to change strings - (`${userIdentity === 'donor' ? 'Donations' | 'Claims'}`) - or for bigger features (conditional/split components, backend routes, etc).

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
- Calling the hook returns the `store` array: `[ state, actions ]`.

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
const [ state, actions ] = useGlobal();
```
5. Use as desired.  Example component:
```ts
import useGlobal from '@state';
import { Button } from 'react-native'

const ExampleComponent = () => {
	const [ state, actions ] = useGlobal();
	return (
		<Button
			onPress={state.increase(1)}
		/>
	);
}
```
   - Remember, useGlobalHook takes care of passing the state, so only put what you're updating in the arguments here.

## Environment variables

The variant field in `app.json/expo/extra` is used to set some psuedo-environment variables.  These values are then immediately loaded into state, so they're only to be used before state is initialized.  That is to say, hopefully you will never have to use them.  But if you do, they live in `/src/util/environment.ts`.  The API URL root also lives here.
- `import getEnv from '@util/environment';`
- in body: `const { NEW_VARIABLE } = getEnv();`

## Icons

The icon system enables dynamically colored icons for mobile, and statically rendered icons for browser.
The [Icon component](https://github.com/FoodIsLifeBGP/banana-rn/tree/master/src/elements/Icon) ensures consistent usage of the each icon/icon pairs.

```tsx
import { Icon } from '@/elements';
...
<Icon name="arrowDown" color="pink" size={24} />
```

### Adding new icons

Any new SVG icons will have to follow some standards in order to work with the icon system.

1. Convert all open paths with stroke to closed paths without stroke.
   - Use a 'Stroke to Path' feature in a vector editing software.
   - This ensures that the 'fill' attribute is the only variable to change in order to alter icon colors.
2. Only one dynamic color per icon.
   - If an icon has more than one color (e.g. [NavBar icons with red notification dots](https://github.com/FoodIsLifeBGP/banana-rn/blob/master/assets/icons/ICON_BELL-ON.svg)), the non-color-dynamic SVG elements must have a fill attribute set to their static color.
   - Any color-dynamic parts of the icon _must not_ have a fill attribute. They will inherit the root element's fill color. `<path fill="red" ... />`
3. The root element, `<svg fill="#000000" ... >`, must have a fill color.
   - In order for static rendering to work, a fill color must be provided to the SVG root element.
   - This fill color is overwritten with JS.
4. Be wary of declaring presentation attributes within a `style` attribute. These cannot be overwritten.

#### 'Animated' Icons

Some icons need to seamlessly replace each other in order to simulate animation.

Note: The term **Base icon** means the main part of the icon versions that don't change. Think the hamburger menu lines, not the red notification dot. 

1. Viewbox dimensions must envelope all SVG versions of the icon.
2. Each icon version must share the same viewbox dimensions.
3. The icon versions might need to be offset or given alternate dimensions.
    - In order for asymetrical icon groups to be positioned properly (i.e. centered), offset distances and dimension scaling ratios should be provided within the Icon component in order for the 'base icon' to be present properly.

## SVGs

SVGs are imported differently depending on if the build is for mobile or browser.

In ***mobile device*** bundling, SVGs are imported as dynamic React Components.

```ts
import { SvgImage } from '@assets/image.svg';
...
<SvgImage ... />
```

In ***browser*** webpacking, SVGs are imported as static URIs (e.g. server assets path, data blob URI, etc.).

```ts
import { SvgImage } from '@assets/image.svg';
...
<Image source={SvgImage} ... />
```

```ts
import { SvgImage } from '@assets/image.svg';
import { Platform } from 'react-native';
...
if (Platform.os === 'web') {
	<Image source={SvgImage} ... />
} else {
	<SvgImage ... />
}
```
