import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, iconSize = 20 }) => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
        let iconName = 'star-o'; // Outline star by default
        if (i <= rating) {
            // Fill the star if the index is less than or equal to the rating
            iconName = 'star';
        }
        starIcons.push(<Icon key={i} name={iconName} size={iconSize} />);
    }

    return <View style={{ flexDirection: 'row' }}>{starIcons}</View>;
};

export default StarRating;
