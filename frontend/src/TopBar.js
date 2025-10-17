import './Home.css'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyDiv = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

function TopBar(){

    const navigate = useNavigate();

function handleClick(e){
    e.preventDefault();
    navigate(`/`);
}

    return(
    <div className='topBar'>
        <div className="topItem logo">Job Aggregator</div>
        <MyDiv className='topItem search' onClick={handleClick}>Search</MyDiv>
    </div>
    )
}

export default TopBar;