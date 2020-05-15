/* eslint-disable import/no-extraneous-dependencies,no-undef */
import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
	withKnobs, text, boolean, number,
} from '@storybook/addon-knobs';
import { Button, Icon, NavBar } from '../../elements';
import CenterView from './CenterView';
import Welcome from './Welcome';


const reactNavigationDecorator = story => {
	const Screen = () => story();
	const Navigator = createAppContainer(createSwitchNavigator({ Screen }));
	return <Navigator />;
};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
	.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
	.addDecorator(withKnobs)
	.add('with text', () => {
		const buttonStyle = {
			default: {
				background: text('background', 'yellow'),
				foreground: text('foreground', 'blue'),
			},
			pressed: {
				background: 'blue',
				foreground: 'pink',
			},
			disabled: {
				background: 'grey',
				foreground: 'white',
			},
		};
		return (
			<Button
				buttonStyle={buttonStyle}
				onPress={() => alert('test')}
			>
				{
					foregroundColor => (
						<Text style={{ color: foregroundColor }}>
								Open Modal
						</Text>
					)
				}
			</Button>
		);
	});

storiesOf('NavBar', module)
	.addDecorator(reactNavigationDecorator)
	.add('NavBar', () => (
		<View>
			<NavBar leftButton="back" />
			<NavBar leftButton="qrCode" />
			<NavBar
				showSelector={true}
				onList={() => { alert(' you clicked List!'); }}
				onMap={() => { alert('you clicked Map'); }}
				position="map"
			/>
		</View>
	), {
		notes: 'https://github.com/FoodIsLifeBGP/banana-rn/wiki/NavBar-Introduction',
	});

