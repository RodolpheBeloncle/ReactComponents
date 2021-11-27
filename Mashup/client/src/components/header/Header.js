import "./Header.css"
import mashup from "../../assets/mashup.png"

export const Header = () => {
    return (
        <header className="header">
            
            <section className="header-banner">
                 
                <div id="menuToggle">
    
                    <input type="checkbox" />
    
                    <span></span>
                    <span></span>
                    <span></span>
        
                    <ul id="menu">
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Info</li></a>
                        <a href="#"><li>Contact</li></a>               
                    </ul>
                </div>
                
                <div className="logo-container">
                    <img className="logo" src={mashup} alt=""/>
                    </div>
            </section>
        </header>
    )
}