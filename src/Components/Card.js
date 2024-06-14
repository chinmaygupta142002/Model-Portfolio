import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card(props) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className="p-4">
            <div className="hero card-zoom flex items-center justify-center">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        effect="blur"
                        
                        src={props.source}
                        alt="no_image"
                        className="hover:scale-125 ease-out duration-200 max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;











