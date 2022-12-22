import { useRouter } from "next/router"


const FilteredEvents = () => {

    const { query } = useRouter()
    console.log(query);

    return (
        <div>
            <h1>Filtered Events</h1>
        </div>
    )
}

export default FilteredEvents