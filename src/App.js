import React from "react";
import './App.css'
import Navigation from "./components/Navigation";

// 라우팅
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About'
import Home from './routes/Home'
import Detail from './routes/Detail'

// exact : path가 정확하게 일치할 경우에만 반응하게 만들어줌.
// component : 어떤 화면을 그릴지 참조.
function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/movie-detail" component={ Detail } />
        </HashRouter>
    )
}


export default App;


