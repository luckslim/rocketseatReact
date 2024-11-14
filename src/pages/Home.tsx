import { Play } from "phosphor-react";

export function Home() {
    return (
        <>
            <form action="">
                <div>
                    <h1>Pomodoro</h1>
                    <label htmlFor="task">vou trabalhar em </label>
                    <input id="task" />
                    <label htmlFor="minutesAmount">durante</label>
                    <input type="number" id="minutesAmount" />
                    <span>minutos.</span>
                </div>
                <>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
                </>
                <button type="submit"><Play size={24}/> Começar</button>
            </form>


        </>

    );
}