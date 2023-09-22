import React ,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList} from 'react-native';
import CarouselScreen from '../Components/Carousel';
import StarRating from 'react-native-star-rating';
import timingIcon from "../assets/icons8-clock-24.png";
import locationIcon from "../assets/icons8-location-50.png";
import Icon from 'react-native-vector-icons/FontAwesome';


const splitTextIntoLines = (text, wordsPerLine) => {
    const words = text.split(' ');
    const lines = [];

    while (words.length > 0) {
        lines.push(words.splice(0, wordsPerLine).join(' '));
    }

    return lines;
};

const servicesData = [
    { id: 1, name: 'Service 1', price: '$50', image: require('../assets/icons8-car-profile-100.png') },
    { id: 2, name: 'Service 2', price: '$70', image: require('../assets/icons8-car-profile-100.png') },
    { id: 3, name: 'Interior Cleaning', price: '$90', image: require('../assets/icons8-car-profile-100.png') },
    { id: 4, name: 'Car Interior Cleaning', price: '$100', image: require('../assets/icons8-car-profile-100.png') },
    // Add more services as needed
];
const ServiceItem = ({ item, selected, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                styles.serviceItem,
                { borderColor: selected ? 'blue' : 'transparent' },
            ]}
            onPress={() => onPress(item.id)}
        >
            {selected && (
                <Icon
                    name="check"
                    size={20}
                    color="blue"
                    style={styles.checkIcon}
                />
            )}
            <Image source={item.image} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.servicePrice}>{item.price}</Text>
        </TouchableOpacity>
    );
};

const reviewData = [
    {
        id: '1',
        name: 'John Doe',
        rating: 4.5,
        date: 'August 25, 2023',
        reviewText: 'This was a great experience. I would highly recommend this service! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugi' ,
        profileImage: require('../assets/pexels-pixabay-220453.jpg'),
    },
    {
        id: '2',
        name: 'Alice Smith',
        rating: 3.8,
        date: 'August 22, 2023',
        reviewText: 'The service was good, but there\'s room for imprvement. Lorem ipsum dolor sit amet, conseclamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        profileImage: require('../assets/pexels-pixabay-220453.jpg'),
    } ]

const ReviewItem = ({ name, rating, date, reviewText, profileImage }) => {
    return (
        <View style={styles.reviewItem}>
            <View style={styles.profileContainer}>
                <Image source={profileImage} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.ratingContainerTwo}>
                        <Icon name="star" size={20} color="gold" />
                        <Text style={styles.ratingTextTwo}>{rating}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.reviewText}>{reviewText}</Text>
            <View style={styles.bottomBorder} />
        </View>
    );
};


