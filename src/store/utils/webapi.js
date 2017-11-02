import forms from '../data/forms.json';
import user from '../data/user.json';
import firebase from '../../config';

export const fetchForms = (userId) => {

    var database = firebase.database().ref().child("forms")
    //.equalTo(userId, 'userId');
    
    return new Promise(resolve => {
        database.on('value', (forms) => {
            console.log(forms);
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
    // Get a key for a new Post.
    var newFormKey = formData.id;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/forms/' + newFormKey] = formData;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);


    // return firebase.database().ref().child('forms').ref(formData.id).set(formData);

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