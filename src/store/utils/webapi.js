import forms from '../data/forms.json';
import user from '../data/user.json';
import firebase from '../../config';

export const fetchForms = (userId) => {

    var database = firebase.database().ref().child("forms").equalTo(userId, 'userId');
    
    return new Promise(resolve => {
        database.on('value', (forms) => {
            console.log(forms.val());
            resolve(forms.val());
        });
    });

    // return fetch('../data/forms.json').then((res)=>res.json());
}


export const logIn = () => {

    var provider = new firebase.auth.GithubAuthProvider();
  
    return firebase.auth().signInWithPopup(provider);

    // return firebase.auth().signInAnonymously()
    // return new Promise(resolve => { 
    //     resolve(user);
    // });
    // return fetch('../data/user.json').then((res) => res.json().body);
}

export const createForm  = (formData = {})  => {
    return firebase.database().ref().child("forms").push().set(formData);

    // return new Promise(resolve => {
    //     resolve({
    //         status: 'Success'
    //     });
    // });
}


export const deleteForm = () => {
    return new Promise(resolve => {
        resolve({
            status: 'Success'
        });
    }); 
}