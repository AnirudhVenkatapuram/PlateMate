import { NavigationContainer } from 'expo-router';
import Index from './index'; // Assuming Index is imported here

const App = () => {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
};

export default App;
