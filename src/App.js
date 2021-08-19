import GlobalStyle from "./components/GlobalStyle";
import {Route, Switch, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import AboutUsPage from "./pages/AboutUsPage";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieFeat from "./components/MovieDetails";

const App = () => {
    const location = useLocation()

    return (
        <div className='App'>
            <Nav/>
            <GlobalStyle/>

            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/'>
                        <AboutUsPage/>
                    </Route>
                    <Route exact path='/work'>
                        <OurWork/>
                    </Route>
                    <Route path="/work/:id">
                        <MovieFeat/>
                    </Route>
                    <Route path='/contact'>
                        <ContactUs/>
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    )
}


export default App;
