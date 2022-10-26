import React, {useState} from 'react';
import './QuizForName.scss';



 export function QuizForName() {
        const [name, setName] = useState("");
      
        return (
            <div className="backgroundText">
          <form className="textArea">
            <label>Please enter your name before you start 
              <input className="inputSize"  id="rickInput"
                type="text" 
                onChange={() => {
                const rickInput = document.querySelector('#rickInput').value
                localStorage.setItem(`rickName`, rickInput)
                    }
                }
              />
            </label>
          </form>
          <div className="testButton">
          <a className="buttonClick" href="../Quiz">Start quiz!</a>
          </div>
          </div>
          
        );
      }

export default QuizForName;
