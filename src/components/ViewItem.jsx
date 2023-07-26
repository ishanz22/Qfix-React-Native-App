import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IMAGES = ['image1', 'image2', 'image3', 'image4', 'image5'];

const ViewItem = () => {
  const [selectedImage, setSelectedImage] = useState('image1'); // Set 'image1' as the default selected image.

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      <Image
        source={getImageSource(selectedImage)}
        style={styles.mainImage}
      />

      <View style={styles.row}>
        {IMAGES.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageClick(image)}>
            <Image
              source={getImageSource(image)}
              style={[
                styles.thumbnail,
                selectedImage === image ? { opacity: 1 } : { opacity: 0.5 } // Dim the non-selected images
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const getImageSource = (imageName) => {
  switch (imageName) {
    case 'image1':
      return require('../assets/package/mini-cost.png');
    case 'image2':
      return require('../assets/ac.png');
    case 'image3':
      return require('../assets/Electrical-removebg.png');
    case 'image4':
      return require('../assets/plumbing-removebg.png');
    case 'image5':
      return require('../assets/Pest-removebg.png');
    default:
      return require('../assets/package/bronze.png'); // Default image in case of invalid imageName
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
  },
  mainImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
});

export default ViewItem;
