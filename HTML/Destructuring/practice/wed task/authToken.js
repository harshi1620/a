
// console.log('1st Screen')
// 1st head=document.getElementById('header')
// let log=document.getElementById('log')

let wBtn=document.getElementById('wrongBtn')
// Creating and Storing the auth token in local storage
function login(){
    localStorage.setItem('name','Harshi')
    console.log("login button----> authToken stored in the local storage")
    // head.innerText='hello user'
    checkAuthToken()
}

// checking the token is stored or not
function checkAuthToken(){
    const authToken=localStorage.getItem('name')

    if(authToken)
        window.open('hellouser.html')
    else
        console.log('authtoken is not created in the local storage')
}

// function for worng button
function wrongBtn(){
    wBtn.innerText='You are selected wrong Button'
    console.log('wrong button')
    setTimeout(()=>{
        location.reload()
    },3000)
}

// function for logout button
function logout(){
    localStorage.removeItem('name')
    console.log('logout button---> remove token in local storage')
    console.log('2nd screen')
    window.open('login1.html')
}

