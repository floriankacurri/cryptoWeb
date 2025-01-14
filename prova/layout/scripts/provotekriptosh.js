const algorithmSelect = document.querySelector('#algorithm');
const span = document.querySelector('.voilet1 > span');

algorithmSelect.addEventListener('change', () => {
    const selectedAlgorithm = algorithmSelect.value;
    span.innerText = `Vendosni një çelës si input për algoritmin ${selectedAlgorithm}`;   
});


function encryptText() {
    const text = document.getElementById('originalContent').value;
    const key = document.getElementById('passcode').value;
    const algorithm = document.getElementById('algorithm').value;
    console.log(text, key, algorithm);
    
    if (!text || !key) {
        alert('Please enter both text and key!');
        return;
    }

    let encrypted;
    try {
        if (algorithm === 'AES') {
            encrypted = CryptoJS.AES.encrypt(text, key).toString();
        } else if (algorithm === 'DES') {
            encrypted = CryptoJS.DES.encrypt(text, key).toString();
        } else if (algorithm === 'TripleDES') {
            encrypted = CryptoJS.TripleDES.encrypt(text, key).toString();
        } else if (algorithm === 'RC4') {
            encrypted = CryptoJS.RC4.encrypt(text, key).toString();
        }
        document.getElementById('encryptedContent').innerText = encrypted;
    } catch (error) {
        alert('Error during encryption!');
    }

}

function decryptText() {
    const encryptedText = document.getElementById('originalContent').value;
    const key = document.getElementById('passcode').value;
    const algorithm = document.getElementById('algorithm').value;

    if (!encryptedText || !key) {
        alert('Please enter both encrypted text and key!');
        return;
    }

    let decrypted;
    try {
        if (algorithm === 'AES') {
            decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        } else if (algorithm === 'DES') {
            decrypted = CryptoJS.DES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        } else if (algorithm === 'TripleDES') {
            decrypted = CryptoJS.TripleDES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        } else if (algorithm === 'RC4') {
            decrypted = CryptoJS.RC4.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        }
        document.getElementById('decryptedContent').innerText = decrypted;
    } catch (error) {
        alert('Invalid encrypted text, key, or algorithm!');
    }
}
