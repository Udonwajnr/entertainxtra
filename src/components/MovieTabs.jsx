import {BsPlayCircle,BsListUl} from 'react-icons/bs'

export default function MovieTab({toggleTab, toggleState}){
    return (
        <>
            <div className="flex lg:justify-between gap-x-3">
                <button
                className={toggleState === 1 ? "tabs flex items-center justify-center gap-x-1 active-tabs bg-red p-2 text-white" : "tabs  p-2 flex items-center gap-x-1 bg-white"}
                onClick={() => toggleTab(1)}
                >
                    <BsPlayCircle/>
                    Movies
                </button>
                <button
                className={toggleState === 2 ? "tabs flex items-center justify-center gap-x-1 active-tabs bg-red text-white p-2" : "tabs flex items-center  p-2 gap-x-1 bg-white"}
                onClick={() => toggleTab(2)}
                >
                    <BsListUl/>
                TV Series
                </button>
            
            </div>
        </>
    )
}