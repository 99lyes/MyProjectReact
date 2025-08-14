import {React, useState} from 'react'


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  return (
    <div>
Sign Up page
    </div>
  )
}

export default SignUpPage;
