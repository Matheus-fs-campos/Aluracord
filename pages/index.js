function Titulo(props) {
    console.log(props.children);
    return(
        <>
            <h1>{props.children}</h1>

            <style jsx>{`
            h1 {
                color: red;
                font-size : 24px;
                font-weight : 600;
            }
            `}</style> 
        </>
    );
}

function HomePage() {
    return (
    <div>
        <Titulo>Boas vindas de volta!!</Titulo>
        <h2>Aluracord</h2>  
    </div>
    );
  }
  
  export default HomePage