//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            // console.log(item);
            if(item !== question) {
                item.classList.remove("show-text");
            }
            //item ở đây là cái trc kia có thể đã đc mở ra trc
            //khi click vào btn khác thì cái đã mở ra kia sẽ phải đóng lại
            //thực chất thì có thể k làm cái này, còn tùy vào dự án
        });


        question.classList.toggle('show-text');
    });
});








// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });