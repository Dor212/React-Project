import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../Validations/LoginSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { userActions } from "../../Store/UserSlice";
import { decode } from "../../Services/tokenServices";



const LoginPage = () => {
    const dispatch = useDispatch()
    const nav = useNavigate();
    const initialData = {
        email: "",
        password: "",
    };

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: initialData,
        mode: "onChange",
        resolver: joiResolver(LoginSchema)
    });

    const onSubmit = async (form: typeof initialData) => {
        try {
            const token = await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login", form,);
            localStorage.setItem("token", token.data);
            const id = decode(token.data)._id;
            axios.defaults.headers.common['x-auth-token'] = token.data;
            const user = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" + id);

            dispatch(userActions.login(user.data));

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Login Success",
                showConfirmButton: false,
                timer: 1500
            });

            nav("/home");
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Your Login Failed",
                showConfirmButton: false,
                timer: 1500
            });

        }
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-1/5 gap-4 p-4 m-auto mt-20 mb-20 rounded-lg shadow-lg bg-slate-100 dark:bg-gray-800"
        >
            <h1 className="text-2xl font-bold text-gray-800">Login</h1>
            <FloatingLabel
                type="email"
                label="Email"
                variant="outlined"
                {...register("email")}
                color={errors.email ? "error" : "success"}
            />
            <span className="text-sm text-red-600">{errors.email?.message}</span>

            <FloatingLabel
                type="password"
                label="Password"
                variant="outlined"
                {...register("password")}
                color={errors.email ? "error" : "success"}
            />
            <span className="text-sm text-red-600">{errors.password?.message}</span>

            <Button type="submit" disabled={!isValid}>Login</Button>


        </form>
    )
}
export default LoginPage;