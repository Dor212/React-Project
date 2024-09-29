import CardR from "../../components/Card/Card"; 

const CardPage =()=>{
    return (
        <div className="w-4/6 m-auto">
        <h1 className="mt-10 mb-5 font-mono text-5xl text-center dark:text-white">Cards Page</h1>
        <p className="mt-10 mb-5 font-mono text-3xl text-center dark:text-white ">Here you can find cards from all categories</p>
        <CardR />
        </div>
    )
}
export default CardPage;