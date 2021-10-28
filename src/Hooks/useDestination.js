import { useEffect, useState } from "react"

const useDestination = () => {
    const [destinations, setDestinations] = useState([]);

    // call api
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/masudRana88/assignmentDB/master/travel-tour/destinations.js')
        .then(rsc => rsc.json())
        .then(data => setDestinations(data))
    }, [])
     return { destinations }
}

export default useDestination;