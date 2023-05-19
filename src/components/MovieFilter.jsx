export default function MovieFilter(){
    return(
        <>
                <div className="bg-light-black flex flex-col gap-y-6 p-5 mt-4">
                {/* genre */}
                <div className="flex gap-x-10">
                    <label htmlFor="" className="text-white text-xl">Genre:</label>
                    <div className="text-white flex items-center gap-x-5 flex-wrap">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            Action
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            Comedy
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            Romance
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            Thriller
                        </div>
                    </div>
                </div>

                {/* year */}
                <div className="flex gap-x-10 ">
                    <label htmlFor="" className="text-white text-xl">Year:</label>
                    <div className="text-white flex flex-wrap items-center gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            2020
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            2021
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            2022
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            2023
                        </div>
                    </div>
                </div>

                {/* Quality */}
                <div className="flex gap-x-10">
                    <label htmlFor="" className="text-white text-xl">Quality:</label>
                    <div className="text-white flex flex-wrap items-center gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            All
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            HD
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            SD
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            CAM
                        </div>
                    </div>
                </div>

                
                {/* country */}
                <div className="flex gap-x-10">
                    <label htmlFor="" className="text-white text-xl">Country:</label>
                    <div className="text-white flex flex-wrap items-center gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            Nigeria
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            algeria
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            Califonia
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'action'} />
                            france
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}