import { Route, Routes } from 'react-router-dom'

import DSA from './components/index.jsx'
import initialData from './components/initialData.js'

function App() {
    let data = null
    const fetchData = localStorage.getItem('data')

    fetchData === null
        ? localStorage.setItem('data', JSON.stringify(initialData))
        : (data = JSON.parse(fetchData))

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DSA
                        data={data}
                        isHomeScreen={true}
                        selectedContentIndex={0}
                        is404={false}
                    />
                }
            />
            {data.content.map((contentData, index) => {
                return (
                    <Route
                        key={index}
                        path={contentData.contentPath}
                        element={
                            <DSA
                                data={data}
                                isHomeScreen={false}
                                selectedContentIndex={index}
                                is404={false}
                            />
                        }
                    />
                )
            })}
            <Route
                path="*"
                element={<DSA data={data} isHomeScreen={true} is404={true} />}
            />
        </Routes>
    )
}

export default App
