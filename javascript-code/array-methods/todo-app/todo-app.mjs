import axios from "axios"

class TodoApp {
    constructor() {
      this.data = null;  
      this.nextId = 0;    
    }

    async getTodos() {
      try {
       const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
       return this.data = response.data;

      }catch(err) {
        console.log(err)

      }finally {
        console.log("Finished!")
      }
      
    }

    displayTodos() {
      const titles = this.data.map(todo => todo.completed ? `✅ ${todo.title}` : `❌ ${todo.title}`)

      return titles.join('\n');
    }

    async addTask(data) {
        
        const todoList = {
          id: this.nextId++,
          ...data
        }

      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todoList);
       
        this.data.push(response.data)

        console.table(this.data);
      }catch(err) {
        console.log("Error:", err)
      }finally {
        console.log("Added Successfully!")
      }

    }

    markItCompleted(taskId) {
      const todoId = this.data.find(todo => todo.id === taskId);

        if (!todoId) {
           return {
            message: `❌ Task with ID ${taskId} not found!`
          };
      }

        if(!todoId.completed) {
          return {
            completed: `${todoId.completed}: Task not Completed!`
          }
       }else {
          return {
            completed: `${todoId.completed}: Task Completed!`
          }
       }

    }

    async deleteTask(taskId) {

      const deleteTask = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      // It shows {} because it didn't delete anything because is not a real API
      console.log("Delete:", deleteTask.data)
      
      // I deleted it manually using this code
     const oldLength = this.data.length;

     console.log("OldLength:", oldLength)


     this.data = this.data.filter(todo => todo.id !== taskId)

     console.log("NewLength:", this.data.length)

     if(this.data.length < oldLength) {
        console.log(`Task with ID ${taskId} deleted successfully!`)
     }else {
        console.log(`Task with ID ${taskId} not found!`)
     }

     return this.data
    }

    async editTask(taskId, title, completed, userId) {

    const editTodo = this.data.find(todo => todo.id === taskId);



     if(!editTodo) {
        return "Id not found"
     }

      editTodo.title = title;
      editTodo.completed = completed;
      editTodo.userId = userId

     await axios.put(`https://jsonplaceholder.typicode.com/todos/${taskId}`, editTodo)

     return editTodo;
    
    }
}


const app = new TodoApp();
const getTodos = await app.getTodos();
const getDisplayTodos = app.displayTodos()
 await app.addTask({
  completed: true,
  title: "Divine",
  userId: 10
})

const getMarkItCompleted = app.markItCompleted(100)
const getDeleteTask = await app.deleteTask(1)
const getEditTask =  await app.editTask(100, "The love from the sky", true, 100)


console.log(getTodos)
console.log(getDisplayTodos)
console.log(getMarkItCompleted)
console.log(getDeleteTask)
console.log(getEditTask)







