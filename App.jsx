import {Image, StyleSheet, Text, View} from 'react-native';
import Form from './src/components/Form';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 40}}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg',
          }}
          style={styles.logo}
        />
        <View style={{alignItems: 'center', marginTop: 18}}>
          <Text style={styles.title}>Login myApp</Text>
          <Text style={styles.subtitle}>
            Get access to your portfolio and more!
          </Text>
        </View>
      </View>
      <Form />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8ecf4',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#4C585B',
    fontSize: 16,
    fontWeight: '400',
  },
});
