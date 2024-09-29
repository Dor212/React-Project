import { joiResolver } from "@hookform/resolvers/joi";
import { Button, FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../Validations/LoginSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userActions } from "../../Store/UserSlice";





const Login = () => {
    const dispatch = useDispatch()
    const nav = useNavigate();
    const initialData = {
        email: "",
        password:"",
    };

    const {register , handleSubmit , formState: {errors, isValid}} = useForm({
        defaultValues: initialData,
        mode: "onChange",
        resolver: joiResolver(LoginSchema)
    });

    const onSubmit = async (form: typeof initialData)=>{
        try {
            const token = await axios.post("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login", form,);
            dispatch(userActions.login({userName: "Dor"}));
            console.log(token);
            toast.success("Login Success");
            nav("/");
        } catch (error) {
            toast.error("!!!!");
            console.log(error);
            
        }
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-2/5 gap-4 p-4 m-auto mt-20 rounded-lg shadow-lg"
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
export default Login;
