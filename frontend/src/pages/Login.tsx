import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../api/auth";



export default function Login(){


    const navigate = useNavigate();


    const [email,setEmail]
        = useState("");

    const [password,setPassword]
        = useState("");



    const [loading,setLoading]
        = useState(false);



    const handleLogin = async(
        e:React.FormEvent
    )=>{

        e.preventDefault();


        try{

            setLoading(true);


            const response =
                await loginUser({

                    email,

                    password

                });



            localStorage.setItem(
                "token",
                response.token.access_token
            );


            localStorage.setItem(
                "user",
                JSON.stringify(
                    response.user
                )
            );



            navigate("/");


        }
        catch(error){

            console.error(error);

            alert(
                "Invalid email or password"
            );

        }
        finally{

            setLoading(false);

        }

    };



    return (

        <div className="
            flex
            min-h-screen
            items-center
            justify-center
            bg-slate-100
        ">


            <form
                onSubmit={handleLogin}
                className="
                    w-full
                    max-w-md
                    rounded-xl
                    bg-white
                    p-8
                    shadow
                "
            >


                <h1 className="
                    mb-6
                    text-3xl
                    font-bold
                ">
                    Login
                </h1>



                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={
                        e=>setEmail(
                            e.target.value
                        )
                    }
                    className="
                        mb-4
                        w-full
                        rounded-lg
                        border
                        p-3
                    "
                    required
                />



                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={
                        e=>setPassword(
                            e.target.value
                        )
                    }
                    className="
                        mb-6
                        w-full
                        rounded-lg
                        border
                        p-3
                    "
                    required
                />



                <button
                    disabled={loading}
                    className="
                        w-full
                        rounded-lg
                        bg-blue-600
                        p-3
                        text-white
                        hover:bg-blue-700
                    "
                >

                    {
                        loading
                        ?
                        "Logging in..."
                        :
                        "Login"
                    }

                </button>



                <p className="
                    mt-5
                    text-center
                    text-sm
                ">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="
                            ml-2
                            text-blue-600
                        "
                    >
                        Register
                    </Link>

                </p>


            </form>


        </div>

    );

}