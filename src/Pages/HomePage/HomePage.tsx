import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie"

const HomePage = ()=>{
    const isLoggedIn = useSelector((state: TRootState)=> state.UserSlice.isLoggedIn)
return(
    <div className="flex flex-col items-center justify-start gap-2" >
    <h1 className="text-5xl text-blue-800 ">Home Page</h1>
    <p className="text-2xl">Welcome Home</p>
    {isLoggedIn && <p className="text-1xl">User is Loggedin</p>}
    </div>
)
};
export default HomePage;