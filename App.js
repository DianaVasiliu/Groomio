import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux";
import { NativeBaseProvider } from "native-base";

import ProfileScreen from "./src/screens/Profile";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NativeBaseProvider>
                    <SafeAreaView>
                        <ProfileScreen />
                    </SafeAreaView>
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
}
