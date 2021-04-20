import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import './SearchResult.css'
import StarIcon from "@material-ui/icons/Star";


const SearchResult = ({ img, location, description, star, price, total,title }) => {
    return (
        
            <div className="searchResult">
                <img src={img} alt="" />
                <FavoriteBorderIcon
                    className="searchResult__heart" />
                <div className="searchResult__info">
                    <div className="searchResult__infoTop">
                        <p>{location}</p>
                        <h3>{title}</h3>
                        <p>____</p>
                        <p>{description}</p>

                    </div>
                    <div className="searchResult__infoBottom">
                        <div className="searchResult__stars">
                            <StarIcon
                                className="searchResult__star" />
                            <p>
                                <strong>{star}</strong>
                            </p>


                        </div>
                        <div className="searchResults__price">
                        <h2>{price}</h2>
                        <p>{total}</p>

                        </div>

                    </div>
                </div>
                </div>
        
    );
};

export default SearchResult;