import React, { useState, useEffect } from "react";
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
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword, AuthCredential,onAuthStateChanged } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";



const validationSchema = Yup.object().shape({
  username:Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginScreen = () => {
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("MainContainer");
      } else {
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const navigation = useNavigation();
  const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      showPassword: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const credentials = {
        email: values.username,
        password: values.password,
      };

      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Logged in successfully");
          navigation.replace("MainContainer");
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    },
  });




  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
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
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={formik.handleChange("username")}
            onBlur={formik.handleBlur("username")}
            value={formik.values.username}
          />
          <Icon name="person-outline" size={20} color="gray" style={styles.icon} />
        </View>

        <View style={{alignSelf:'flex-start'}}>
        {formik.touched.username && formik.errors.username ? (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        ) : null}
              </View>
              <Text>{' '}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={!formik.values.showPassword}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
          />

          <TouchableOpacity
            onPress={() => formik.setFieldValue("showPassword", !formik.values.showPassword)}
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name={formik.values.showPassword ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={{alignSelf:'flex-start'}}>
        {formik.touched.password && formik.errors.password ? (
          <Text  style={styles.errorText}>{formik.errors.password}</Text>
        ) : null}
             </View>
        <TouchableOpacity style={styles.forgotPass} onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={formik.handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't you have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace("signup")}>
            <Text style={styles.registerLink}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFB923" />
      </View>
    );
  }


  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          {renderContent()}
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.container}>
          {renderContent()}
        </View>
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
  icon: {
    marginRight: 5,
    padding: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;