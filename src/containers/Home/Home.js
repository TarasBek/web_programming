import React from "react";
import Pool from "D:/programming/web_labs/7lab/src/Icons/main.png";
import {
    CardWrapper,
    } from "./Home.styled";
    import CardItem from "../../components/CardItem/CardItem";

const data = [
{   
    id: 1,
    pool_name: "Sport Life Pool",
    water_cap: 1300,
    image: Pool,
    max_peoples: 200,
},
{
    id: 2,
    pool_name: "Aqua Park",
    water_cap:100,
    image: Pool,
    max_peoples: 100,
},
{
    id: 3,
    pool_name: "Ska",
    water_cap:2000,
    image: Pool,
    max_peoples: 231,
},
];

const Home = () => {
    return (
        <div>
        
        <CardWrapper>
                {data.map(({ pool_name, water_cap, image, max_peoples }, idx) => (
            <CardItem
            pool_name={pool_name}
                water_cap={water_cap}
                imageSrc={image}
                max_peoples={max_peoples}
                key={idx}
            />
            ))}
        </CardWrapper>
        </div>
    );
};

export default Home;

