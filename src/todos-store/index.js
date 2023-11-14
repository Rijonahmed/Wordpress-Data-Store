import { createReduxStore, register } from "@wordpress/data";
 const DEFAULT_STATE = {items: [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      }
 ],}

const store = createReduxStore('block-course/todos', {
    reducer(state = DEFAULT_STATE, action){
        switch (action.type) {
            case 'ADD_TODO':
                
                return {...state, items: [...state.items, action.todo]};
        
            default:
                return state;
        }

    },
    actions:{
        addTodo(todo){
            return {
                type: 'ADD_TODO',
                todo,
            };
        },

    },
    selectors:{
getTodos(state) {
    return state.items
}
    }
})

register(store);