import MovieCard from "./MovieCard";

export default function MovieTabBody({toggleTab, toggleState}){
    
    return(
        <>
            {/* tabs */}
                <div className="content-tabs mt-4">
                    <div
                    className={toggleState === 1 ? " content active-content bg-green-400 " : " content"}
                    
                    >
                        {/* movies */}
                        <div className="grid grid-cols-fluid gap-4 sm:grid-cols-2 ">
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                        </div>
                    </div>

                    <div
                    className={toggleState === 2 ? " content  active-content" : "content"}
                    >
                        {/* series */}
                        <div className="grid grid-cols-fluid gap-4 sm:grid-cols-2">
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                        </div>
                    </div>
                </div>
        </>
    )
}