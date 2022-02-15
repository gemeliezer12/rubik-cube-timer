import { useScramble } from "../Contexts/ScrambleContext"

const Index = () => {
    const { scramble, scrambleHandler } = useScramble()

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <p style={{
                    fontSize: '20px',
                    display: "flex",
                    textAlign: "center"
                }}>
                    {scramble}
                </p>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div></div>
                <div style={{
                    display: "flex",
                    gap: "6px"
                }}>
                    <div style={{
                        display: "flex",
                        width: "32px",
                        height: "32px",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}>
                        <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div style={{
                        display: "flex",
                        width: "32px",
                        height: "32px",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }} onClick={scrambleHandler}>
                        <i className="fa-solid fa-rotate"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
