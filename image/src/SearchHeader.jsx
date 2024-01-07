import { useState } from "react";

function SearchHeader({ search }) {

    const [valueInput, setvalue] = useState("")
    const handleFormSubmit = (event) => {
        event.preventDefault();
  
        search(valueInput);
    };
    const handleChange=(event)=>{
        setvalue(event.target.value);    
    }
    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}>
                <label>Ne Baktın Kardeş</label>
                <input value={valueInput} onChange={handleChange} />
                {/* <div>{valueInput}</div> */}
            </form>
        </div>
    );
}

export default SearchHeader;