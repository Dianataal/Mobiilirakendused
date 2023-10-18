import React from "react";
import { SafeAreaView } from "react-native";
import Signup from "./src/screens/auth/Signup";

const WEB_CLIENT_ID = ''
const IOS_CLIENT_ID = ''
const App = () => {
  return (
    <SafeAreaView>
      <Signup/>
    </SafeAreaView>
  );
};

export default App;