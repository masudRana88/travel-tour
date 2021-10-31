import { useEffect, useState } from "react"

const useDestination = () => {
    const [destinations, setDestinations] = useState([]);

    // call api
    useEffect(() => {
        fetch('https://spooky-ghost-45637.herokuapp.com/destinations')
        .then(rsc => rsc.json())
        .then(data => setDestinations(data))
    }, [])
     return { destinations, setDestinations }
}

export default useDestination;