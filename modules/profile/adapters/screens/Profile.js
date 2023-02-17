import { StyleSheet, Text, View } from "react-native";
import React,{useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Profile() {
  const auth = getAuth();
  conts [user, setUser] = useState(null);//si esta o no logueado el usuario
  useEffect(()=>{
    (async()=>{

    })()
  onAuthStateChanged(auth, (userCredential) => {
    if (userCredential) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(true)
    } else {
    }
  });
  }, [/*Si es true, se vuelve a ejecutar use effect*/])

    if(user === null) return <Loading/>//mientras user no tenga nada, se muestra loading
    return user ? <UserLogged/> : <UserGuest/>

}

const styles = StyleSheet.create({});
