import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SupportScreen = () => {
  const cards = [
    { title: 'How can we help?', imageUrl: require('../assets/sup.jpg') },
    // Add more cards as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cards.map((card, index) => (
          <View style={styles.cardContainer} key={index}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{card.title}</Text>
            </View>
            <View>
              <Image source={card.imageUrl} style={styles.image} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.centeredTextContainer}>
        <Text style={styles.centeredText}>
          <Text style={styles.emoji}>🚧</Text> Under Construction <Text style={styles.emoji}>🚧</Text>
        </Text>
        <Text style={styles.italicText}>We're working on something awesome! ❤️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D4147',
  },
  scrollViewContent: {
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 5,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 8,
  },
  centeredTextContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  italicText: {
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 8,
  },
  emoji: {
    fontSize: 24,
  },
});

export default SupportScreen;
