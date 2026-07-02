interface Props {
    search:string;
    setSearch:(value:string)=>void;
}


export default function LeadFilters({
    search,
    setSearch
}:Props){

    return (

        <div className="mb-6">

            <input
                value={search}
                onChange={(e)=>
                    setSearch(e.target.value)
                }
                placeholder="Search leads..."
                className="
                w-full
                rounded-lg
                border
                p-3
                outline-none
                focus:ring-2
                "
            />

        </div>

    );
}