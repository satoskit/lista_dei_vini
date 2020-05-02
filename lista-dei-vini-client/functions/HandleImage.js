import ipaddress from '../ipaddress';

export const createImage = async(base64) => {
    const reqestSetting = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: base64
    }
    await fetch(`http://${ipaddress}:8080/temp/new-image`, reqestSetting)
    .then((response) => 
        console.log(response.text()))
    return new Promise(resolve => { resolve('Sent') });
}
