import TopBar from "./Components/TopBar/"
import Scramble from "./Components/Scramble/"
import Timer from "./Components/Timer/"
import BottomBar from "./Components/BottomBar/"

import { TimerProvider } from "./Components/Contexts/TimerContext"
import { ScrambleProvider } from "./Components/Contexts/ScrambleContext"
import { ContextMenuProvider } from "./Components/Contexts/ContextMenuTemplate"
import { PopUpProvider } from "./Components/Contexts/PopUpContext"
import { ThemeProvider } from "./Components/Contexts/ThemeContext"

import { useEffect, useState } from "react"

const App = () => {

    return (
        <ScrambleProvider>
            <TimerProvider>
                <ContextMenuProvider>
                    <PopUpProvider>
                        <ThemeProvider>

                            <div className="dark" style={{
                                width: "100vw",
                                height: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: "var(--base-color-indigo)",
                            }}>
                                <TopBar/>
                                <div className="flex flex-col dark justify-between" style={{
                                    height: "100%",
                                    paddingLeft: "15px",
                                    paddingRight: "15px",
                                    overflowY: "auto"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        paddingLeft: "15px",
                                        paddingRight: "15px",
                                        paddingTop: "15px",
                                        gap: "15px"
                                    }}>
                                        
                                        <Scramble/>
                                    </div>
                                    <Timer/>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "end",
                                        fontSize: "14px"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}>
                                            <p>
                                                Avarage: --
                                            </p>
                                            <p>
                                                Best: --
                                            </p>
                                            <p>
                                                Count: --
                                            </p>
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            // alignItems: "flex-end"
                                            textAlign: "right"
                                        }}>
                                            <p>
                                                Ao5: --
                                            </p>
                                            <p>
                                                Ao12: --
                                            </p>
                                            <p>
                                                Ao50: --
                                            </p>
                                            <p>
                                                Ao100: --
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <BottomBar/>
                            </div>
                        </ThemeProvider>
                    </PopUpProvider>
                </ContextMenuProvider>
            </TimerProvider>
        </ScrambleProvider>
    )
}

export default App
