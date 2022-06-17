import { StyleSheet } from 'react-native';
import NewReddit from '../components/NewReddit';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Reddit</Text>
      <NewReddit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDC9B5'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
