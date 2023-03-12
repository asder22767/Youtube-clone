import { Facebook, GitHub, Google } from "@mui/icons-material"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"

const Login = () => {
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "password",
  })

  const [errorMessage, setErrorMessage] = useState({
    type: "",
    message: "",
  })

  const { isLogin, setIsLogin } = useContext(AuthContext)

  const submitHandler = (evt) => {
    evt.preventDefault()

    setIsLogin(false)

    fetch("https://reqres.in/api/login", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 400) {
          throw new Error("User not found")
        }
        return res.json()
      })
      .then((data) => {
        localStorage.setItem("token", data.token)
        if (data.token) setIsLogin(true)
        console.log(isLogin)
      })
      .catch((err) => {
        setErrorMessage({
          type: "error",
          message: "User or passcode are not correct",
        })

        setTimeout(() => {
          setErrorMessage({
            type: "",
            message: "",
          })
        }, 3000)
      })
  }

  return (
    <section className="container mx-auto px-6 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <Link to={"/"} className="p-3 text-3xl font-bold text-pink-400">
          Youtube
        </Link>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon">
            <Facebook />
          </div>
          <div className="socialIcon">
            <GitHub />
          </div>
          <div className="socialIcon">
            <Google />
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              })
            }}
            type="email"
            className="rounded-2xl px-2 py-1 w-60 mb-4 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            value={form.password}
            onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value,
              })
            }}
            type="password"
            className="rounded-2xl px-2 py-1 w-60 mb-10 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
          ></input>
          {errorMessage.type === "error" && (
            <p className="text-red-600">{errorMessage.message}</p>
          )}
          <button
            type="submit"
            className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in"
          >
            Sign In
          </button>
        </form>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
        <p className="text-blue-400 mb-4 text-sm font-medium cursor-pointer">
          Create a New Account?
        </p>
      </div>
    </section>
  )
}

export default Login
