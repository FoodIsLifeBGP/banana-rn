import React from 'react';
import { ScrollView } from 'react-native';

interface ScrollContainerProps {
  onScrollToEnd: Function,
  style: Object;
  children: Object;
}

export default function ScrollContainer({
  onScrollToEnd,
  style,
  children,
}: ScrollContainerProps) {
  
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  return (
    <ScrollView
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          onScrollToEnd();
        }
      }}
      style={style}
      scrollEventThrottle={400}
    >
      {children}
    </ScrollView>
  );
}
