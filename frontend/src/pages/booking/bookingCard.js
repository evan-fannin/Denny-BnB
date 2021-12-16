import React from "react";
import { useHistory } from "react-router-dom";

import ContentCard from "../../components/contentCard";
import CardLinkArea from "../../components/cardLinkArea";
import ImageCard from "../../components/imageCard";

export default function BookingCard(props) {
    const history = useHistory();

    const handleClick = (e) => {
        history.push("/user-bookings/" + props.id + "/");
    };
    return (
        <ContentCard
        style={{width: '40%', height: '50%', backgroundColor: 'ghostwhite', border: '1px solid rgba(0,0,0,.5)'}}
        hover={true}>
            <CardLinkArea id='linkArea' onClick={handleClick}>
                <h3 id='houseName' style={{textAlign: 'center'}}>
                    {props.houseName}
                </h3>
                <ImageCard id='thumbnail' src={props.image} style={{width: '100%', height: '70%'}}/>
                <p id='price' style={{textAlign: 'center'}}>
                    ${parseInt(props.price)} / night
                </p>
            </CardLinkArea>
        </ContentCard>
    );
}