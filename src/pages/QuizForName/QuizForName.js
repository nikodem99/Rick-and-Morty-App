import React, {useState} from 'react';
import './QuizForName.scss';



 export function QuizForName() {
        const [name, setName] = useState("");
      
        return (
            <div>
          <form>
            <label>Please enter your name before you start:
              <input  id="rickInput"
                type="text" 
                onChange={() => {
                const rickInput = document.querySelector('#rickInput').value
                localStorage.setItem(`rickName`, rickInput)
                    }
                }
              />
            </label>
          </form>
          <a href="../Quiz">Start quiz!</a>
          </div>
        );
      }

export default QuizForName;
