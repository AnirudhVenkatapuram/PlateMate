import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/WelcomeScreen');
  }, []);

  return null;
};

export default Index;
