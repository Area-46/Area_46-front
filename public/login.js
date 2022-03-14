const btnlogin = document.getElementById("btnlogin")
const username = document.getElementById("Username")
const password = document.getElementById("Password")
let adminID;
let adminPass;

const checkAccount = (e) => {
    if ((adminID === "area" || adminID === "AREA") && adminPass === "123") {
        console.log("Status : " + "success")
        alert("Login success.")
        window.location.href = "kitchen_order";
    } else {
        console.log("Status : " + "fail")
        alert("Login fail.")
        password.value = ""
    }
}

username.addEventListener("keyup", (e) => {
    // console.log(e.target.value)
    adminID = e.target.value
    if (event.keyCode === 13) {
        checkAccount(null)
    }
})

password.addEventListener("keyup", (e) => {
    // console.log(e.target.value)
    adminPass = e.target.value
    if (event.keyCode === 13) {
        console.log("asd")
        checkAccount(null)
    }
})

btnlogin.addEventListener("click", checkAccount)