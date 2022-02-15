const Index = () => {
    return (
        <div style={{
            width: "100%",
            height: "70px",
            minHeight: "70px",
            backgroundColor: "#4338ca",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: "32px",
            paddingLeft: "32px",
            paddingRight: "32px"
        }}>
            <div style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "200px",
                cursor: "pointer"
            }}>
                <i className="fa-solid fa-list" style={{
                    fontSize: "20px",
                }}></i>
            </div>
            <div style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "200px",
                cursor: "pointer"
            }}>
                <i className="fa-solid fa-stopwatch" style={{
                    fontSize: "20px",
                    color: "var(--base-color-indigo)"
                }}></i>
            </div>
            <div style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "200px",
                cursor: "pointer"
            }}>
                <i className="fa-solid fa-chart-line" style={{
                    fontSize: "20px",
                }}></i>
                
            </div>
        </div>
    )
}

export default Index
