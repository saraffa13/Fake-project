import Box from './Box'
import './Body2.css'


const Body2 = () =>{
    return (
        <div className="main-body2">
            <h1 id="heading">Our Services</h1>
            <div id="div-box">
                <Box class="ox" id='Box1' name="Math" content="Section for maths"/>
                <Box class="ox" name="Physics" id='Box2' content="Section for physics"/>
                <Box class="ox" name="Chemistry" id='Box3'content="section for chemistry"/>
            </div>
        </div>
    )
}

export default Body2;
