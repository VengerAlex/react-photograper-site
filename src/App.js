import GlobalStyle from "./components/GlobalStyle";
import {Route, Switch} from "react-router-dom";

import AboutUsPage from "./pages/AboutUsPage";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetails from "./components/MovieDetails";

const App = () => {
    return (
        <div className='App'>
            <Nav/>
            <GlobalStyle/>

            <Switch>
                <Route exact path='/'>
                    <AboutUsPage/>
                </Route>
                <Route exact path='/work'>
                    <OurWork/>
                </Route>
                <Route path='/work/:id'>
                    <MovieDetails />
                </Route>
                <Route path='/contact'>
                    <ContactUs/>
                </Route>
            </Switch>
        </div>
    )
}


export default App;
