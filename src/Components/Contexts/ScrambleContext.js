import { createContext, useContext, useEffect, useState } from "react"

const ScrambleContext  = createContext()

export const useScramble = () => useContext(ScrambleContext)

export const ScrambleProvider = ({children}) => {
    const [scramble, setScramble] = useState()

    const scrambleHandler = () => {
        var turns = 20
        var movesArray = ['R', 'L', 'U', 'D', 'B', 'F']
        var scramble = ''
        var dir = ''
        var rand, face
    
        var faces = {
            'R' : { 'allowed' : true, 'enables' : ['U', 'D', 'F', 'B'] },
            'L' : { 'allowed' : true, 'enables' : ['U', 'D', 'F', 'B'] },
            'U' : { 'allowed' : true, 'enables' : ['R', 'L', 'F', 'B'] },
            'D' : { 'allowed' : true, 'enables' : ['R', 'L', 'F', 'B'] },
            'F' : { 'allowed' : true, 'enables' : ['R', 'L', 'U', 'D'] },
            'B' : { 'allowed' : true, 'enables' : ['R', 'L', 'U', 'D'] }
        };
    
        for(var i = 0; i < turns; i++) {
            do {
            rand = Math.floor(Math.random() * (movesArray.length))
            face = movesArray[rand]
            } while(! faces[face]['allowed'])
    
            faces[face]['allowed'] = false
    
            for(var f = 0; f < faces[face]['enables'].length; f++) {
            faces[faces[face]['enables'][f]]['allowed'] = true
            }
    
            switch(Math.floor(Math.random() * 3)) {
            case 0: dir = "";  break
            case 1: dir = "'"; break
            case 2: dir = "2"; break
            default: break;
            }
    
            scramble += `${face}${dir} `
        }

        setScramble(scramble)
    }

    useEffect(() => {
        !scramble && scrambleHandler()
    }, [scramble])

    const value = {
        scramble,
        scrambleHandler
    }

    return (
        <ScrambleContext.Provider value={value}>
            {children}
        </ScrambleContext.Provider>
    )
}
