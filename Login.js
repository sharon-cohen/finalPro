import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { firebase } from './src/firebase/config';
import { connect } from 'react-redux';
import { setUser } from './src/redux/User/userActions';
const f = firebase;
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import { getUserByUID } from './src/firebase/CommonQueries';
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
      if (user != null) {
      }
    });
  }, []);

  const signUpUser = (email, password, name) => {
    try {
      if (password.length < 6) {
        alert('Please enter atleast 6 characters');
        return;
      }
      f.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (credentials) => {
          const user = {
            email: credentials.user.email,
            name,
          };

          const userInRedux = {
            email: credentials.user.email,
            uid: credentials.user.uid,
            name,
            isManager: false,
          };

          setCurrentUser(userInRedux);
          await f.firestore().collection('users').doc(credentials.user.uid).set(userInRedux);
          navigation.navigate('HomeStack');
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
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
        alert(err);
      });
  };

  const signOutUser = async () => {
    try {
      await f.auth().signOut();
    } catch (e) {
      console.log(e);
    }
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
