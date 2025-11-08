const getUsersName = async() => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")

    //   console.log(response.ok) true

      if(response.ok) {
        const data = await response.json();

        data.forEach(item => {
            const {name, username, email} = item

            const info = {
               Name:  name,
               Username: username,
               Email: email
            }

            console.log(info)
        })
      }else {
        throw new Error("Data not found")
      }
    }catch(err) {
      console.log(err.message)
    }
}

// getUsersName()


// Fetch posts and comments in parallel
console.log("==========Fetch posts and comments in parallel====")

const fetchPostAndComments = async() => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts")
    const commentsResponse =  fetch("https://jsonplaceholder.typicode.com/posts")

    const [x, y] = await Promise.all([postsResponse, commentsResponse]);

    const [postData, commentsData] = await Promise.all([x.json(), y.json()])

    return results = {
        postData,
        commentsData
    }


}

// fetchPostAndComments().then(data => console.log(data))


console.log("=============Error Handling============")

const errorHandling = async () => {
    try {

    const responseOk = await fetch("https://jsonplaceholder.typicode.com/users")
     const dataOk = await responseOk.json();

    console.log(dataOk)
     


    const responseErr = await fetch("https://wrong-url.com");

    const dataErr = await responseErr.json();



    if(!responseErr.ok) {
        throw new Error("Wrong url")
    }

    // const [err, ok] = await Promise.all([responseErr, responseOk]);

    

    // const [getDataErr, getDataOk] = await Promise.all([dataErr, dataOk])

    // console.log(getDataErr)
 }catch(err) {
    console.log(err.message)
 }
  

}

errorHandling()



