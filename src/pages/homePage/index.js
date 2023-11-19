import React from 'react'
import Banner from './features/banner'
import WhoAreYou from './features/whoAreYou'
import Company from './features/company'
import Quick from './features/quick'
import OurClient from './features/ourClient'
import Tags from './features/tags'

const Home = () => {
    return (
        <div>
            <Banner />

            <Tags />

            <WhoAreYou />

            <Company />

            <OurClient />

            <Quick />

        </div>
    )
}

export default Home
