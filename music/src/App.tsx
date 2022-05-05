import {Player} from './BottomPlayer/index'
import {Router} from './Router'
import styled, {createGlobalStyle} from 'styled-components'

const AppContainer = styled.div`
    &{
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
    }   
`

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
    }
`

export const App = () => {

    return(
        <AppContainer>
            <GlobalStyles />
            <Router />
            <Player />
        </AppContainer>
    )
}