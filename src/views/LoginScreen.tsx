import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword, AuthCredential } from "firebase/auth";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  useEffect(() => {
   const unsubscribe=  auth.onIdTokenChanged(user=>{
      if(user){
        navigation.replace("MainContainer");
      }
    })
    return unsubscribe
  }, [])
  

  const handleLogin = () => {
    const credentials: AuthCredential = {
      email: username,
      password: password,
    };

    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in successfully");
    
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const renderContent = () => {
    return (
      <>
        <View style={styles.titleContainer}>
          <Image
            source={require("../assets/qlogo.png")}
            style={styles.loginIcon}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="grey"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Icon
            name="person-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Icon
            name="lock-outline"
            size={20}
            color="gray"
            style={styles.icon}
          />
        </View>
        <TouchableOpacity
          style={styles.forgotPass}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.registerLink}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {renderContent()}
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.container}>{renderContent()}</View>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#3D4147",
    height: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    
  },
  input: {
    flex: 1,
    height: 45,
    color: "white", // Set the text color to white
    fontSize: 16,  

  },
  icon: {
    marginRight: 5,
  },
  forgotPass: {
    width: "100%",
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: "grey",
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  registerText: {
    color: "grey",
    marginRight: 5,
  },
  registerLink: {
    color: "#FFB923", // Change this color to your preference
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#FFB923", // Change this color to your preference
    borderRadius: 15,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#3D4147",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
    paddingBottom: 60,
  },
  loginIcon: {
    width: 180,
    height: 88,
  },
});

export default LoginScreen;
