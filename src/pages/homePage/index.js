import React from 'react'
import Banner from './features/banner'
import Tags from './features/tags'
import Service from './features/service'
import WhoAreYou from './features/whoAreYou'
import Company from './features/company'
import OurClient from './features/ourClient'
import Quick from './features/quick'


const Home = () => {
    return (
        <div>
            <Banner />

            <Tags />

            <Service />

            <WhoAreYou />

            <Company />

            <OurClient />

            <Quick />

        </div>
    )
}

export default Home
