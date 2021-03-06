import { useState } from "react"

const useUpdate = () => {
    const [isUpdate, setIsUpdate] = useState(false)
    const [id, setId] = useState('')
    
    // hendle UPDATE
    const hendleUpdate = id => {
        setIsUpdate(true)
        setId(id)
    }
    return {id, isUpdate, setIsUpdate, hendleUpdate}
}

export default useUpdate;