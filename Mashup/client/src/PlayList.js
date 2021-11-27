import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import "./app.css";

const PlayList = () => {
    const {dropDownPlayList,setDropDownPlayList} = useContext(TrackContext)
    

    return (
        <div className="d-flex m-2 align-items-center justify-content-center "
        style={{ cursor: "pointer" }}>
            {
                dropDownPlayList.map((data,index)=>(
                    <div className="ml-3 row bg-info rounded  " key={index}>
                    <h1 className="h5 d-flex align-items-center justify-content-center">{data.artist}</h1>
                    <h1 className="text-muted h6 d-flex align-items-center justify-content-center">{data.title}</h1>
                    <img className="d-flex align-items-center justify-content-center" src={data.albumUrl} alt="url album"/>
                    <button className="btn-warning btn-sm d-flex align-items-center justify-content-center" onClick={()=> {

                        setDropDownPlayList(dropDownPlayList.filter(song=> song.uri !== data.uri))

                        }}>Supprimer</button>
                    </div>
                ))
            }
            {console.log("dropDownList",dropDownPlayList)}
            
        </div>
        
    )
    
}

export default PlayList;