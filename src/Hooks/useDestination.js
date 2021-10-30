import { useEffect, useState } from "react"

const useDestination = () => {
    const [destinations, setDestinations] = useState([]);

    // call api
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
        .then(rsc => rsc.json())
        .then(data => setDestinations(data))
    }, [])
     return { destinations, setDestinations }
}

export default useDestination;