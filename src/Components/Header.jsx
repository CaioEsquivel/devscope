import './Header.css'
import logo from '../assets/logo.png'
import person from '../assets/person.jpg'
import jsbanner from '../assets/jslogo.png'
import { useState } from 'react'
import { data } from '../Elements/CardObj'




export const Header = ({SetFiltered,SetPopupCard}) => {
    
    
    
    
    const [Open,SetOpen] = useState(false)
    const PopupOpen=()=>{
        SetOpen(!Open)
    }
    const [NavBool,SetNavBool] = useState(false)
    const NavPopup=()=>{
        SetNavBool(!NavBool)
    }
    const [BellBool,SetBellBool] = useState(false)
    const BellPopup=()=>{
        SetBellBool(!BellBool)
    }
    const [InputBool,SetInputBool] = useState(false)
    const InputPopup=()=>{
        SetInputBool(!InputBool)
    }




    const [inputValue,SetInputValue] = useState('')

    const inputFilter =()=>{
        const result = data.filter(el=>el.title.toLowerCase().includes(inputValue.toLowerCase()) || el.category.toLowerCase().includes(inputValue.toLowerCase()) )
        console.log(result);
        if(result.length === 0){
            SetPopupCard(true)
            SetFiltered([])
        }else{
            SetPopupCard(false)
            SetFiltered(result)
        }
        
    }



    return (
    <header className='header-container'>
        <img src={logo} alt="logo" className='header-logo' />
        <div className="header-input">
            <input type="text" placeholder='Search articles...' value={inputValue} onChange={(e)=>SetInputValue(e.target.value)}/>
            <button onClick={inputFilter}>
                <svg
                    className="header-input-search"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
        <nav className='header-nav'>
                <div className="nav-onPage">
                    <a href="#">Home</a>
                    <div className="nav-point"></div>
                </div>
            <a href="#">Categories</a>
            <a href="#">Trending</a>
            <a href="#">About</a>
            <a href="#">Resourses</a>

            <div className="header-nav-compact">

                <span onClick={NavPopup}><i class="ri-arrow-down-s-line"></i> More</span>

            <div className={`compact-container ${NavBool && "navOpen"}`}>
                <a href="#">Categories</a>
                <a href="#">Trending</a>
                <a href="#">About</a>
                <a href="#">Resourses</a>
            </div>
        </div>
        </nav>
        
        <div className="header-profile">

            <div className="search-mobile" onClick={InputPopup}>
                <i class="ri-search-line"></i>
                
            </div>

            <div className={`header-input-popup ${InputBool && "InputPopup"}`}>
                    <input type="text" placeholder='Search articles...' value={inputValue} onChange={(e)=>SetInputValue(e.target.value)}/>
                    <button  onClick={inputFilter}>
                        <svg
                            className="header-input-search"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            
            <div className={`header-input-closebg ${InputBool && "InputOpen"}`} onClick={InputPopup}>

                </div>

            
            <div className="notifitacion-popup-conteiner">
                <svg className="header-notification" viewBox="0 0 24 24" fill="none" onClick={BellPopup}>
                    <path
                        d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className={`notification-popup ${BellBool && "bellOpen"}`}>
                    <h3>Nenhuma notificação</h3>
                    <i class="ri-notification-off-fill"></i>

                </div>
                <div className={`header-notification-closebg ${BellBool && "bellOpen"}`} onClick={BellPopup}>

                </div>
            </div>

            <button className='header-person-button' onClick={PopupOpen}>
                <img src={person} alt="notification" className='header-person' />
            </button>
            

            <div className="popup-z-index">
                <div className={`header-profile-conteiner ${Open && "popup-open"}`}>

                    <div className="profile-img" >
                        <span>Seu perfil</span>
                        <button className='profile-close-btn' onClick={PopupOpen}><i class="ri-close-line"></i></button>
                    </div>

                    <div className="profile-courses-container">
                        <img src={jsbanner} alt="jscourse" />
                        <div className="profile-courses-content">
                            <div className="profile-tags">
                                <span className='profile-tag-one'>Em andamento</span>
                                <span className='profile-tag-two'><i class="ri-time-line"></i> 12 Horas restantes</span>
                            </div>
                            <span className='profile-course-name'>Javascript do Zero ao Avançado</span>
                            <p>Aprenda Javascript do básico ao avançado e construa projetos reais para seu portfólio.</p>
                            <div className="profile-course-bar"></div>
                            <div className="profile-course-description">
                                <div className="profile-course-description-element">
                                    <span><i class="ri-book-open-line"></i> 48 aulas</span>
                                </div>
                                <div className="profile-course-description-element element-border">
                                    <span><i class="ri-time-line"></i> 20h 30m</span>
                                </div>
                                <div className="profile-course-description-element">
                                    <span><i class="ri-signal-cellular-3-fill"></i> Intermediário</span>
                                </div>
                            </div>
                            <div className="profile-course-button">
                                <button className="profile-course-button-one"><i class="ri-play-large-line"></i> <span>Continuar aprendendo</span></button>
                                <button className="profile-course-button-two"><i class="ri-list-check"></i> <span>Ver conteúdo</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="pop-up-nav">
                    <a href="#">Meu perfil</a>
                    <a href="#">Meus cursos</a>
                    <a href="#">Configurações</a>
                    <a href="#">Sair <i class="ri-logout-box-r-line"></i></a>

                    </div>

                    

                </div>
                <div className={`header-profile-closebg ${Open && "popup-open"}`} onClick={PopupOpen}>

                </div>
            </div>
            
        </div>
    </header>
)

}