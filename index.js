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
</button>
</div>
</div>
</div>
</div>
`;