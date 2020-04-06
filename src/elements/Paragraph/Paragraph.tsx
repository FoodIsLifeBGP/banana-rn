import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import styles from './Paragraph.styles';

interface ParagraphProps {
	emphasized?: boolean;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({
	emphasized,
	children,
}) => {
	const style = emphasized
		? [ styles.paragraphText, styles.emphasizedParagraphText ]
		: [ styles.paragraphText ];
	return <Text style={style}>{children}</Text>;
};

export default Paragraph;
