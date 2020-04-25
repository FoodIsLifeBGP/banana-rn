import styles from '@elements/NavBar/Selector.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import React, { useState } from 'react';

interface SelectorProps {
	position: 'map'|'list';
	onMap: () => any;
	onList: () => any;
}
export default (({ position, onMap, onList }: SelectorProps) => {
	const [ page, setPage ] = useState(position);
	return (
		<View style={styles.selectorContainer}>
			<TouchableOpacity
				style={[
					styles.selector,
					page === 'map' ? styles.selectorSelected : {},
				]}
				onPress={() => {
					setPage('map');
					onMap && onMap();
				}}
			>
				<Text style={
					page === 'map' ? styles.textSelected : styles.text
				}
				>
					map
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[
					styles.selector,
					page === 'list' ? styles.selectorSelected : {},
				]}
				onPress={() => {
					setPage('list');
					onList && onList();
				}}
			>
				<Text style={
					page === 'list' ? styles.textSelected : styles.text
				}
				>
					list
				</Text>
			</TouchableOpacity>
		</View>
	);
});

