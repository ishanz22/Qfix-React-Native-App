import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Platform
} from "react-native";
import { Formik, useFormikContext } from "formik";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { date } from "yup";
import * as Yup from "yup";

const Booking = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [acMechanics, setAcMechanics] = useState(1);
  const [hours, setHours] = useState(1);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const incrementAcMechanics = () => {
    setAcMechanics(acMechanics + 1);
  };

  const decrementAcMechanics = () => {
    if (acMechanics > 1) {
      setAcMechanics(acMechanics - 1);
    }
  };

  const incrementHours = () => {
    setHours(hours + 1);
  };

  const decrementHours = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };
  const showDatepicker = () => {
    setShowDatePicker(true);
    console.log("show date pressed");
  };

  // Function to handle date selection
  const handleDateChange = (event, selected) => {
    setShowDatePicker(false);
    if (selected) {
      setSelectedDate(selected);
    }
  };

  const handleTimeChange = () => {
    setShowTimePicker(true);
  };

  // Function to handle time change in TimePicker
  const handleTimePickerChange = (event, selected) => {
    setShowTimePicker(false);
    if (selected) {
      setSelectedTime(selected);
      const { handleChange, handleBlur } = useFormikContext();
      handleChange("selectedTime")(formatTime(selected)); // Call formatTime to get formatted time
      handleBlur("selectedTime");
    }
  };

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Formik
          initialValues={{
            fullName: "",
            phoneNumber: "",
            email: "",
            street: "",
            city: "",
            acMechanics: 1, // Initial value for How many A/C Mechanics
            hours: 1,
            selectedDate: "",
            selectedTime,
            jobDescription: "",
          }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string().required("Full Name is required"),
            phoneNumber: Yup.string()
              .required("Phone Number is required")
              .matches(/^\d+$/, "Phone Number must only contain digits"),
            email: Yup.string()
              .required("Email Address is required")
              .email("Invalid Email Address"),
            city: Yup.string().required("City is required"),
            street: Yup.string().required("Street Address is required"),

            jobDescription: Yup.string().required("Issue is required"),
          })}
          onSubmit={(values) => {
            // You can handle form submission here
            console.log(values);
            console.log("Form values:", values);
            console.log("Number of A/C Mechanics:", acMechanics);
            console.log("Number of hours:", hours);
            console.log("date", selectedDate);
            console.log("Time:", formatTime(selectedTime));
            console.log("Issue:", values.jobDescription);
            console.log("Total Value:", acMechanics * 250 + hours * 250);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 23,
                  paddingBottom: 5,
                }}
              >
                Contact Information
              </Text>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "fullName" && styles.selectedInputLabel,
                  ]}
                >
                  Full Name
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    selectedItem === "fullName" && styles.selectedInput,
                  ]}
                  placeholder="Full Name"
                  placeholderTextColor="grey"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  onFocus={() => setSelectedItem("fullName")}
                />
                {errors.fullName && (
                  <Text style={{ color: "#ff3333", fontSize: 13 }}>
                    {errors.fullName}
                  </Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "phoneNumber" && styles.selectedInputLabel,
                  ]}
                >
                  Phone Number
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    selectedItem === "phoneNumber" && styles.selectedInput,
                  ]}
                  placeholder="Phone Number"
                  placeholderTextColor="grey"
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  keyboardType="phone-pad"
                  onFocus={() => setSelectedItem("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <Text style={{ color: "#ff3333", fontSize: 13 }}>
                    {errors.phoneNumber}
                  </Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "email" && styles.selectedInputLabel,
                  ]}
                >
                  Email Address
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    selectedItem === "email" && styles.selectedInput,
                  ]}
                  placeholder="Email Address"
                  placeholderTextColor="grey"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                  onFocus={() => setSelectedItem("email")}
                />
                {errors.email && (
                  <Text style={{ color: "#ff3333", fontSize: 13 }}>
                    {errors.email}
                  </Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "city" && styles.selectedInputLabel,
                  ]}
                >
                  City
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    selectedItem === "city" && styles.selectedInput,
                  ]}
                  placeholder="City"
                  placeholderTextColor="grey"
                  value={values.city}
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  onFocus={() => setSelectedItem("city")}
                />
                {errors.city && (
                  <Text style={{ color: "#ff3333", fontSize: 13 }}>
                    {errors.city}
                  </Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "street" && styles.selectedInputLabel,
                  ]}
                >
                  Street Address
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    selectedItem === "street" && styles.selectedInput,
                  ]}
                  placeholder="Street Address"
                  placeholderTextColor="grey"
                  value={values.street}
                  onChangeText={handleChange("street")}
                  onBlur={handleBlur("street")}
                  onFocus={() => setSelectedItem("street")}
                />
                {errors.street && (
                  <Text style={{ color: "#ff3333", fontSize: 13 }}>
                    {errors.street}
                  </Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "acMechanics" && styles.selectedInputLabel,
                  ]}
                >
                  How many A/C Mechanics
                  {"\n"}
                  <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>
                      Please note: 250 AED for per person.
                    </Text>
                  </View>
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => setSelectedItem("acMechanics")}
                >
                  <View style={styles.acMechanicsContainer}>
                    <View
                      style={{
                        justifyContent: "space-between",
                        width: "100%",
                        flexDirection: "row",
                      }}
                    >
                      <View>
                        <Text style={styles.acMechanicsText}>
                          {acMechanics}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          onPress={decrementAcMechanics}
                          style={styles.circle}
                        >
                          <Ionicons name="remove" size={20} color="#3D4147" />
                        </TouchableOpacity>
                        <Text>{"  "}</Text>
                        <TouchableOpacity
                          onPress={incrementAcMechanics}
                          style={styles.circle}
                        >
                          <Ionicons name="add" size={20} color="#3D4147" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "jobDescription" &&
                      styles.selectedInputLabel,
                  ]}
                >
                  Issue
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    selectedItem === "jobDescription" && styles.selectedInput,
                  ]}
                  placeholder="Eg: Repair, Supply, Installation"
                  placeholderTextColor="grey"
                  value={values.jobDescription}
                  onChangeText={handleChange("jobDescription")}
                  onBlur={handleBlur("jobDescription")}
                  onFocus={() => setSelectedItem("jobDescription")}
                />
                {errors.jobDescription && (
                  <Text style={{ color: "#ff3333", fontSize: 13 }}>
                    {errors.jobDescription}
                  </Text>
                )}
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "hours" && styles.selectedInputLabel,
                  ]}
                >
                  How many hours
                  {"\n"}
                  <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>
                      Please note: 250 AED for per hour.
                    </Text>
                  </View>
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => setSelectedItem("hours")}
                >
                  <View style={styles.acMechanicsContainer}>
                    <View
                      style={{
                        justifyContent: "space-between",
                        width: "100%",
                        flexDirection: "row",
                      }}
                    >
                      <View>
                        <Text style={styles.acMechanicsText}>{hours}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          onPress={decrementHours}
                          style={styles.circle}
                        >
                          <Ionicons name="remove" size={20} color="#3D4147" />
                        </TouchableOpacity>
                        <Text>{"  "}</Text>
                        <TouchableOpacity
                          onPress={incrementHours}
                          style={styles.circle}
                        >
                          <Ionicons name="add" size={20} color="#3D4147" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>

              {/* Date Input */}
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "selectedDate" &&
                      styles.selectedInputLabel,
                  ]}
                >
                  Date
                  <Text style={{ color: "red" }}> *</Text>
                </Text>
                <View style={styles.dateContainer}>
                  <TextInput
                    style={[
                      // Your other styles...
                      { color: "black" },
                    ]}
                    placeholder="Select Date"
                    placeholderTextColor="grey"
                    value={selectedDate.toDateString()} // Format the date as a string before displaying
                    onChangeText={handleChange("selectedDate")}
                    onBlur={handleBlur("selectedDate")}
                    onFocus={() => setSelectedItem("selectedDate")}
                    editable={false}
                  />

                  <TouchableOpacity onPress={showDatepicker}>
                    <Ionicons
                      name="calendar-outline"
                      size={24}
                      color="#3D4147"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "selectedTime" &&
                      styles.selectedInputLabel,
                  ]}
                >
                  Time
                </Text>
                <View style={styles.dateContainer}>
                  <TextInput
                    style={[
                      // Your other styles...
                      { color: "black" },
                    ]}
                    placeholder="Select Time"
                    placeholderTextColor="grey"
                    value={formatTime(selectedTime)}
                    onChangeText={() => {}} // Dummy onChangeText to avoid errors
                    // onBlur={handleBlur("selectedTime")}
                    onBlur={() => {}} // Dummy onBlur to avoid errors
                    onFocus={handleTimeChange}
                    editable={false}
                  />
                  <TouchableOpacity onPress={handleTimeChange}>
                    <Ionicons name="time-outline" size={24} color="#3D4147" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.totalContainer}>
                <View style={styles.totalValueContainer}>
                  <Text style={styles.totalLabel}>
                    {acMechanics}{" "}
                    {acMechanics === 1 ? "AC Mechanic" : "AC Mechanics"}
                  </Text>
                  <Text style={styles.totalValue}>{acMechanics * 250} AED</Text>
                </View>
                <View style={styles.totalValueContainer}>
                  <Text style={styles.totalLabel}>
                    {hours} {hours === 1 ? "Hour" : "Hours"}
                  </Text>
                  <Text style={styles.totalValue}>{hours * 250} AED</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.totalValueContainer}>
                  <Text style={styles.totalLast}>Total </Text>
                  <Text style={styles.totalLast}>
                    {acMechanics * 250 + hours * 250} AED
                  </Text>
                </View>

                <View style={styles.agreementContainer}>
                  <Text style={styles.agreementText}>
                    By placing this Booking, I agree to the
                  </Text>
                  <View>
                    <Text style={styles.linkText}>
                      terms and privacy policies
                    </Text>
                  </View>
                </View>
                <View style={styles.containerBook}>
                <TouchableOpacity    onPress={handleSubmit} style={styles.buttonBook}>
                  <Text style={styles.buttonText}>Place Booking</Text>
                </TouchableOpacity>
              </View>
              </View>

            

            
            </>
          )}
        </Formik>
      </View>

      {/*  */}

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={handleTimePickerChange}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingBottom: 10,
  },
  inputLabel: {
    marginBottom: 3,
    color: "white",
  },
  selectedInputLabel: {
    color: "#FBB92B",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: Platform.OS === "ios" ? 12 : 5,
    paddingHorizontal: 14,
    color: "#3D4147",
    backgroundColor: "white",
    borderRadius: 7,
  },
  selectedInput: {
    borderWidth: 2,
    borderColor: "#FBB92B",
  },
  button: {
    marginTop: 8,
  },
  acMechanicsContainer: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 7,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    justifyContent: "center",
  },
  acMechanicsText: {
    color: "black",
    fontSize: 17,
    marginTop: 2,
  },
  messageContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  messageText: {
    color: "#E07C24",
    fontSize: 13,
    fontStyle: "italic",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 7,
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
  },
  totalContainer: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  totalValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  totalLabel: {
    fontSize: 16,
    color: "#3D4147",
  },
  totalLast: {
    fontSize: 20,
    color: "#3D4147",
    fontWeight: "bold",
  },
  totalValue: {
    fontSize: 16,
    color: "#3D4147",
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#3D4147",
    marginVertical: 10,
  },

  agreementContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  agreementText: {
    fontSize: 12,
    color: "#3D4147",
    textAlign: "center", // Center-align the text
  },
  linkText: {
    fontSize: 12,
    color: "#007BFF",

    marginLeft: 5,
  },
  containerBook: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:10
  },
  buttonBook: {
    width:"100%",
    backgroundColor: "#1B98F5",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Booking;
