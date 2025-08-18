import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {login, isLoggingIn} = useAuthStore();
    return (
    <div>
      Hi Login Page
    </div>
  )
}

export default LoginPage
