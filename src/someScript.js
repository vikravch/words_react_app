import {useState} from "react";

export function useFunction(){
    const [userName, setUserName] = useState('user');
    console.log('Hello');
}

export async function someAsyncFunc(){
    return 'Success!!!';
}