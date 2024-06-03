import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      router.replace('/WelcomeScreen');
    }
  }, [isReady]);

  return null; // You might render a splash screen or loading indicator here instead of null
};

export default Index;
