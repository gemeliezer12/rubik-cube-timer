const index = () => {
    return (
        <div style={{
            padding: "15px",
            paddingBottom: "0"
        }}>
            <div style={{
                backgroundColor: "#4338ca",
                height: "50px",
                borderRadius: "15px",
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "15px",
                paddingRight: "15px",
            }}>
                <div style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                    <i className="fas fa-bars" style={{
                        fontSize: "20px"
                    }}></i>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <p style={{
                            fontSize: "16px"
                        }}>
                            3x3 Cube
                        </p>
                        <p style={{
                            fontSize: "14px",
                            color: "var(--text-color-2)"
                        }}>
                            normal
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <div style={{
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer"
                        }}>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}>
                    <i className="fa-solid fa-cubes" style={{
                        fontSize: "20px"
                    }}></i>
                </div>
            </div>
        </div>
    )
}

export default index
