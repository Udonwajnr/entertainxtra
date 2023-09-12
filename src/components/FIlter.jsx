export default function Filter({filterOptionsButton,filterYearButton}){
    return(
        <>
                <div className="bg-light-black flex flex-col gap-y-6 p-5 mt-4">
                {/* genre */}
                <div className="flex gap-x-10">
                    <label htmlFor="" className="text-white text-xl">Genre:</label>
                    <div className="text-white flex items-center gap-x-5 flex-wrap">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'Action'} onChange={filterOptionsButton} />
                            Action
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'Comedy'} onChange={filterOptionsButton}/>
                            Comedy
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox"  value={' Romance'} onChange={filterOptionsButton}/>
                            Romance
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'thriller'} onChange={filterOptionsButton}/>
                            Thriller
                        </div>
                    </div>
                </div>

                {/* year */}
                <div className="flex gap-x-10 ">
                    <label htmlFor="" className="text-white text-xl">Year:</label>
                    <div className="text-white flex flex-wrap items-center gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'2020'} onChange={filterYearButton}/>
                            2020
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'2021'} onChange={filterYearButton}/>
                            2021
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={"2022"} onChange={filterYearButton}/>
                            2022
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'2023'} onChange={filterYearButton}/>
                            2023
                        </div>
                    </div>
                </div>

                {/* Quality */}
                <div className="flex gap-x-10">
                    <label htmlFor="" className="text-white text-xl">Quality:</label>
                    <div className="text-white flex flex-wrap items-center gap-x-5">
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'all'} />
                            All
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'hd'} />
                            HD
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'sd'} />
                            SD
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" value={'cam'} />
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