import React from "react";
import Pool from "D:/programming/web_labs/7lab/src/Icons/main.png";
import CardItem from "../../components/CardItem/CardItem";
import {
    CardWrapper,
} from "./Catalog.styled";
import FilterBar from "../FilterBar/FilterBar";

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
        water_cap: 100,
        image: Pool,
        max_peoples: 100,
    },
    {
        id: 3,
        pool_name: "Ska",
        water_cap: 2000,
        image: Pool,
        max_peoples: 231,
    },
];

const Catalog = () => {
    return (
        <div>
            <FilterBar />
            <CardWrapper>
                {data.map(({ pool_name, water_cap, image, max_peoples,id }, idx) => (
                    <CardItem
                        pool_name={pool_name}
                        water_cap={water_cap}
                        imageSrc={image}
                        max_peoples={max_peoples}
                        key={id}
                    />
                ))}
            </CardWrapper>
        </div >
    );
}

export default Catalog;