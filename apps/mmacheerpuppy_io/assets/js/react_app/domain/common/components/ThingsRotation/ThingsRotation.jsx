import React, { useState } from 'react';
import './animations.css';

const bruteForceNewIndex = (arr, currentIndex, lastIndex = currentIndex) => {
  if (currentIndex === lastIndex) {
    return bruteForceNewIndex(arr, Math.floor(Math.random() * arr.length), lastIndex);
  }
  return currentIndex;
};

export default function ThingsRotation(props) {
  const [selectedThing, selectThing] = useState(0);
  const { things, style, color } = props;
  setTimeout(() => {
    selectThing(bruteForceNewIndex(things, selectedThing));
  }, 7500);
  return (
    <span
      key={things[selectedThing]}
      style={{ ...style, color }}
      className="animated animatedFadeInUp fadeInUp"
    >
      {things[selectedThing]}
    </span>
  );
}
