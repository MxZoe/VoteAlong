import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import App from "./App";
import { HashRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAL_v1tyhcCFm1vizv6ppTKhCL8czXzKys",
  authDomain: "votealong-f2129.firebaseapp.com",
  projectId: "votealong-f2129",
  storageBucket: "votealong-f2129.appspot.com",
  messagingSenderId: "143524952912",
  appId: "1:143524952912:web:6d6755a8223505852f0a55"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <HashRouter>
          <App />
        </HashRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
