import "./Body.css"
import AIimage from "../assets/AI.png"
import TSimage from "../assets/ts.png"
import designSystemImage from "../assets/designsystem.png"
import maletaImage from "../assets/maleta.png"
import gettingJobImage from "../assets/gettingjob.png"
import { CardDiv } from "../Elements/CardDiv"
import { data } from "../Elements/CardObj"
import { useState, useEffect } from "react"


export const Body = ({filtered,SetFiltered})=>{

    const [limit,SetLimit] = useState(6)
        useEffect(()=>{

        const handleResizing = ()=>{
             if(window.innerWidth >= 1400){
            SetLimit(prev => prev < 9 ? 9 : prev) 
        }

        }
        handleResizing()
        window.addEventListener('resize',handleResizing)

        return ()=>window.removeEventListener('resize',handleResizing)

    },[])
    const filtering = (category)=>{
         const result = data.filter(el=> el.category.includes(category))
         SetFiltered(result)
         console.log(result);
         
        
    }
    const filterAll = ()=>{
        SetFiltered(data)
        
    }






    return(
        <main>
            <section className="section-left-conteiner">
                <h3 className={`section-left-conteiner-title ${(limit >= 28 || filtered.length === 0) && "btn-limit-close"}`}>Courses</h3>
                {filtered.slice(0, limit).map(el=>{
                    return <CardDiv data={el} key={el.id} />
                })}
                <div className={`popup-nocard ${(filtered.length === 0) && 'popup-nocard-open'}`}>
                    <h3>Course not found</h3>
                </div>
                <div className={`btn-limit ${(limit >= 28 || filtered.length === 0) && "btn-limit-close"}`}>
                    <button onClick={()=>SetLimit(limit + 6)}>Load more</button>
                </div>
            </section>
            <section className="section-right-conteiner">
                <div className="popular-topics-conteiner">
                    <div className="popular-topics">
                    <h3>Popular Topics</h3>
                    <div className="popular-topics-tags">
                        <button className='body-tag-cybersecurity' onClick={() => filtering("Cybersecurity")}>Cybersecurity</button>
                        <button className='body-tag-mobile' onClick={() => filtering("Mobile")}>Mobile</button>
                        <button className='body-tag-frontend' onClick={() => filtering("Frontend")}>Frontend</button>
                        <button className='body-tag-devops' onClick={() => filtering("DevOps")}>DevOps</button>
                        <button className='body-tag-react' onClick={() => filtering("React")}>React</button>
                        <button className='body-tag-backend' onClick={() => filtering("Backend")}>Backend</button>
                        <button className='body-tag-data-science' onClick={() => filtering("Data Science")}>Data Science</button>
                        <button className='body-tag-career' onClick={() => filtering("Career")}>Career</button>
                        <button className='body-tag-productivity' onClick={() => filtering("Productivity")}>Productivity</button>
                        <button className='body-tag-all' onClick={filterAll}>All</button>

                    </div>
                    <div className="body-tags"></div>
                    </div>
                </div>
                <div className="trending-articles-conteiner">
                    <div className="trending-articles">
                        <h3>Trending Articles</h3>
                        <div className="news-conteiner">
                            <img src={AIimage} alt="" />
                            <div className="news-content">
                                <span>The future of AI in software development</span>
                                <p>Pedro Alves</p>
                            </div>
                        </div>
                        <div className="news-conteiner">
                            <img src={TSimage} alt="" />
                            <div className="news-content">
                                <span>Typescript tips that will improve your code</span>
                                <p>Lucas Silva</p>
                            </div>
                        </div>
                        <div className="news-conteiner">
                            <img src={designSystemImage} alt="" />
                            <div className="news-content">
                                <span>Building a design system from scratch</span>
                                <p>Carla Mendes</p>
                            </div>
                        </div>
                        <div className="news-conteiner">
                            <img src={maletaImage} alt="" />
                            <div className="news-content">
                                <span>Docker tips for faster devopment</span>
                                <p>Anna Lee</p>
                            </div>
                        </div>
                        <div className="news-conteiner">
                            <img src={gettingJobImage} alt="" />
                            <div className="news-content">
                                <span>How I get my first developer job</span>
                                <p>Bruno Rocha</p>
                            </div>
                        </div>
                    
 

                    </div>
                </div>
                <div className="newsletter-conteiner">
                    <div className="newsletter-content">
                        <div className="newsletter-text">
                            <span>Subscribe to our newsletter</span>
                            <p>Get the lastest articles and recources sent to your inbox</p>
                                <form className="newsletter-input">
                                    <input type="text" className="newsletter-input-text" placeholder="Email" />
                                    <input type="submit" value="Subscribe" className="newsletter-input-submit"/>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
