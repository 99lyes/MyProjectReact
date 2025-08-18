import React, { useState } from 'react'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState();
    return (
    <div>
      Hi Login Page
    </div>
  )
}

export default LoginPage
