import axios from "axios"

const dataDashboard = async() => {
    const usersPromise = await axios.get("https://dummyjson.com/users");

    const usersData = usersPromise.data.users

    const postsPromise = usersData.map(user => axios.get(`https://dummyjson.com/posts?userId=${user.id}`))

    const postsRes = await Promise.all(postsPromise)

    const postsData = postsRes.map(post => post.data.posts);

    const flatPostsData = postsData.flat()

    console.log(flatPostsData);
    

}

dataDashboard()