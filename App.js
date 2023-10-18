import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import Signup from "./src/screens/auth/Signup";

//const WEB_CLIENT_ID = ''
//const IOS_CLIENT_ID = ''

const App = () => {
  useEffect(() => {}, [])
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;