import "./CardDiv.css"



export const CardDiv = ({data})=>{

    




    return(


            <>
            <div className="card-container">
                <img src={data.img} alt={data.category} />
                <div className="card-tag-container">
                    <span className={`tag-category-${data.category}`}>{data.category}</span>
                    <span className="tag-date">{data.date}</span>

                </div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <span>{data.author}</span>
            </div>
        </>
        
    )



}