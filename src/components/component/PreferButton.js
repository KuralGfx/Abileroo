
import '../styles/buttonpref.css';


function ButtonPrefer(props) {
  const {onClick} = props;
  
      return (
          
            <button className="button-pref" onClick={onClick} >
              {props.label}</button>
      
    );

  }

export default ButtonPrefer;
    
