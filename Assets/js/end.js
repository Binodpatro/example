
let user_points = sessionStorage.getItem("points");
let user_question = sessionStorage.getItem("total_question");

 document.querySelector("span.points").innerHTML = user_points;
 
 document.querySelector("span.total_question").innerHTML = user_question;
 let rightanswers1=sessionStorage.getItem('rightanswers')
console.log(rightanswers1)


for(let x of JSON.parse (rightanswers1)){console.log(x)
    let ends= document.getElementById("end")
   ends.innerHTML+=block1(x.question)
   ends.innerHTML+=block1(x.answer)
    }

    function block1(data) {
        //extra html you want to store.
        return '<div >' + data + '</div>';
    }
    function block2(data) {
        //extra html you want to store.
        return '<div >' + data + '</div>';
    }



