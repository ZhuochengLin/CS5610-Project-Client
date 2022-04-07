import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NoMatchScreen from "./screens/NoMatchScreen";
import SearchScreen from "./screens/SearchScreen";
import "bootstrap/dist/css/bootstrap.css";
import SearchResultsScreen from "./screens/SearchResultsScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import ListScreen from "./screens/ListScreen";
import MyProfileScreen from "./screens/MyProfileScreen";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path={"home"} element={<HomeScreen/>}/>
                <Route path={"profile"} element={<MyProfileScreen/>}/>
                <Route path={"profile/:uid"} element={<ProfileScreen/>}/>
                <Route path={"list/:lid"} element={<ListScreen/>}/>
                <Route path={"search"} element={<SearchScreen/>}>
                    <Route path={"results"} element={<SearchResultsScreen/>}/>
                </Route>
                <Route path={"details/:mid"} element={<MovieDetailsScreen/>}/>
                <Route path={"login"} element={<LoginScreen/>}/>
                <Route path={"register"} element={<RegisterScreen/>}/>
                <Route path={"privacy"} element={<PrivacyScreen/>}/>
                <Route path={"*"} element={<NoMatchScreen/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
