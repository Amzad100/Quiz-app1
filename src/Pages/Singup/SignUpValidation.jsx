const SignUpValidation = (values) => {

    
    let error={}
    const email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_patern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email="Name should not be empty"
    }
    else if(!email_Pattern.test(values.email)){
        error.email="Email Didn't match"
    }
    else{
        error.email=""
    }

    if(values.password === ""){
        error.password="Password should not be empty"
    }
    else if(!password_patern.test(values.password)){
        error.password="Password Didn't match"
    }
    else{
        error.password=""
    }

    return error;

}

export default SignUpValidation;