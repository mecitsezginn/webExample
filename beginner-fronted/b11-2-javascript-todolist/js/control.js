const state = {
    todoList: [
        {id:1, todo:"3 Litre Su İç", isDone: false},
        {id:2, todo:"En Az 3 Saat Kodlama Yap",isDone: false},
        {id:3, todo:"Yemek Yap",isDone: false},
    ]
};


// ********* state *********
const setState = (stateName, newValue) => {
    state[stateName] = newValue;
    renderTodoList();
}

//***************************

// ********* render *********
const renderTodoList = () => {
    const subscriber = document.getElementById("list")
    subscriber.innerHTML = ""
    todoListView(state.todoList, subscriber)
}
//***************************

// ********* add *********
const addTodo = () => {
    const todoInfo = document.getElementById("task").value;
    
    const userId = state.todoList.length + 1;
    if (todoInfo === "") {
        alert("Müşteri bilgilerini giriniz")
    }
    else {
        setState("todoList", [
            ...state.todoList,
            {
                todo: todoInfo,
                id: userId,
                isDone: false
            }
        ])

        document.getElementById("task").value = "";
    }

}
//***************************

// ********* onclick  *********
//remove todo
const removeTodo = (todoId) => {
    state.todoList.forEach((item, index) => {
        if (todoId === item.id) {
            state.todoList.splice(index, 1);
        }
    })
    renderTodoList();
}

const updateTodoList = (listId) =>{
    state.todoList.forEach((list) => {
        if (Number(list.id) === Number(listId)) {
            return list.isDone = true
        }
    });
    renderTodoList();
}
//***************************

// ********* show list *********
const todoListView = (list, subscriber) => {
    list.forEach((item) => {
        const newLi = document.createElement("li");
        newLi.setAttribute("id","ul" + item.id);
        newLi.style.paddingLeft = "12px";
        if(item.isDone === true){
            newLi.style = "background: #276678; color: #fff; text-decoration: line-through;"
        }
        newLi.onclick = (() => {
            updateTodoList(item.id)
        })
        // newLi.innerHTML = item.todo;
        subscriber.appendChild(newLi);

        const newP = document.createElement("p");
        newP.innerHTML = item.todo;
        newP.style = "margin: 0px; padding: 0px;"
        newLi.appendChild(newP);
        
        const button = document.createElement("button");
        button.setAttribute("data-id", item.id);
        button.innerText = "x";
        button.className = "btn btn-danger btn-sm font-weight-bold";
        button.style.marginLeft  = "auto";
        button.style.marginRight = "0px";
        button.onclick = (() => {
            removeTodo(item.id)
        })
        newLi.appendChild(button);
    })
}

renderTodoList()