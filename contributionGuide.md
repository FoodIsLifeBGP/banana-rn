# Project Structure Introduction & Contribution Guide

## Structure Overview

```shell
├── App.styles.ts	(*contains global style*)
├── App.tsx 	(*entry point of project*)
├── README.md
├── app.json  (*contains settings for project (e.g. edit `extra->variant` as `client` to switch to client mode))*
├── assets  (*contains image source and font used in application*)
│   ├── documents
│   ├── fonts
│   ├── icon.png
│   ├── icons
│   ├── images
│   └── splash.png
├── babel.config.js	(*babel config file, you may find mapping setting of different modules there (e.g. ./src/elements maps to @elements)*)
├── declarations.d.ts
├── metro.config.js
├── package-lock.json
├── package.json
├── src
│   ├── elements	(*mapped as @element module, contains basic components like button, icon, and navbar*)
│   ├── library	(*mapped as @library module, contains elements that based on basic component and reusable in different screen*)
│   ├── routes	(*contains router logic, check [there](https://reactnavigation.org/docs/4.x/getting-started) for documentations of react-navigation*)
│   ├── screens	(*contains all the application screen*)
│   ├── state	(*encapsulates all the functions related to communication, data processing etc.*)
│   └── util	(*contains all global variables likely to be reused in app (e.g. color scheme)*)
└── tsconfig.json
```

## Common Development Guidance

### How to switch to client side

In `app.json` under root directory, you could see setting below:

``` json
"extra": {
			"variant": "donor"
		}
```

Change it to 

```json
"extra": {
			"variant": "client"
		}
```

to visit client side.

### How to build a component

#### Basic structure of a component

We would use an example of  `Title` as example:

A component should have 3 files. In example of `Title`, a directory called `Title` should be placed under `src->elements` and has structure as below:

```shell
Title
├── Title.styles.ts
├── Title.tsx
└── index.ts
```

- Index.ts (export the component)

  ``` typescript
  import Title from './Title';
  
  export { Title };
  ```

- Title.styles.ts (contains style rules for the component)

  ``` typescript
  import { StyleSheet } from 'react-native';
  import * as colors from '@util/colors';
  
  export default StyleSheet.create({
  	text: {
  		fontFamily: 'open-sans-bold',
  		fontSize: 38,
  		lineHeight: 50,
  		color: colors.NAVY_BLUE,
  	},
  });
  
  ```

- Title.tsx (contains functional React component)

  ``` typescript
  import React from 'react';
  import { View, Text } from 'react-native';
  import styles from './Title.styles';
  
  export default ({ text }: { text: string }) => (
  	<View>
  		<Text style={styles.text}>{text.toUpperCase()}</Text>
  	</View>
  );
  ```

  Note that for more complicated component that needs to receive multiple parameters, we need to define the interface of parameter and apply it into functional component. Below is the example of `ClaimingProgressBar` which presents the claim status of a donation.

  ``` typescript
  import React from 'react';
  import {
  	StyleProp, Text, TextStyle,
  	View,
  } from 'react-native';
  import styles from './ClaimingProgressBar.styles';
  
  //define interface there
  
  interface ClaimingProgressBarProps {
  	width?: number | string;
  	pickedUp: number;
  	reserved: number;
  	left: number;
  	style?: StyleProp<TextStyle>;
  }
  
  // apply interface in parameters of function and set default value
  /**
   * ClaimingProgressBar, basic idea is using flex-grow attribute of element to stretch bars
   * to corresponding proportion
   * @param{width} width for ClaimingProgressBar, default set to 100%
   * @param{pickedUp} number of donations has been picked up
   * @param{reserved} number of donations has been reserved
   * @param{left} number of donations remaining
   * @param{style} style of ClaimingProgressBar
   * */
  export default ({
  	width = '100%',
  	pickedUp,
  	reserved,
  	left,
  	style,
  }: ClaimingProgressBarProps) => {
  	const num2Str = (num, places) => String(num).padStart(places, '0');
  	const total = pickedUp + reserved + left;
  	return (
  		<View style={[ styles.claimProgressBar, { width }, style ]}>
  		/*implementation logic*/
  		</View>
  	);
  };
  
  
  ```

***it's recommended to build a skeleton of a component and add that component to index.ts under `elements`, so you could use it in screen and debug it.***

#### Add component to element module and use it

After you set up the skeleton of you component, export your component in `index.ts` under `elements`.

``` typescript
export { FormTextInput } from './FormTextInput';
export { Header } from './Header';
export { Icon } from './Icon';
export { InputLabel } from './FormTextInput/InputLabel';
export { Button } from './Button';
export { TextButton } from './Button/TextButton';
export { LinkButton } from './LinkButton';
export { SpacerInline } from './SpacerInline';
export { Paragraph } from './Paragraph';
export { Modal } from './Modal';
export { TheAlertModal } from './TheAlertModal';
// add export clause
export { Title } from './Title';
```

After that, you could use your component in screen, as the code below:

``` typescript
import React, { useState } from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { View, Alert, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import useGlobal from '@state';
import {
	Title,
} from '@elements';

export default () => {
	const { navigate } = useNavigation();
	const [ state, actions ] = useGlobal() as any;
	const { userIdentity } = state;
	return (
		<View style={styles.outerContainer}>
			<SpacerInline height={140} />
			<Title text={`I am a ${userIdentity}.`} />
		</View>
	);
};

```

### How to Create a PR and Use PR Templates

@**[jacksonrya](https://github.com/jacksonrya)** provides a PR template [there](https://github.com/FoodIsLifeBGP/banana-rn/pull/49). You could create your PR under this format, and feel free to remove some section if that does not apply to your PR topic.