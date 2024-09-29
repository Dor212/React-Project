import { Navigate } from "react-router-dom";
import { TLoggedInProps } from "../../Types/TLoggedInProps";

const Profile = (props: TLoggedInProps) => {
    return props.isLoggedIn ? (
        <div className="flex flex-col items-center justify-start min-h-screen gap-2">
            <h1 className="text-2xl">Profile Page</h1>
            <p className="text-lg dark:text-white">Welcome User!</p>
        </div>
    ):(
            <Navigate to={"/home"}/>
    )
};

export default Profile;
