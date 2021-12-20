import React from 'react';
import { useHistory } from 'react-router-dom';

import ContentCard from "../../components/contentCard";
import CardLinkArea from "../../components/cardLinkArea";
import ImageCard from "../../components/imageCard";

export default function HouseCard(props) {
    const history = useHistory();

    const handleClick = () => {
        history.push('/house/' + props.name);
    };

    return(
        <ContentCard
        style={{width: '40%', height: '50%', backgroundColor: 'ghostwhite', border: '1px solid rgba(0,0,0,.5)'}}
        hover={true}>
            <CardLinkArea onClick={handleClick}>
                <h3 style={{textAlign: 'center'}}>
                    {props.name}
                </h3>
                <ImageCard src={props.image} style={{width: '100%', height: '70%'}}/>
                <p style={{textAlign: 'center'}}>
                    ${parseInt(props.price)} / night
                </p>
            </CardLinkArea>
        </ContentCard>
    );
}