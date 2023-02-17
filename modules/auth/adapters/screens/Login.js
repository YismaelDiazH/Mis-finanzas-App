import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Button, Image, Icon } from "@rneui/base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { head, isEmpty } from "lodash";
import Loading from "../../../../kernel/components/Loading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function login(props) {
  const {navigation} = props;
  const [error, setError] = useState({email: '', password: ''});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false);
  //const [failSession, setFailSession] = useState(false);
  const auth = getAuth();

  const login = () => {
    if (!(isEmpty(email) && isEmpty(password))) {
      setShow(true);
      setError({email: '', password: ''});
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;    // ...
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
    setShow(false);
    navigation.navigate("userGuestStack");

  })
  .catch((error) => {
    setError({email: '', password: 'usuario o contraseña incorrectos'});
    setShow(false);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setShow(false)
  });


    } else {
      setError({email: 'campo obligatorio', password: 'campo obligatorio'});
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../../../assets/rana.png")}
          resizeMode="contain"
          style={styles.logotype}
        />
        <Input
          placeholder="correo electrónico"
          // labelStyle={{color:'tomato', fontFamily: 14}}
          keyboardType="email-address"
          containerStyle={styles.input}
          onChange={(event) => setEmail(event.nativeEvent.text)}
          errorMessage={error.email}
          autoCapitalize="none"
        />

        <Input
          placeholder="contraseña"
          containerStyle={styles.input}
          onChange={(event) => setPassword(event.nativeEvent.text)}
          secureTextEntry={showPassword}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              color='#007bff'
              onPress={() => setShowPassword(!showPassword)}

            />
          }
          errorMessage={error.password}
        />

        <Button
          title="iniciar sesión"
          icon={
            <Icon
              type="material-community"
              name="login"
              size={22}
              color="#FFF"
            />
          }
          buttonStyle={styles.btnSuccess}
          containerStyle={styles.btnContainer}
          onPress={login}
        />
        <Text
          style={styles.createAccount}
          onPress={() => console.log("vamos")}
        >
          {/* <Icon
            type="material-community"
            name="account-plus"
            color='#28a745'
          /> */}
          !registrate uwu¡
        </Text>
        <Loading show={show} text="iniciando sesión"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    height: "100%",
  },
  logotype: {
    width: "100%",
    height: 150,
    marginTop: 16,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  btnSuccess: {
    color: "#FFF",
    backgroundColor: "#28a745",
  },
  btnContainer: {
    margin: 16,
  },
  createAccount: {
    color: '#007bff'
  },
});
