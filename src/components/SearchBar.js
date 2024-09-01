import React, {useState} from 'react';
import './SearchBar.css';
import { useNavigate } from "react-router-dom";



const SearchBar = () => {
let enabled = "visible";

const navigate = useNavigate();
const getFilteredCourses = (searchInput, courses) => {
    return courses.filter(course => course.name.includes(searchInput));
}

const [searchInput, setSearchInput] = useState("");

const courses = [
    {name: "CSCA08: Computer Science I"},
    {name: "CSCA48:"},
    {name: "CSCA20:"},
    {name: "MATA67:"},
    {name: "CSCB07:"},
    {name: "MATB36:"},
    {name: "MATB63:"},
    {name: "STAB65:"},
    {name: "STAC62:"},
    {name: "MGEB01:"},
    {name: "MGTA01:"},
]

const filteredCourses = getFilteredCourses(searchInput, courses);

function handleSubmit(e){
    e.preventDefault();
    navigate('/search');
}

return(
    <div className='search-bar'>
        <div className='input-bar'>
        <form onSubmit={handleSubmit}>
            <input className='main-bar' type="text" name="name"
             placeholder='Enter Course Code or Keywords'
              onChange={e => setSearchInput(e.target.value)}/>
            <button type="submit" name='' 
            className='submit' src='C:\Users\gargs\Desktop\create\web-app\my-app\public\search-im.png'/>
        </form>
        </div>
        <div className='results'>
            {filteredCourses.map(value => 
            <div className='result-slot' key={value.name}>{value.name}</div>)}
        </div>
    </div>
)
};

export default SearchBar;