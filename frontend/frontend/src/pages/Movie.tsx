const Movie = (props : any):JSX.Element => {
    return (
        <>
            <div className="Movie">
                <img src={props.src} width="100px" height="100px"/>
            </div>
        </>
    );
}

export default Movie;