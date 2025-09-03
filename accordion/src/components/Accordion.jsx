import { accordionData } from "../data"
import plus from "../../public/plus.png"
import { useState } from "react";
import minus from "../../public/minus.png"

const Accordion = () => {
    const [content, setContent] = useState(false)

    const handletoggle = (id) => {
        setContent(content === id ? !content : id);

    }
    return (
        <>
            <div>
                {
                    accordionData?.map((data, index) => (
                        <div key={index} className="border">
                            <div className="title-img">
                                <span style={{ textAlign: "left", padding: "10px", fontWeight: "700" }}>{data.title}</span>
                                <span style={{ marginRight: "10px", cursor: "pointer" }}>
                                    <img
                                        src={content === data.id ? minus : plus}
                                        height={20}
                                        width={20}
                                        onClick={() => handletoggle(data.id)}

                                    />
                                </span>
                            </div>
                            {content === data.id && <p>{data.content}</p>}

                        </div>
                    ))
                }
            </div >

        </>
    )
}

export default Accordion