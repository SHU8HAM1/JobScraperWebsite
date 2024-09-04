import React, {useState} from 'react';
import './SearchBar.css';
import { useNavigate } from "react-router-dom";



const SearchBar = () => {

const [enabled, setEnabled] = useState(false);

const navigate = useNavigate();
const getFilteredCourses = (searchInput, courses) => {
    return courses.filter(course => course.name.includes(searchInput));
}

const [searchInput, setSearchInput] = useState("");

// const courses = [
//     {name: "CSCA08: Computer Science I"},
//     {name: "CSCA48:"},
//     {name: "CSCA20:"},
//     {name: "MATA67:"},
//     {name: "CSCB07:"},
//     {name: "MATB36:"},
//     {name: "MATB63:"},
//     {name: "STAB65:"},
//     {name: "STAC62:"},
//     {name: "MGEB01:"},
//     {name: "MGTA01:"},
// ]

// const filteredCourses = getFilteredCourses(searchInput, courses);

function handleFocus(){
    setEnabled(true);
}

function handleSubmit(e){
    e.preventDefault();
    const query = encodeURIComponent(searchInput);
    navigate(`/search/${query}`);
}

return(
    <div className='search-bar'>
        <div className='input-bar'>
        <form onSubmit={handleSubmit}>
            <input className='main-bar' type="text" name="name"
             placeholder='Enter Job Title or Keywords'
              onChange={e => setSearchInput(e.target.value)}
              onFocus={handleFocus}/>
            <button type="submit" name='' 
            className='submit'/>
        </form>
        </div>
        {/* {enabled && (
        <div className='result  s'>
            {filteredCourses.map(value => 
             <div className='result-slot' key={value.name}>{value.name}</div>)
            }
        </div>)} */}
    </div>
)
};

export default SearchBar;