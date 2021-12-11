import React from "react";
import { Card, Button } from "antd";
import { Body, Footer } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ id, pool_name = 'No title.', water_cap, imageSrc, max_peoples }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={{ borderRadius: "20px", borderTop: "1px solid grey",borderBottom: "1px solid grey" }} alt={pool_name} src={imageSrc} />
        }
    >
        <Meta title={pool_name} style={{ textAlign: "center" }} />
        <Body>
            <p>Мolume of water: {water_cap}</p>
            <p>Maximal amount of peoples: {max_peoples}</p>
        </Body>
        <Footer>
            <Button>Show More</Button>
        </Footer>
    </Card>
);

export default CardItem;
