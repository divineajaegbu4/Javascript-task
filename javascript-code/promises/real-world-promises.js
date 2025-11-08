const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const fetchUser = await response.json()


    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            if(response.status === 200) {
                resolve({message: "user",  data: fetchUser})
            }else {
                reject("The response is not successful")
            }
        }, 1000)
    })
}
       
const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const fetchPosts = await response.json();
    

    return new Promise((resolve, reject) => {
    setTimeout(() => {
         if(response.status === 200) {
            resolve({message: "fetch posts:", fetchPosts})
         }else {
            reject("The status is not 200")
         }
            
        }, 2000)
    })  
}

const getComments = async () => {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")

    const fetchComment = await response.json()


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(response.status === 200) {
               resolve({message: "reject comment:", data: fetchComment})
            }else {
                reject("The fetch comments is not successful")
            }
            }, 3000) 
    })
    
}


const getData = async() => {
try{
    const userDataPromise = getUser();
    const postDataPromise = getPost();
    const commentsDataPromise = getComments();

    const promiseArr = [userDataPromise, postDataPromise, commentsDataPromise]


    
    
    const promiseStatus = await Promise.allSettled(promiseArr);


   const start = Date.now()
   const getPromise = await Promise.all(promiseStatus)

     getPromise.forEach(item => {
        const {status, reason, value} = item

        if(status === "fulfilled") {
            const data = value
            console.log(data)
        }

        if(item.status === "rejected") {
            // throw new Error(reason)
            console.log(reason)
        }
    })

    const end = Date.now()

    console.log(`Total time taken: ${end - start}ms`)

    console.log("========Promise Race=========");

    const promiseRace = await Promise.race(promiseArr)

    console.log(promiseRace)

    console.log("==========Promise Any======")

    const promiseAny = await Promise.any(promiseArr)
    console.log(promiseAny)


 }catch(err) {
    console.log(err);
 }

}

getData();



// getUser()
// .then(data => {
//     console.log(data)
//     return getPost()
// }).then(post => {
//     console.log(post)
//     return getComments()
// }).then(comment => {
//     console.log(comment)
// }).catch(err => console.log(err))


