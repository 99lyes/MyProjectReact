import {React, useState} from 'react'
import { useAuthStore } from '../store/useAuthStore';


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const { signup, isSignUp } = useAuthStore();

  return (
    <div>
Sign Up page
    </div>
  )
}

export default SignUpPage;
