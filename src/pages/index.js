import React from 'react'
import Container from '../components/container'
import LoggingComponent from '../components/loggingComponent';
import { useUser } from '@auth0/nextjs-auth0'


const Home = () => {
    const {user , error , isLoading} = useUser();

    //if (isLoading) return <div>Loading...</div>;
    //  if (error) return <div>{error.message}</div>;
    
    if(user)
    return <Container/>
    return <LoggingComponent/>

}

export default Home

