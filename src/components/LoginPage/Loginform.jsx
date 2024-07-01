"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  // const initialvalues = { email: "", password: "" };
  // const [formValues, setformValues] = useState(initialvalues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setformValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required!";
  //   }
  //   console.log(errors);
  //   return errors;
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
          >
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formValues.email}
            // onChange={handleChange}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder-blue-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Email Address"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            required
          />
          {errors.email && <span>Invalid email</span>}

          <div className="my-3">
            <label
              for=""
              className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Password*
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              // value={formValues.password}
              // onChange={handleChange}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder-blue-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
              //   {...register("password"), {
              //     required: "Please Enter Your Password",
              //     minLength: {
              //     value: 8,
              //     message: "Password must be at least 8 characters long!"
              //     }
              // }}
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300"
            >
              Remember my Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
          <p className="text-center text-gray-300">Or</p>
          <button
            type="button"
            className="w-full py-2.5 px-5 me-2 mb-2 text-sm mt-4 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Login with Company Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
