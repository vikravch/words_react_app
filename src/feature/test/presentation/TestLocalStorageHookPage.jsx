import React, {useRef} from 'react';
import {useLocalStorage} from "../../../general/hooks/useLocalStorage";

function TestLocalStorageHookPage() {
    const [userName, setUserName] = useLocalStorage("user_name", null);
    const userNameInput = useRef(null);

    const handleUpdateButtonClick = () => {
        console.log(userNameInput.current.value);
      setUserName(userNameInput.current.value);
    }

    return (
        <div>
            <h3>{userName || 'No user name'}</h3>
            <input ref={userNameInput} type="text"/>
            <button onClick={handleUpdateButtonClick}>Update name</button>
        </div>
    );
}

export default TestLocalStorageHookPage;