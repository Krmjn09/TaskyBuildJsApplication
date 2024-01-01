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
const htmlTaskContent = ({ id, title, Description, type, url}) => `
<div class='col-md-6 col-lg-4 mt-3' id=${id}>
<div class='card '>
</div>
</div>
`;