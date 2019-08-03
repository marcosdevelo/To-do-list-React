



const getState = ({getStore, setStore, getActions}) => {
    return {
        store: {
            todoList: [
                // use actions.get() when your page renders to get you todo items
            ]
        },
        actions: {
            get: ()=> {  } ,
            add: ()=> {  } ,
            delete:()=> {  } ,
        }
    }
}