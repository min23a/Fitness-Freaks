import React from 'react';
import image from '../../../Images/samuel-girven-VJ2s0c20qCo-unsplash.jpg'

const ImageWithText = () => {
    return (
        <section className=" my-3container text-white">
            <h1 className="text-center my-3">Why <span className="text-danger">Us ?</span></h1>
            <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                    <img src={image} style={{ height : '500px'}} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center">
                    <h3>Fitness Freak</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae libero quibusdam sapiente beatae nostrum voluptatibus, atque error porro dolor quod quas magnam. Natus cumque hic a aliquid animi dolore unde consectetur maiores, sapiente odio! Nemo ea, eum quos architecto quam cum quia facere sequi non rem quis, omnis labore?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus expedita distinctio esse maxime natus, inventore animi repellat quam voluptatum voluptas unde delectus. Accusantium autem minima nihil. Eligendi soluta magni sed. Non omnis recusandae sequi. Deserunt tenetur facilis maxime, cupiditate autem repellat impedit necessitatibus minima corporis. Laboriosam at illum consequuntur.
                    </p>
                    <div>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageWithText;