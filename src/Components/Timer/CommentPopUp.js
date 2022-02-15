import TextareaAutosize from "react-textarea-autosize"
import { usePopUp } from "../Contexts/PopUpContext"

const CommentPopUp = () => {
    const { setPopUpContent } = usePopUp()

    return (
        <div className="KiPZH0bFr1 rounded-[15px]" style={{
            backgroundColor: "var(--bg-color-2)",
            padding: "15px",
            // borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <p style={{
                    fontSize: "20px",
                    fontWeight: "900"
                }}>
                    Add comment
                </p>
            </div>
            <div style={{
                display: "flex"
            }}>
                <TextareaAutosize style={{
                    borderBottom: "1px solid var(--bg-color-comp-1)",
                    width: "100%",
                    padding: "6px",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                }}/>
                
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end"
            }}>
                <div style={{
                    padding: "6px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    cursor: "pointer",
                    fontWeight: "900",
                    fontSize: "14px"
                }} onClick={() => setPopUpContent()}>
                    <p style={{
                        color: "var(--base-color-red)"
                    }}>Cancel</p>
                </div>
                <div style={{
                    padding: "6px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    cursor: "pointer",
                    background: "var(--base-color-indigo)",
                    borderRadius: "4px",
                    fontWeight: "900",
                    fontSize: "14px"
                }}>
                    <p style={{
                        color: "white"
                    }}>Done</p>
                </div>
            </div>
        </div>
    )
}

export default CommentPopUp
