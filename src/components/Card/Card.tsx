import axios from "axios";
import { useEffect, useState } from "react";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";

const CardR = ()=>{
    const [cards, setCards] = useState<TCard>();

    const getData = async () => {
        const res = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
        setCards(res.data);
    }
    
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="flex flex-wrap m-auto">
            {cards?.map((item: TCard)=>{
                return(
                    <Card key={item._id} className="max-w-sm m-2" >
                        <img width={500} height={500} className="" src={item.image.url} alt={item.image.alt} />
                        <h1>{item.title}</h1>
                        <h2>{item.subtitle}</h2>
                        <p className="flex-wrap">
                            Phone: {item.phone}
                            <br></br>
                            Address:  {item.address.country} {item.address.city} {item.address.street} {item.address.houseNumber}
                            </p>
                    </Card>
                )
            })}
        </div>
    );

}
export default CardR;