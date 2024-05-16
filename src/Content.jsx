import { useEffect, useRef, useState } from "react"
import syria from './syria.json'
import Info from "./Info"
export default function Content() {



    const inp = useRef(null)

    const [notFound, setNotFound] = useState(false)
    const [countryName, setCountryName] = useState("syria")
    const [country, setCountry] = useState(syria[0])



    let callSuffix = (country.idd.suffixes.length > 1) ? "" : country.idd.suffixes[0]



    useEffect(() => {
        console.log("started useEffect!!")
        if (!inp.current.value) {
            console.log("empty")
            return
        }

        async function getInfo() {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            console.log(res)
            if (res.status === 200) {
                const data = await res.json()
                setNotFound(false)
                setCountry(data[0])
                console.log(data[0])
                return

            }
            else {
                console.log("not Found")
                setNotFound(true)
                console.log(notFound)
                return
            }
        }
        getInfo()

    }, [countryName])


    function handleClick() {
        if (!inp.current.value) {
            console.log("empty")
            return
        }
        if (inp.current.value.toLowerCase() === "israel") {
            window.alert("FREE PALESTINE ✌️!!!")
            inp.current.value = "palestine"
            setCountryName("palestine")
            // return
        } else {
            setCountryName(inp.current.value.toLowerCase())
        }
    }





    return (
        <div className="container">

            <div className="search">
                <input type="text"
                    name="country"
                    ref={inp}
                    placeholder="search country"
                />

                <button type="submit" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 488.4 488.4" xmlSpace="preserve">
                        <g>
                            <g>
                                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7    S381.9,104.65,381.9,203.25z" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>

            {/* <img src={country.flags.png} alt="" /> */}





            {notFound
                ?
                <div className="not-found">Please Enter a Country Name !</div>
                :

                <Info officialName={country.name.official}
                    nativeName={country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}
                    capital={country.capital}
                    flagPng={country.flags.png}
                    flagAlt={country.flags.alt}
                    area={country.area}
                    population={country.population}
                    currencies={Object.keys(country.currencies)}
                    languages={Object.values(country.languages)}
                    subRegion={country.subregion}
                    callCode={`${country.idd.root}${callSuffix}`}
                    googleMaps={country.maps.googleMaps}
                />
            }

        </div>

    )


}