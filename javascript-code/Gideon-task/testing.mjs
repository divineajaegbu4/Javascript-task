import axios from 'axios';


const getUserTodos = async () => {
    try {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users');

        const usersData = users.data


        const callback = (user) => {
            return axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
        }

        const todosPromises = usersData.map(callback)

        const todosResults = await Promise.all(todosPromises)


        

       const getUserData = usersData.map((user, userId) => {

        const userTodos = todosResults[userId].data

         const getUserTodos = userTodos 
         .filter(todo => todo.completed)
         .map(todo => todo.title)

         const {id, name, username} = user

        return {
            id: id,
            name: name,
            username: username,
            todos: getUserTodos
        }
       })

       console.log(getUserData)

    }catch (error) {

        console.error('Error fetching data:', error);

    }
}

getUserTodos();