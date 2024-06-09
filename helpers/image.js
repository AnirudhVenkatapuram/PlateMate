import { Image } from 'react-native';

// Standard Image component
export const CachedImage = (props) => {
  const { uri } = props;
  return <Image source={{ uri }} {...props} />;
};