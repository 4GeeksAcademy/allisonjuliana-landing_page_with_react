import React from "react";

const SingleCard = () => {
    return (
            <div class="col">
                <div class="card h-100 w-55">
                    <img src="https://via.placeholder.com/500x325" class="card-img-top" alt="imagen 500 x 325"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer ">
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
    );
};

export default SingleCard;