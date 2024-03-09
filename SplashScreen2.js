import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timeout); // Limpia el temporizador cuando el componente se desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/animations/splash.json')}
        autoPlay
        loop={false}
        style={styles.animation}
        onAnimationFinish={() => navigation.replace('Home')} // Redirección al terminar la animación
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 400,
    height: 400,
  },
});

export default SplashScreen;
