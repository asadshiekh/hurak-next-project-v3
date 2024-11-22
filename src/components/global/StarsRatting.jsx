import { MdOutlineStarPurple500, MdOutlineStarBorderPurple500 } from "react-icons/md";

const StarsRatting = ({ size, color, ratting }) => {

    const roundedRating = Math.round(ratting);

    const stars = () => {
        return Array.from({ length: 5 }, (_, index) => {
            return (
                index < roundedRating ?
                    <MdOutlineStarPurple500
                        key={index}
                        color={color}
                        size={size}
                    />
                    :
                    <MdOutlineStarBorderPurple500
                        key={index}
                        color={'black'}
                        size={size}
                    />
            )
        });
    };


    return (

        <div className="flex items-center">
            {stars()}
        </div>

    )
}

export default StarsRatting