const BookNowScreen = () => {
    const [showFullAbout, setShowFullAbout] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);



    const handlePhoneCall = () => {
        // Implement the logic to initiate a phone call
        console.log('Initiate a phone call to the shop');
    };

    const handleFavorite = () => {

        setIsFavorite(!isFavorite);
        // Implement the logic to handle marking as favorite
        console.log('Toggle favorite for this shop');
    };




    const address = '123 Main S123 Main St, City,123 Main St, City, Country';
    const lines = splitTextIntoLines(address, 5); // Split into lines after 6 words
    const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan dui vel nunc convallis, ac ultricies nisl imperdiet. Curabitur a urna ac erat suscipit sollicitudin. Quisque sit amet elit vitae quam tincidunt tincidunt in eu risus. Vestibulum nec est at justo aliquet malesuada sit amet nec est. Ut non euismod elit. Integer vulputate ultrices dictum. Aliquam tempus ex 
    ut enim tempus, id vestibulum elit malesuada.Lorem ipsum dolor sit amet, consectetur adisce ut placerat orci. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Lectus quam id leo in vitae turpis massa sed. Integer malesuada nunc vel risus. Tortor at risus viverra adipiscing. Cursus vitae congue mauris rhoncus. Velit aliquet sagittis id consectetur purus ut.`;

    const handleServicePress = (serviceId) => {
        const isSelected = selectedServices.includes(serviceId);
        if (isSelected) {
            setSelectedServices(selectedServices.filter((id) => id !== serviceId));
        } else {
            setSelectedServices([...selectedServices, serviceId]);
        }
    };


    return (
        <View style={styles.container}>
                {/* Phone and Favorite Icons */}

            <View style={styles.iconContainerOne}>
                <TouchableOpacity onPress={handlePhoneCall}>
                    <Icon name="phone" size={25} color="navy" style={styles.topIcons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFavorite}>
                    {isFavorite ? (
                        <Icon name="heart" size={25} color="navy" style={styles.topIcons} />
                    ) : (
                        <Icon name="heart-o" size={25} color="navy" style={styles.topIcons} />
                    )}
                </TouchableOpacity>

            </View>


            <ScrollView style={styles.containerScroll}>
            <CarouselScreen />
            <View style={styles.detailsContainer}>
                <View style={styles.shopDetails}>
                    <Text style={styles.shopName}>Sample Shop Name</Text>
                    {lines.map((line, index) => (
                        <Text key={index} style={styles.shopAddress} numberOfLines={3} ellipsizeMode="tail">
                            {line}
                        </Text>
                    ))}

                    <View style={styles.iconContainer}>
                        <Icon name="clock-o" size={14} color="grey" style={styles.icon} />
                        <Text style={styles.shopTiming}>9:00 AM - 6:00 PM</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="map-marker" size={14} color="grey" style={styles.icon} />
                        <Text style={styles.shopDistance}>1.2 miles away</Text>
                    </View>


                </View>

                <View style={styles.ratingAndButtonContainer}>
                    <View style={styles.ratingContainer}>
                    <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={4.5}
                    starSize={16}
                    fullStarColor="#FFD700"
                />
                        <Text style={styles.ratingText}>{4.5}</Text>
                    </View>


                    <TouchableOpacity style={styles.directionButton}>
                        <Text style={styles.directionButtonText}>Get direction</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* About Section */}
            <View style={styles.aboutContainer}>
                <Text style={styles.aboutTitle}>About</Text>
                <Text style={styles.aboutText}>
                    {showFullAbout ? aboutText : aboutText.slice(0, 370)}
                </Text>
                <TouchableOpacity onPress={() => setShowFullAbout(!showFullAbout)}>
                    <Text style={styles.readMore}>
                        {showFullAbout ? 'Read less' : 'Read more'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.servicesContainer}>
                <Text style={styles.servicesTitle}>Services</Text>
                <FlatList
                    data={servicesData}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ServiceItem
                            item={item}
                            selected={selectedServices.includes(item.id)}
                            onPress={handleServicePress}
                        />
                    )}
                    contentContainerStyle={styles.servicesList}
                />
            </View>

            <View style={styles.reviewsContainer}>
                <View style={styles.reviewsHeader}>
                    <Text style={styles.reviewsTitle}>Customer Reviews</Text>
                    <TouchableOpacity onPress={() => console.log('See All Reviews')}>
                        <Text style={styles.seeAllButton}>See All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={reviewData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ReviewItem
                            name={item.name}
                            rating={item.rating}
                            date={item.date}
                            reviewText={item.reviewText}
                            profileImage={item.profileImage}
                        />
                    )}
                />
            </View>

        </ScrollView>


    <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Book Now</Text>
    </TouchableOpacity>
   </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerScroll: {
        flex: 1,
        marginTop:40,
    },
    topIcons:{
        marginRight:10,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

    },
    shopDetails: {
        flex: 1,
    },
    shopName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'black'
    },

    ratingText: {
        fontSize: 14,
        color: 'black',
        marginLeft: 4,
        marginRight:4
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        size:20,
    },
    shopTiming: {
        fontSize: 14,
        color: 'black',
    },
    shopDistance: {
        fontSize: 14,
        color: 'black',
    },
    shopAddress:{
        fontSize:13,
    },

    ratingAndButtonContainer: {
        alignItems: 'flex-end',
        marginTop:10,
    },
    directionButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, // Adjusted shadow opacity
        shadowRadius: 3, // Adjusted shadow radius
        elevation: 3,
    },
    directionButtonText: {
        color: 'navy',
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 5,
    },
    aboutContainer: {
        padding: 20,
        marginTop: -20,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
    },

    iconContainerOne: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
    },

    aboutText: {
        fontSize: 14.5,
        lineHeight: 20,
        marginBottom:2,
        flexDirection:'row'
    },
    readMore: {
        flexDirection:'row',
        color: 'red',
    },
    servicesContainer: {
        padding: 20,
        height: 250, // Set a fixed height
        width:"100%"

    },
    servicesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    servicesList: {
        alignItems: 'center',
    },
    serviceItem: {
        width: 180, // Set a fixed width
        height: 170, // Set a fixed height
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        marginRight: 15,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    serviceImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    serviceName: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
        fontWeight:'bold',
    },
    servicePrice: {
        fontSize: 18,
        color: 'navy',
        fontWeight:'bold'
    },
    reviewsContainer: {
        padding: 20,
        marginTop: 20,
    },
    reviewsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    reviewItem: {
        marginBottom: 20,
    },
    reviewsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    profileContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'black',
    },
    ratingContainerTwo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingTextTwo: {
        marginLeft: 5,
    },
    date: {
        fontSize: 12,
        color: 'grey',
        marginBottom: 5,
    },
    reviewText: {
        fontSize: 14.5,
    },
    bottomBorder: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
    },    seeAllButton: {
        color: 'blue',
    },

    reviewComment: {
        fontSize: 14,
        color: 'black',
    },
    submitButton: {
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto', // Push the button to the bottom
        marginBottom: 16,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BookNowScreen;
