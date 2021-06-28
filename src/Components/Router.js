import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "../Routes/Home/index.js";
import Tour from "../Routes/Tour/index.js";
import Video from "../Routes/Video/index.js";
import Header from "./Header.js";

export default () => (
    <Router>
        <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/video" exact component={Video} />
                <Route path="/tour" exact component={Tour} />
                <Redirect from="*" to="/" />
            </Switch>
    </Router>
)