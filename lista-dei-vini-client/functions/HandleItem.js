import ipaddress from './ipaddress';

export function getAllItems(setListData, setLoading) {
    fetch(`http://${ipaddress}:8080/api/v1/list-without-pic`)
        .then((response) => 
            response.json().then((json) => {
            setListData(json);
            console.log(json);
        }))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}

export function createItem(input) {
    console.log(input)
    const reqestSetting = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(input)
    }
    fetch(`http://${ipaddress}:8080/api/v1/new-item`, reqestSetting)
    .then((response) => 
        response.json())
}

export const createItemWithPic = async(input) => {
    const reqestSetting = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(input)
    }
    fetch(`http://${ipaddress}:8080/api/v1/new-item-with-pic`, reqestSetting)
    .then((response) => response.json());
    return new Promise(resolve => { resolve('Sent') });
}

export function updateItem(input) {
    console.log(input)
    const reqestSetting = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(input)
    }
    fetch(`http://${ipaddress}/api/v1/update/${originalItem.id}`, reqestSetting)
    .then((response) => 
        response.json())
}