import ipaddress from '../ipaddress';

export function getAllItems(setListData, setLoading) {
    fetch(`http://${ipaddress}:8080/api/v1/list`)
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