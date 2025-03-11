let form = document.getElementById("userform")
form.addEventListener("submit",function(e){
    e.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    
    let obj ={
        name, email, phone, password, confirmpassword
    }
    console.log(obj);

    if (obj.password !==obj.confirmpassword){
        return alert("Not Match")
    }
    
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = obj.name;
  
    let td2 = document.createElement("td");
    td2.innerText = obj.email;
  
    let td3 = document.createElement("td");
    td3.innerText = obj.phone;
  
    let td4 = document.createElement("td");
    td4.innerText = obj.password;
  
    let td5 = document.createElement("td");
    td5.innerText =obj.confirmpassword;
    
    tr.append(td1, td2, td3, td4, td5)

  document.getElementById("tbody").append(tr)

    form.reset();


}) 