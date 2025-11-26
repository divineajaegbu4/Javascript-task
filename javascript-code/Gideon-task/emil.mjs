import axios from "axios";

async function getUserTodo() {
    try{
        const userResponse = await 
        axios.get('https://jsonplaceholder.typicode.com/users');
        const users = userResponse.data;

        const userTodos = await Promise.all(
            users.map(async(user) => {
                const todoResponse =  await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
                const todos =  todoResponse.data;

                const filteredTodo = todos
                .filter(todo => todo.completed)
                .map(todo => todo.title);

                const {id, name, username, email} = user
                
                return{
                    id: id,
                    name: name,
                    username: username,
                    email: email,
                    todos:filteredTodo ,
                } ;
            })
        );

        console.log(userTodos)
        
    
    }
    catch(error){
        
            // console.error("error fetching data" , error);
            console.log('its an error');
        
    }
}

getUserTodo()