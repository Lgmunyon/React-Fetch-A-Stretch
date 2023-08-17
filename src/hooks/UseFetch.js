import React from 'react'

function UseFetch(props) {
    const [stretchData, setStretchData] = React.useState({})
    const [selection, setSelection] = React.useState(0)
    
    //Passing props to cardItem and cardDescription
    
    React.useEffect(function() {
        fetch('https://fetch-a-stretch-api-git-main-lgmunyon.vercel.app/api/Hand%20Stretch')
        .then(res => res.json())
        .then(data => setStretchData(data))
    }, [selection])

    return (
        <div>
        <pre>{JSON.stringify(stretchData, null, 2)}</pre>
        <h2>The count is {selection}</h2>
        <button onClick={() => setSelection(prevCount => prevCount + 1)}>Add</button>
    </div>
    )
}

export { UseFetch }


// // const [starWarsData, setStarWarsData] = React.useState({})
    
// // console.log("Component rendere")

// // fetch("https://swapi.dev/api/people/1")
// //     .then(res => res.json())
// //     .then(data => setStarWarsData(data))


// //     <div>
// //     <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
// // </div>

// export {UseFetch}

// import React from 'react';
// import { useFetcher } from "react-router-dom";

// function useFetch() {
//     const fetcher = useFetcher();

//     React.useEffect(() => {
//         setTimeout(() => {
//             fetcher.load('https://swapi.dev/api/people/1')
//         }, 2000)
//     }, [])
// }

// export {useFetch}