import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';

const FormikYup = () => {
  const {width} = Dimensions.get('window');

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values}) => (
          <View style={{width, gap: 32}}>
            <View style={{width: '90%', marginHorizontal: 'auto', gap: 4}}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                inputMode="email"
                placeholder="test@example.com"
                autoCapitalize="none"
                style={styles.inputControl}
              />
            </View>
            <View style={{width: '90%', marginHorizontal: 'auto', gap: 4}}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                placeholder="*******"
                autoCapitalize="none"
                style={styles.inputControl}
              />
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormikYup;

const styles = StyleSheet.create({
  inputControl: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontSize: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: '#1b56fd',
    width: '90%',
    marginHorizontal: 'auto',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginTop: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
