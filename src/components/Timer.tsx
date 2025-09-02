import { useRef, useState } from "react";


const POMO_TIME_TOTAL = 40;
function Timer() {
    const [seconds, setSeconds] = useState(POMO_TIME_TOTAL);
    const [started, setStarted] = useState(false);
    const timerRef = useRef<number | null>(null);

    function calculateTime() {
        const minutesLeft = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return minutesLeft + ":" + String(secondsLeft).padStart(2, "0");
    }

    function startPomo() {
        if (timerRef.current) return;
        setStarted(true);
        timerRef.current = setInterval(() => {
            setSeconds(s => {
                if (s <= 1) {
                    clearInterval(timerRef.current as number);
                    timerRef.current = null;
                    setStarted(false);
                    setSeconds(POMO_TIME_TOTAL);
                    return 0;
                } return s - 1;
            })
        }, 1000);
    }

    function stopPomo() {
        setStarted(false);
        clearInterval(timerRef.current as number)
        timerRef.current = null;

    }
    return <>
        <div className="rounded-3xl flex flex-col items-center px-20 pt-10 pb-15 bg-[#9d4b4b]">
            <div className="navbar flex justify-between mb-5 text-base">
                <div className="px-2 py-1 bg-[#923737] rounded mr-1">Pomodoro</div>
                <div className="px-2 py-1 rounded mr-1">Short Break</div>
                <div className="px-2 py-1 rounded">Long Break</div>
            </div>
            <div className="timer py-1 text-7xl font-bold">{calculateTime()}</div>
            {!started && (<button className="bg-white px-5 py-2 rounded mt-4 text-[#923737]" onClick={startPomo}>START</button>)}
            {started && (<button className="bg-red-400 px-5 py-2 rounded mt-4 text-[#923737]" onClick={stopPomo}>STOP</button>)}
        </div>
    </>
}

export default Timer;