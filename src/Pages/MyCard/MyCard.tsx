import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TCard } from "../../Types/TCard";
import axios from "axios";
import { Card } from "flowbite-react";
import { CiHeart, CiTrash, CiEdit, CiCirclePlus } from "react-icons/ci";
import Swal from "sweetalert2";



const MyCardPage = () => {
    const user = useSelector((state: TRootState) => state.UserSlice);
    const [cards, setCards] = useState<TCard[]>([]);
    const nav = useNavigate();
    const searchWord = useSelector(
        (state: TRootState) => state.SearchSlice.search,
    );

    const getData = async () => {
        axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token")
        const res = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",);
        setCards(res.data);
    }


    const searchCards = () => {
        return cards.filter((item: TCard) => item.title.includes(searchWord));
    };

    const likeUnlikeCard = async (card: TCard) => {
        const res = await axios.patch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards" + card._id,);
        if (res.status === 200) {
            Swal.fire({
                position: "top",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });

            const index = cards.indexOf(card);
            const ifLiked = cards[index].likes.includes(user.user!.id);
            const newCards = [...cards];
            if (ifLiked) {
                newCards[index].likes.splice(index);
            } else {
                newCards[index].likes.push(user.user!.id);
            }
            setCards(newCards);
        }
    };

    const deleteCard = async (card: TCard) => {
        try {
            const res = await axios.delete('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/' + card._id);
            const index = cards.indexOf(card);
            const newCards = [...cards];
            newCards.splice(index, 1);
            setCards(newCards);
            if (res) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            Swal.fire({
                position: "top",
                icon: "error",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    const isLikeCard = (card: TCard) => {
        if (user && user.user) {
            return card.likes.includes(user.user?.id);
        }
    };

    const navToCard = (id: string) => {
        nav('/card/' + id)
    };

    const navToCreate = () => {
        nav('/createCard')
    };


    useEffect(() => {
        getData();
    }, [])

    return (<>
        <div className="flex flex-col items-center justify-start gap-2 " >
            <h1 className="mt-10 mb-5 font-mono text-5xl text-center text-gray-700 dark:text-white">My Cards</h1>
            <p className="mt-10 mb-5 font-mono text-3xl text-center text-gray-700 dark:text-white ">These are the cards you created:</p>
            {user.isLoggedIn && <p className="mt-10 mb-5 font-mono text-2xl text-center">Welcome {user?.user?.name.first + " " + user.user?.name.last}</p>}
        </div>

        <div className="fixed flex p-3 rounded-full cursor-pointer right-10 top-20 bg-slate-500">
            <CiCirclePlus onClick={navToCreate} size={30} />
        </div>

        <div className="flex flex-row justify-center items-center w-[70vw] flex-wrap m-auto gap-10 mb-5">
            {searchCards()!.map((item: TCard) => {
                return (
                    <Card key={item._id} className="flex border border-gray-200 bg-slate-500  shadow-md  dark:border-gray-700 dark:bg-gray-800 flex-col w-[200px] h-[400px] rounded-[20px] transition-all cursor-pointer md:w-[350px] md:h-[580px] hover:scale-[99%]">
                        <img onClick={() => navToCard(item._id)} className="object-fill h-[200px] shadow-lg shadow-slate-600" src={item.image.url} alt={item.image.alt} />
                        <div className="flex flex-col justify-center h-full gap-4 p-6">
                            <h5 className="text-sm font-bold tracking-tight text-center truncate md:text-2xl dark:text-white">{item.title}</h5>
                            <h2 className="mt-3 font-bold tracking-tight text-center truncate max-md:text-xs max-md:mt-1 dark:text-white">{item.subtitle}</h2>
                            <hr className="w-full my-3 " />
                            <p className="overflow-auto tracking-tight text-center text-gray-700 elip dark:text-gray-400">
                                Phone: {item.phone}
                                <br></br>
                                Address:  {item.address.country} {item.address.city} {item.address.street} {item.address.houseNumber}
                            </p>
                            <hr />
                            {user && user.user && (
                                <>
                                    <div className="flex flex-row items-center justify-around mt-3">
                                        <CiHeart
                                            size={30}
                                            className="cursor-pointer"
                                            color={isLikeCard(item) ? "red" : "black"}
                                            onClick={() => likeUnlikeCard(item)}
                                        />
                                        <CiTrash size={30} className="cursor-pointer" onClick={() => deleteCard(item)} />
                                        <CiEdit size={30} className="cursor-pointer" />
                                    </div>
                                </>
                            )}
                        </div>
                    </Card>
                )
            })}
        </div>
    </>)
};
export default MyCardPage;