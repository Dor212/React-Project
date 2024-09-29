import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import RegisterSchema from "../../Validations/RegisterSchema"
import axios from "axios";
import { Button, Checkbox, FloatingLabel } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialData = {
        "name": {
                "first": "",
                "middle": "",
                "last": ""
        },
        "phone": "",
        "email": "",
        "password": "",
        "image": {
                "url": "",
                "alt": ""
        },
        "address": {
                "state": "",
                "country": "",
                "city": "",
                "street": "",
                "houseNumber": 0,
                "zip": 0
        },
        "isBusiness": false
};

const RegisterObj = () => {
        const nav = useNavigate();
        const { register, handleSubmit, formState: { errors , isValid } } = useForm({
                defaultValues: initialData,
                mode: "onChange",
                resolver: joiResolver(RegisterSchema)
        })

        const onSubmit = async (form: typeof initialData) => {
                try {
                        const res = await axios.post(
                                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users", form,
                        );
                        if (res.status === 200) {
                                toast.success("ok")
                                nav("/");
                                console.log(res.data);
                        } 
                } catch (err) {
                        toast.error("Error")
                };

        };
        return <>
                <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4 p-4 rounded-lg shadow-lg mt-11">
                        <h1 className="text=2xl font-bold text-gray-800">Register</h1>
                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="First Name"
                                {...register("name.first")}
                                color={errors.name?.first ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.name?.first?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="Middle Name"
                                {...register("name.middle")}
                                color={errors.name?.middle ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.name?.middle?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="Last Name"
                                {...register("name.last")}
                                color={errors.name?.last ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.name?.last?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="number"
                                variant="standard"
                                label="Phone"
                                {...register("phone")}
                                color={errors.phone ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.phone?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="email"
                                variant="outlined"
                                label="Email"
                                {...register("email")}
                                color={errors.email ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.email?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="password"
                                variant="outlined"
                                label="Password"
                                {...register("password")}
                                color={errors.password ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.password?.message}
                        </span>
                        <label htmlFor="isBusiness">Is Business</label>
                        <Checkbox {...register("isBusiness")} />

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="Image Url"
                                {...register("image.url")}
                                color={errors.image?.url ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.image?.url?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="Image alt"
                                {...register("image.alt")}
                                color={errors.image?.alt ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.image?.alt?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="state"
                                {...register("address.state")}
                                color={errors.address?.state ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.address?.state?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="Country"
                                {...register("address.country")}
                                color={errors.address?.country ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.address?.country?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="City"
                                {...register("address.city")}
                                color={errors.address?.city ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.address?.city?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="text"
                                variant="standard"
                                label="Street"
                                {...register("address.street")}
                                color={errors.address?.street ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.address?.street?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="number"
                                variant="standard"
                                label="house Number"
                                {...register("address.houseNumber")}
                                color={errors.address?.houseNumber ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.address?.houseNumber?.message}
                        </span>

                        <FloatingLabel className="text-2xl"
                                type="number"
                                variant="standard"
                                label="Zip"
                                {...register("address.zip")}
                                color={errors.address?.zip ? "error" : "success"} />
                        <span className="text-sm text-red-500">
                                {errors.address?.zip?.message}
                        </span>
                        <Button type="submit" disabled={!isValid}>SEND</Button>


                </form>
        </>
}
        ;
export default RegisterObj;