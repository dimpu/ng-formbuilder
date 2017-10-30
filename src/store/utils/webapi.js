import forms from '../data/forms.json';
import user from '../data/user.json';


export const fetchForms = () => {
    return new Promise(resolve => { 
        resolve(forms);
    });

    // return fetch('../data/forms.json').then((res)=>res.json());
}


export const logIn = () => {
    return new Promise(resolve => { 
        resolve(user);
    });
    // return fetch('../data/user.json').then((res) => res.json().body);
}

export const createForm  = ()  => {
    return new Promise(resolve => {
        resolve({
            status: 'Success'
        });
    });
}


export const deleteForm = () => {
    return new Promise(resolve => {
        resolve({
            status: 'Success'
        });
    }); 
}