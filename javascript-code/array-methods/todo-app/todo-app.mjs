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
      this.data.forEach(todo => todo.completed ? console.log(`✅ ${todo.title}`): console.log(`❌ ${todo.title}`))
    }

    async addTask(completed, title, userId) {
        
        const todoList = {
          id: this.nextId++,
          userId: userId,
          completed: completed,
          title: title
        }

      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todoList);
       
        this.data.push(response.data)

        console.table(this.data)
      }catch(err) {
        console.log("Error:", err)
      }finally {
        console.log("Added Successfully!")
      }

    }

    markItCompleted(taskId) {
      let dataId = null;

       this.data.forEach(data => {
        if(data.id === taskId) {
          dataId = data
        }
       })

       console.log(dataId)

       // ✅ Check if task exists first
        if (!dataId) {
           return {
            message: `❌ Task with ID ${taskId} not found!`
          };
      }

       if(!dataId.completed) {
          return {
            completed: `${dataId.completed}: Task not Completed!`
          }
       }else {
          return {
            completed: `${dataId.completed}: Task Completed!`
          }
       }
    }

    deleteTask(taskId) {
     const oldLength = this.data.length;

     console.log("OldLength:", oldLength)


     this.data = this.data.filter(todo => todo.id !== taskId)

     console.log("NewLength:", this.data.length)

     if(this.data.length < oldLength) {
        return `Task with ID ${taskId} deleted successfully!`
     }else {
      return `Task with ID ${taskId} not found!`
     }

    }

    editTask(taskId, title, completed, userId) {
      let editUsersTodo = null;

     const editTodo = this.data.find(todo => todo.id === taskId);

     if(!editTodo) {
        editUsersTodo = "Todo not found!"
     }else {
       editUsersTodo = {
        id: editTodo.id,
        title: `${editTodo.title} edited to ${editTodo.title = title}`,
        completed: `${editTodo.completed} edited to ${editTodo.completed = completed}`,
        nextId: `${editTodo.userId} edited to ${editTodo.userId = userId}`
       }
     }

     return editUsersTodo;

    }

    viewAllTask() {
      
    }
}


const app = new TodoApp();


const getTodos = await app.getTodos();
console.log(getTodos)

const getDisplayTodos = app.displayTodos()

await app.addTask(true, "Divine", 4);
await app.addTask(false, "Ikechukwu Agu", 3);
await app.addTask(true, "Divine", 4);

const getMarkItCompleted = app.markItCompleted(700)
const getDeleteTask = app.deleteTask(100)
const getEditTask = app.editTask(1, "Divine", true, 10);
const getEditTask2 = app.editTask(30, "Ikechukwu Agu", false, 55);

console.log(getDisplayTodos)
console.log(getEditTask)
console.log(getEditTask2)
console.log(getMarkItCompleted)
console.log(getDeleteTask)



