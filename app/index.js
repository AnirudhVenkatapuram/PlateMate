import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import useAuth from '../hooks/useAuth';
import IntroScreen from '../app/IntroScreen'

const Index = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isReady, setReady] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowIntro(false);
      setReady(true);
    }, 3000); // Display intro screen for 3 seconds

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  useEffect(() => {
    if (isReady && !showIntro) {
      if(user) {
        router.replace('/HomeScreen');
      } else {
        router.replace('/WelcomeScreen');
      }

    }
  }, [isReady, showIntro]);

  if (showIntro) {
    return <IntroScreen />
  }

  return null; 
};

export default Index;
