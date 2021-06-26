import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text,Alert } from 'react-native';
import { firebase } from './src/firebase/config';
import { connect } from 'react-redux';
import { setUser } from './src/redux/User/userActions';
const f = firebase;
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import { getUserByUID } from './src/firebase/CommonQueries';
import { GenericMessage } from './src/components/GenericMessage';
const mapStateToProps = (state) => ({
  currentUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: () => dispatch(setUser()),
});

const Login = ({ navigation, setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    f.auth().onAuthStateChanged((user) => {
      if (user !== null) {
      }
    });
  }, []);

  const signUpUser = (email, password, name) => {
    try {
      if (password.length < 6) {
        
        GenericMessage('שגיאה','סיסמא חייבת להכיל לפחות 6 תווים')
      }
      f.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (credentials) => {
          const userInRedux = {
            email: credentials.user.email,
            uid: credentials.user.uid,
            name:name,
            isManager: false,
          };

          setCurrentUser(userInRedux);
          await f.firestore().collection('users').doc(credentials.user.uid).set(userInRedux);
          navigation.navigate('HomeStack');
        })
        .catch((err) => GenericMessage('שגיאה',String(err)));
    } catch (err) {
      GenericMessage('שגיאה',String(err))
    }
  };

  const loginUser = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        const theUser = await getUserByUID(user.user.uid);

        const theUserData = theUser.data();

        const userInRedux = {
          email: user.email,
          uid: user.uid,
          name: theUserData.name,
          isManager: true,
        };
        setCurrentUser(userInRedux);
        navigation.navigate('HomeStack');
      })
      .catch((err) => {
        GenericMessage('שגיאה',err)

      });
  };

  return (
    <Fragment>
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>*כתובת מייל</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
            />
          </Item>
          <Item floatingLabel>
            <Label>*סיסמה</Label>
            <Input
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => setPassword(password)}
            />
          </Item>
          <Item floatingLabel>
            <Label>שם</Label>
            <Input
              secureTextEntry={false}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(nameInput) => setName(nameInput)}
            />
          </Item>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => loginUser(email, password)}
          >
            <Text style={{ color: 'white' }}> Login</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => signUpUser(email, password, name)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
