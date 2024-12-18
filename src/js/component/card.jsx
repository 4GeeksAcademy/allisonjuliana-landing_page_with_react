import React from "react";
import SingleCard from "./SingleCard.jsx";

const Card = () => {
    // const { image, title, description } = props.cards;
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-4 g-5 text-center mb-4 mx-4">
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
            </div>
        </div>
    );
};

export default Card;