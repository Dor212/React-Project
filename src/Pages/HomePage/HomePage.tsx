import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie"

const HomePage = ()=>{
    const user = useSelector((state: TRootState) => state.UserSlice);
return(
    <div className="flex flex-col items-center justify-start gap-2" >
    <h1 className="text-5xl text-blue-800 ">Home Page</h1>
    <p className="text-2xl">Welcome Home</p>
        {user.isLoggedIn && <p className="text-1xl">User is Loggedin</p>}
    </div>
)
};
export default HomePage;