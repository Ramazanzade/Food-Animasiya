import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import appcss from './src/main/appcss'
import AsyncStorage from '@react-native-async-storage/async-storage'
const App = () => {

  const [clickCount, setClickCount] = useState(0);
  const [storedImages, setStoredImages] = useState([]);

  const renderImages = () => {
    const images = [];

    for (let i = 0; i < clickCount; i++) {
      function getRandomDegree() {
        return Math.floor(Math.random() * 360);
      }
      const imageStyle = {
        transform: [{ rotate: `${getRandomDegree()}deg` }],
      };
      images.push(
        <View key={i} style={{ width: 10, height: 10, margin: '5%', display: 'flex' }}>
          <Image
            source={require('./src/asset/Imge/Gobelek.png')}
            style={[appcss.img2, imageStyle]}
          />
        </View>
      );
    }

    return images;
  }

  const storeData = async () => {
    const imagesData = renderImages().map((image, index) => ({
      key: index,
      source: './src/asset/Imge/Gobelek.png',
      style: image.props.style,
    }));

    try {
      await AsyncStorage.setItem('imge', JSON.stringify(imagesData));
      console.log(imagesData, 'salam1');
    } catch (e) {
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);
  const retrieveData = async () => {
    try {
      const key = 'imge';
      const value = await AsyncStorage.getItem(key);

      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setStoredImages(parsedValue); // Set the retrieved images in state
        console.log(parsedValue, 'asa');
      }
    } catch (e) {
      console.log(e);

    }
  };
  const handlePress = () => {
    if (clickCount <= 59) {
      setClickCount(clickCount + 1);
      storeData()
    }
    console.log(`Clicked ${clickCount} times`);
  }
  return (
    <View style={appcss.view}>
      <View>
        <View style={appcss.imgview}>
          <Image
            // source={require('./src/asset/Imge/Pizza.png')}
            style={appcss.img}
          />
        </View>
        <View style={appcss.view2}>
          {storedImages.map((image, index) => (
            <View key={index} style={{ width: 10, height: 10, margin: '5%', display: 'flex' }}>
              <Image
                source={require('./src/asset/Imge/Gobelek.png')} // Use the source from the retrieved data
                style={[appcss.img2]}
              />
            </View>
          ))}

        </View>
      </View>
      <TouchableOpacity style={appcss.touc} onPress={() => handlePress()} >
        <Image
          source={require('./src/asset/Imge/Gobelek.png')}
          style={appcss.img1}
        />
      </TouchableOpacity>
    </View>
  )
}

export default App