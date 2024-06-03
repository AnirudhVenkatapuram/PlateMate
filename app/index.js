import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import useAuth from '../hooks/useAuth';

const Index = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {
      if(user) {
        router.replace('/HomeScreen');
      }

      else {
        router.replace('/WelcomeScreen');
      }
      
    }
  }, [isReady]);

  return null; 
};

export default Index;
