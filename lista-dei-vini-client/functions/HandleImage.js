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

export const savePictureAndEditList = async(imageBase64, nagivation) => {
    createImage(imageBase64).then(() => 
    nagivation.push('EditList', { updating: false, base64: true }));
}

export function getImage() {
    const reqestSetting = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'/*'application/octet-stream'/*'multipart/form-data'*/ }, 
    }
    fetch(`http://${ipaddress}:8080/temp/image`, reqestSetting)
    .then((response) => {
        response.arrayBuffer().then((buffer) => {
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = arrayBufferToBase64(buffer);
        
            return imageStr;
          });
    }).then(data => console.log(data))
        // response.json(); })
    // .then(data => {
    //     let binary = '';
    //     let bytes = new Uint8Array(data);
    //     for(let i = 0; i < bytes.byteLength; i++) {
    //         binary += String.fromCharCode(bytes[i]);
    //     }
        
    //     return Base64.btoa(binary);
    // })

    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
      
        bytes.forEach((b) => binary += String.fromCharCode(b));
      
        return Base64.btoa(binary);
      };
}

const Base64 = {
    btoa: (input, binary)  => {
      let str = input;
      let output = '';
  
      for (let block = 0, charCode, i = 0, map = binary;
      str.charAt(i | 0) || (map = '=', i % 1);
      output += map.charAt(63 & block >> 8 - i % 1 * 8)) {
  
        charCode = str.charCodeAt(i += 3/4);
  
        if (charCode > 0xFF) {
          throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
  
        block = block << 8 | charCode;
      }
  
      return output;
    }
}
