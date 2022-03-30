import { useState } from "react";
import {useForm} from "react-hook-form";

export default function App() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const  {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(state);
  // };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email here"
            value={state.email}
            onChange={handleInputChange}
            {...register({
              required: 'Email is required.',
              pattern: {
                value: "^[^@ ]+@[^@ ]+\.[^@ .]{2,}$",
                message: 'Email is not valid.'
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password here"
            value={state.password}
            onChange={handleInputChange}
            {...register({
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.'
              }
            })}
          />
            {errors.password && (
            <p className="errorMsg">{errors.password.message}</p> 
            )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}