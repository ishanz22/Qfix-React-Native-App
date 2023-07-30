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
} from "react-native";
import { Formik, useFormikContext } from "formik";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { date } from "yup";

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
          }}
          onSubmit={(values) => {
            // You can handle form submission here
            console.log(values);
            console.log("Form values:", values);
            console.log("Number of A/C Mechanics:", acMechanics);
            console.log("Number of hours:", hours);
            console.log("date", selectedDate);
            console.log("Time:", formatTime(selectedTime));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                <Text style={{ color: "red" }}> *</Text>
              </Text>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "fullName" && styles.selectedInputLabel,
                  ]}
                >
                  Full Name
                  <Text style={{ color: "red" }}> *</Text>
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
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "phoneNumber" && styles.selectedInputLabel,
                  ]}
                >
                  Phone Number
                  <Text style={{ color: "red" }}> *</Text>
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
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "email" && styles.selectedInputLabel,
                  ]}
                >
                  Email Address
                  <Text style={{ color: "red" }}> *</Text>
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
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "city" && styles.selectedInputLabel,
                  ]}
                >
                  City
                  <Text style={{ color: "red" }}> *</Text>
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
              </View>
              <View style={styles.inputContainer}>
                <Text
                  style={[
                    styles.inputLabel,
                    selectedItem === "street" && styles.selectedInputLabel,
                  ]}
                >
                  Street Address
                  <Text style={{ color: "red" }}> *</Text>
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
                  <Text style={{ color: "red" }}> *</Text>
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
              <Button
                onPress={handleSubmit}
                title="Submit"
                style={styles.button}
              />
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
    paddingVertical: 5,
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
});

export default Booking;
