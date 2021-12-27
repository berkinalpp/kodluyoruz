import axios from 'axios'


const  getData = async (id) => {
    const {data:getUser} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    const {data:getPosts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    getUser.posts = getPosts;
    console.log(getUser);
}

export default getData;