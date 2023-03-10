import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Main";
import SelectThemeBase from "./components/pages/SelectThemeBase";
import SelectThemePract from "./components/pages/SelectThemePract";
import CodeReviewBasse from './components/pages/CodeReviewBasse';
import CodeReviewPract from './components/pages/CodeReviewPract';
import CodeReviewCheck from './components/pages/CodeReviewCheck';
import Tutorial from './components/pages/Tutorial';
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import MyPage from './components/pages/MyPage';
import Typing from './components/pages/Typing';


function App() {
return (
	<Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/select-themeBase' component={SelectThemeBase} />
      <Route path='/select-themePract' component={SelectThemePract} />
      <Route path='/code-reviewbase' component={CodeReviewBasse} />
      <Route path='/code-reviewpract' component={CodeReviewPract} />
      <Route path='/code-reviewcheck' component={CodeReviewCheck} />
      <Route path='/tutorial' component={Tutorial} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/mypage' component={MyPage} />
      <Route path='/typing' component={Typing} />
      <Route path="*" element={<h1>404 페이지</h1>}/>
    </Switch>
	</Router>
);
}

export default App;
