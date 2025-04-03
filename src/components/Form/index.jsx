import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const {width} = Dimensions.get('window');

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Must be email format!')
      .required('Email is a required field!'),
    password: Yup.string()
      .required('Password is a required field!')
      .min(6, 'Min 6 characters!')
      .max(14, 'Max 14 characters!'),
  });

  return (
    <View>
      <Formik
        validationSchema={validationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm();
        }}>
        {({handleChange, handleSubmit, errors, values}) => (
          <View style={{width, gap: 32}}>
            <View style={{width: '90%', marginHorizontal: 'auto', gap: 4}}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                inputMode="email"
                placeholder="test@example.com"
                autoCapitalize="none"
                style={[
                  styles.inputControl,
                  errors.email && {borderWidth: 1, borderColor: '#e52020'},
                ]}
              />
              {errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
            </View>
            <View style={{width: '90%', marginHorizontal: 'auto', gap: 4}}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                placeholder="*******"
                autoCapitalize="none"
                style={[
                  styles.inputControl,
                  errors.password && {borderWidth: 1, borderColor: '#e52020'},
                ]}
              />
              {errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;

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
  errorMessage: {
    color: '#e52020',
    fontSize: 12,
    fontWeight: '700',
  },
});
