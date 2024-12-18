import React from "react";

const Card = () => {
    // const { image, title, description } = props.cards;
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-4 g-5 text-center mb-4 mx-4">
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
                <div class="col">
                    <div class="card h-100 w-55">
                    <img src="https://via.placeholder.com/500x325" class="card-img-top" alt="imagen 500 x 325"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 w-55">
                    <img src="https://via.placeholder.com/500x325" class="card-img-top" alt="imagen 500 x 325"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 w-55">
                    <img src="https://via.placeholder.com/500x325" class="card-img-top" alt="imagen 500 x 325"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;