import { useState } from "react"

const StarRating = ({ starCount = 5 }) => {
    const [starValue, setStarValue] = useState();
    const [hoverStar, setMouseHover] = useState(0);
    return (
        <>
            <div className="container">
                {
                    new Array(starCount).fill(0).map((value, index) => (
                        <span style={{ fontSize: "20px", cursor: "pointer" }}
                            key={index}
                            className={hoverStar === 0 && index < starValue ? "gold" : index < hoverStar ? "gold" : ""}
                            onClick={() => setStarValue(index + 1)}
                            onMouseOver={() => setMouseHover(index + 1)}
                            onMouseLeave={() => setMouseHover(0)}
                        >&#9733;
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default StarRating