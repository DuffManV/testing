import {useState} from "react";
import getCityList from "../services/getCityList";

function CityList() {
    const [searchLine, setSearchLine] = useState([]);
    return (
        <>
            <input id="city-search"
                   type="text"
                   list="countrydata"
                   onChange={e => getCityList(e.target.value, setSearchLine)}

                   // onSubmit={}
            />
            <button>Узнать</button>
            <datalist id="countrydata">
                {
                    searchLine.map((item, index) => {
                            console.log(item);
                            return <option data-value={item} key={index}>{item.value.data.city}</option>
                        }
                    )
                }
            </datalist>
        </>
    )
}

export default CityList;

