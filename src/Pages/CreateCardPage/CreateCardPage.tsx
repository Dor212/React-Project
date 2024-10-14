import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, FloatingLabel } from "flowbite-react";
import { CreateCardSchema } from "../../Validations/CreateCardSchema";


const CreateCardPage = () => {
    const initialData = {
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        web: "",
        image: {
            url: "",
            alt: "",
        },
        address: {
            state: "",
            country: "",
            city: "",
            street: "",
            houseNumber: 0,
            zip: 0,
        }
    }

    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: initialData,
        mode: "onChange",
        resolver: joiResolver(CreateCardSchema)
    })

    const onSubmit = async (form: typeof initialData) => {
        try {
            const res = await axios.post(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users", form,
            );
            if (res.status >= 200 && res.status < 300) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Thanks",
                    showConfirmButton: false,
                    timer: 1500
                });

                nav("/profile");
            }
        } catch (err) {
            console.log(err);
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Sorry something went wrong",
                showConfirmButton: false,
                timer: 1500
            });
        };

    };
    return (<>
        <div className="w-2/5 m-auto">
            <h1 className="mt-10 mb-5 font-mono text-5xl text-center text-gray-700 dark:text-white">Create Card</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 p-4 mb-20 rounded-lg shadow-lg mt-11 bg-slate-100 dark:bg-gray-800">
                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="title"
                    {...register("title")}
                    color={errors.title ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.title?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="subtitle"
                    {...register("subtitle")}
                    color={errors.subtitle ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.subtitle?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="description"
                    {...register("description")}
                    color={errors.description ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.description?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="phone"
                    {...register("phone")}
                    color={errors.phone ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.phone?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="email"
                    {...register("email")}
                    color={errors.email ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.email?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="web"
                    {...register("web")}
                    color={errors.web ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.web?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="Image Url"
                    {...register("image.url")}
                    color={errors.image?.url ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.image?.url?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="Image alt"
                    {...register("image.alt")}
                    color={errors.image?.alt ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.image?.alt?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="state"
                    {...register("address.state")}
                    color={errors.address?.state ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.address?.state?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="Country"
                    {...register("address.country")}
                    color={errors.address?.country ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.address?.country?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="City"
                    {...register("address.city")}
                    color={errors.address?.city ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.address?.city?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="text"
                    variant="standard"
                    label="Street"
                    {...register("address.street")}
                    color={errors.address?.street ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.address?.street?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="number"
                    variant="standard"
                    label="house Number"
                    {...register("address.houseNumber")}
                    color={errors.address?.houseNumber ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.address?.houseNumber?.message}
                </span>

                <FloatingLabel className="text-2xl text-gray-700 dark:text-white"
                    type="number"
                    variant="standard"
                    label="Zip"
                    {...register("address.zip")}
                    color={errors.address?.zip ? "error" : "success"} />
                <span className="text-sm text-red-500">
                    {errors.address?.zip?.message}
                </span>
                <Button type="submit" disabled={!isValid}>Add Your Card</Button>
            </form>
        </div>
    </>)

};
export default CreateCardPage;