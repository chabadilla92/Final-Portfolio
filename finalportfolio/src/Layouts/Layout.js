import React from 'react'
import { Projects } from '../Components/Projects';
import styled from 'styled-components'

// Edit grid-template-rows later on the home page as you're adding more data, perhaps keep adding 'min-content' for every component you want to keep scrolling down

// grid-template-columns: min-content 1fr;
// grid-template-rows: min-content 1fr;

const Grid = styled.div`
    display: grid;
    grid-template: "nav header" min-content
                   "nav main" 1fr / min-content 1fr;
    min-height: 100vh;
`;

//  grid-area: 1 / 1 / span 2 / 2;
const GridNav = styled.nav`
    grid-area: nav;
    background-color: #222;
    color: white;
    min-height: 100vh;
    min-width: 250px;
`

// Use this as an example to add more components scrolling down the page 
const GridHeader = styled.header`
    grid-area: header;
`;

const GridMain = styled.main`
    grid-area: main;
`;


function Layout({children}) {
    return (
        <Grid>
            <GridNav>Navigation Bar </GridNav>
            <GridHeader>header</GridHeader>
            <GridMain><Projects /></GridMain>
        </Grid>
    )
}

export default Layout 