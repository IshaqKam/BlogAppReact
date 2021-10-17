import React from 'react'

import BlogList from '../components/BlogList';
import useFetch from '../Hooks/useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}

export default Home;