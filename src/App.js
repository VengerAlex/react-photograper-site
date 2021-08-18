import styled from 'styled-components';
import GlobalStyle from "./components/GlobalStyle";

import AboutUsPage from "./pages/AboutUsPage";

const App = (props) => {
    return (
        <div className='App'>
            <GlobalStyle />
            <AboutUsPage/>
        </div>
    )
}


export default App;
