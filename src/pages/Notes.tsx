import { CardNotes } from "../components/CardNotes";
import "../styles/NotesStyle.css";

export function Notes(){
    return(
        <>
            <div className="Container">
                <CardNotes />
            </div>
        </>
    )
}