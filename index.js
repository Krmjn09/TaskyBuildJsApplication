// var state = {
    // tasklist : [
    //     {
    //         imageUrl: "",
    //         taskTitle: "",
    //         taskType: "",
    //         taskDescription: "",
    //     },
    //      {
    //         imageUrl: "",
    //         taskTitle: "",
    //         taskType: "",
    //         taskDescription: "",
    //     },
    //      {
    //         imageUrl: "",
    //         taskTitle: "",
    //         taskType: "",
    //         taskDescription: "",
    //     },
    //      {
    //         imageUrl: "",
    //         taskTitle: "",
    //         taskType: "",
    //         taskDescription: "",
    //     },
    // ]
// }



//backup storage
const state = {
    taskList: [],
};

// DOM operations
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

 
// console.log(taskContents);
// console.log(taskModal);


//Template for cards on screen
const htmlTaskContent = ({ id, title, description, type, url}) =>  `
          <div class="col-md-6 col-lg-4 mt-3" id=${id}>
<div class="card shadow-sm task__card">
<div class="card-header d-flex justify-content-end task__card__header"> 
<button type="button" class="btn btn-outline-light" name=${id}>
<i class="fa-solid fa-pencil name=${id}"></i>
</button>
<button type="button" class="btn btn-outline-danger" name=${id}>
<i class="fa-regular fa-trash name=${id}"></i>
</button>
</div>
<div class="card-body">

 
    ${
       url &&
       `<img width='100%' src=${url} alt='Card Image' class="card-img-top md-3 rounded-lg"/>`
    }
<h4 class="card-title  task__card__title">
${title}</h4>
<p class="description trim-3-lines text-muted">${description}</p>
<div class="tags text-white d-flex flex-wrap">
<span class='badge bg-primary m-1'${type}>
</span>
</div>
</div>
<div class="card-footer">
<button type="button" class="btn btn-outline-primary float right data-bs-toggle="modal" data-bs-target="#showTask"">
Open Task
</button>
</div>
</div>
</div>
</div>
`;




// MODAL body on >> click of open task

const htmlModalContent = ({ id, title, description, url}) =>  {
    const date =new Date(parseInt(id))
   return`
   <div id=${id}>
    ${
       url &&
       `<img width='100%' src=${url} alt='Card Image' class="img-fluid place__holder__image mb-3"/>`
    }
    <strong class="text-muted text-sm">Created on: ${date.toDateString()}</strong>
    <h2 class="my-3">
    ${title}
    </h2>
    <p class="text-muted">${description}</p>
    </div>
   `;
};

// where we convert json> str (i.e. for local storage)
const updateLocalStorage = () => {
    localStorage.setItem(
        "task",
        JSON.stringify({
            tasks: state.taskList,
        })
    );
}

// where we convert str > json (i.e. for rendering the carrds on the screen)
//load Initial Data

const LoadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.tasks);

    if(localStorageCopy) state.taskList = localStorageCopy.tasks;

    state.taskList.map((cardDate)=> {
        taskContents.innerAdjacentHTML("beforeend",htmlTaskContent(cardDate));
    });
};
//when we update or edit we need to save

// from html to js

const handleSubmit = (event) => {
     const id = `${Date.now()}`;
     const input = {
        url: document.getElementById("ImageUrl").value,
        title: document.getElementById("taskTitle").value,
        taskDescription:  document.getElementById("taskDescription").value,
        tags: document.getElementById("tags").value,
     };


     // for displaying all the things on the screen i.e. ui
taskContents.innerAdjacentHTML("beforeend",htmlTaskContent({...input,id}));


state.taskList.push({...input,id});// this is for backup storage

updateLocalStorage();//for local storage i.e. browser

};