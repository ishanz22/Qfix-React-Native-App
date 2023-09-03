import { registerRootComponent } from 'expo';
import { StripeProvider } from "@stripe/stripe-react-native";

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const MYAPP = (
  <StripeProvider publishableKey="pk_test_51NX0FJCpIfsOZ2tJnMEKddWEWDd48gsnet8jpNwlQo9zGVQG8IxVhqNV36qbMDipLqJ5ep8wXNVxRMxG9TMUBqi500bJh3ponx">
    <App />
  </StripeProvider>
);
registerRootComponent(MYAPP);
