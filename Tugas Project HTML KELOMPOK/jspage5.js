function reg(event){
    let yourname = document.getElementById('yourname')
    let username = yourname.value
    let password = document.getElementById('yourpassword').value

    if (username.length > 20){
        alert('please make your username less than 20 characters')
    }else if(password.length <= 8){
        alert('Password length must be 8 or above')
    } else if(username.length < 7){
        alert('please make your username more than 6 characters')
    } else{
        alert('Your form has been submitted, Please check your email for confirmation')
    }


    event.preventDefault()
}