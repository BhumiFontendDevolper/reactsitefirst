import movie from "../component/api/movie.json";

 const Netflix=()=>{
    // const name="Disney Land";
    // const  rating=" 5.5";
    // const summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem rem laboriosam fugiat, exercitationem voluptates ab dicta, labore quisquam cum aut maxime, esse sed quos! Suscipit eius veritatis vero rem."
  
    return(
       
    // <div className="se-parant">
    <>
        {movie.map((elm)=>{
return (
    
    <div className="card" key={elm.id} style={{backgroundColor:elm.color}}>
            <img src={elm.img_url} alt="" width={"100%"} height={"250px"} />
            <div className="cart-details">
            <h3>name: {elm.name} </h3>
            <h4>Rating :<span className={`rating ${elm.rating>=8.5?"suparhit":"Avarage"}`}>{elm.rating}</span></h4>
            <h4>Genre:{elm.genre}</h4>
            <h4>Casr:{elm.cast}</h4>
            
          <p>summary: {movie[0].description}</p>
      
          
            </div>
            <button><a href={elm.watch_url}>Watch now</a></button>
          </div>
         

);
        })}

</>
    );
  }
  // export default Netflix;