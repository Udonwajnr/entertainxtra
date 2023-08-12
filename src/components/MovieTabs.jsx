import {BsPlayCircle,BsListUl} from 'react-icons/bs'

export default function MovieTab({toggleTab, toggleState}){
    return (
        <>
            <div className="grid grid-cols-2 justify-center lg:justify-between items-center gap-x-2">
                <button
                className={toggleState === 1 ? "tabs flex items-center justify-center gap-x-1 active-tabs bg-red p-2 lg:p-1 lg:text-sm text-white" : "tabs  p-2 flex items-center gap-x-1 bg-white lg:p-1 lg:text-sm"}
                onClick={() => toggleTab(1)}
                >
                    <BsPlayCircle/>
                    Movies
                </button>
                <button
                className={toggleState === 2 ? "tabs flex items-center justify-center gap-x-1 active-tabs bg-red text-white p-2 lg:p-1 lg:text-sm" : "tabs flex items-center  p-2 gap-x-1 bg-white lg:p-1 lg:text-sm"}
                onClick={() => toggleTab(2)}
                >
                    <BsListUl/>
                TV Series
                </button>
            
            </div>
        </>
    )
}