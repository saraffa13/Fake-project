import './Box.css'

const Box = (props) =>{

    return( 
        <div id="box-body">
            <img id='img' src={props.img} />
            <h2 id='heading'>{props.name}</h2>
            <div id="content"><span>{props.content}</span></div>
        </div>
    )
}

export default Box;