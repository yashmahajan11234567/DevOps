import React, { useState } from 'react';

function AuthForm({ onLogin, onRegister, authError }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegister) {
      onRegister(formState);
    } else {
      onLogin({ email: formState.email, password: formState.password });
    }
  };

  return (
    <section className="auth-form">
      <div className="auth-switch">
        <button type="button" className={isRegister ? '' : 'active'} onClick={() => setIsRegister(false)}>
          Login
        </button>
        <button type="button" className={isRegister ? 'active' : ''} onClick={() => setIsRegister(true)}>
          Register
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <label>
            Name
            <input name="name" value={formState.name} onChange={handleChange} required={isRegister} />
          </label>
        )}
        <label>
          Email
          <input name="email" type="email" value={formState.email} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input name="password" type="password" value={formState.password} onChange={handleChange} required />
        </label>
        <button type="submit">{isRegister ? 'Create account' : 'Sign in'}</button>
      </form>
      {authError && <div className="error-message">{authError}</div>}
    </section>
  );
}

export default AuthForm;
