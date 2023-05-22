import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux";
import { NativeBaseProvider } from "native-base";
import Navigator from "./src/navigation";

import "./src/translation/config.js";
import "./src/utils/images.js";

LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NativeBaseProvider>
                    <Navigator />
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
}
