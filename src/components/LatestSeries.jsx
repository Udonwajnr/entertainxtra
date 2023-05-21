import SeriesCard from "./SeriesCard"
export default function LatestSeries(){
    return(
       <section className="mt-20 px-8 lg:px-2">
            <h1 className="text-white text-3xl">Latest Series</h1>
            <div className="grid grid-cols-fluid gap-4 sm:grid-cols-2 mt-5">
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
                <SeriesCard/>
            </div>
        </section>

    )
}