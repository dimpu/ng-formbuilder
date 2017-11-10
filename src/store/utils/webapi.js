import forms from '../data/forms.json';
import user from '../data/user.json';
import firebase from '../../config';
import uuid from 'uuid';

export const fetchForms = (userId) => {
    var database = firebase.database().ref().child("forms")

    return new Promise(resolve => {
        database.on('value', (forms) => {
            resolve(forms.val());
        });
    });
}

export const logIn = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

export const createForm = (formData = {}) => {
    var updates = {};
    updates['/forms/' + formData.id] = formData;
    return firebase.database().ref().update(updates);
}

export const deleteForm = (formData) => {
    return new Promise(resolve => {
        firebase.database().ref('/forms/' + formData.id).remove(() => {
            resolve({
                state: 'Success'
            });
        });
    });
}

export const addField = (fieldData = {}) =>  {
    console.log(fieldData);
    if (!fieldData) return;
    fieldData.id = fieldData.id || uuid(); 
    return firebase.database().ref('fields/' + fieldData.id).set(fieldData);
}

export const updateField = (fieldData = {}) =>  {
    var updates = {};
    updates['/forms/' + fieldData.id] = fieldData;
    return firebase.database().ref().update(updates);
}

export const deleteField = (fieldData = {}) => {
    return new Promise(resolve => {
        firebase.database().ref('/fields/' + fieldData.id).remove(() => {
            resolve({
                status: 'Success'
            });
        })
    });
}

export const fetchFields = (formId) => {
    var database = firebase.database().ref().child("fields")
    .orderByChild("formId").equalTo(formId);
    return new Promise(resolve => {
        database.on('value', (fields) => {
            resolve(fields.val());
        });
    });
}
