function submitForm(e) {
     e.preventDefault();
   let email = e.target[0].value;
    let password = e.target[1].value;
  
    // sessionStorage.setItem("name", name);
    
  if(email!== ''  && password!=='' ){
    location.href = "quiz.html";
  }
    
  }