import {useEffect, useState} from "react";

const usePerf = (userId) => {
    const [perf, setPerf] = useState([])

    useEffect(  async () => {
        const url = `http://localhost:3000/user/${userId}/performance`
        const resp = await fetch(url)
        const data = await resp.json()
        const perfData = data.data
        setPerf(perfData)

    }, [])

    return perf
}

export default usePerf