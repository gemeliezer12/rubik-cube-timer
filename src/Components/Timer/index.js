import { useTimer } from "../Contexts/TimerContext"
import { usePopUp } from "../Contexts/PopUpContext"

import CommentPopUp from "./CommentPopUp"
import { useScramble } from "../Contexts/ScrambleContext"

const Index = () => {
    const { stopTimer, startTimer, timerIsOn, time } = useTimer()
    const { scramble } = useScramble()
    const { setPopUpContent } = usePopUp()

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div className="flex justify-center cursor-pointer" onClick={() => {
                timerIsOn ? stopTimer({
                    scramble: scramble,
                    time: time,
                    dateSolved: Date.now()
                }) : startTimer()
            }}>
                <div style={{
                    fontFamily: "monospace",
                    fontWeight: "700"
                }}>
                    <span style={{
                        fontSize: "100px"
                    }}>
                        {Math.floor(time / 100 % 60)}
                    </span>
                    <span style={{
                        fontSize: "80px"
                    }}>
                        .{time % 100 < 10 ? "0" + time % 100 : time % 100}
                    </span>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer"
                }}>
                    <i className="fa-solid fa-trash"></i>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer"
                }}>
                    <i className="fa-solid fa-flag"></i>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer"
                }}>
                    <i className="fa-solid fa-ban"></i>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer"
                }}>
                    <i className="fa-solid fa-tags"></i>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer"
                }} onClick={() => setPopUpContent(
                    <CommentPopUp/>
                )}>
                    <i className="fa-solid fa-message"></i>
                </div>
            </div>
        </div>
    )
}

export default Index
