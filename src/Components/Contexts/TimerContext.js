import { createContext, useContext, useEffect, useState } from "react"
import { useScramble } from "./ScrambleContext"

const TimerContext  = createContext()

export const useTimer = () => useContext(TimerContext)

export const TimerProvider = ({children}) => {
    const [time, setTime] = useState(0)
    const [timerIsOn, setTimerIsOn] = useState(false)

    const { scrambleHandler, scramble } = useScramble()

    useEffect(() => {
        let interval = null

        timerIsOn && time > 0 && setTime(0)
        !timerIsOn && time > 0 && scrambleHandler()

        if (timerIsOn) interval = setInterval(() => {
            setTime(prevtime => prevtime + 1)
        }, 10)
        else clearInterval(interval)

        return () => clearInterval(interval)

    }, [timerIsOn])

    const stopTimer = (scramble) => {
        setTimerIsOn(false)
        console.log(scramble)
    }

    const startTimer = () => {
        setTimerIsOn(true)
    }

    const value = {
        timerIsOn,
        time,
        stopTimer,
        startTimer
    }

    return (
        <TimerContext.Provider value={value}>
            {children}
        </TimerContext.Provider>
    )
}
