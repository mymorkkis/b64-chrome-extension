document.getElementById("encode-input").addEventListener("input", e => {
    document.getElementById("encode-input").className = null;
    document.getElementById("decode-input").value = window.btoa(e.target.value)
});

document.getElementById("decode-input").addEventListener("input", e => {
    const encodeInputField = document.getElementById("encode-input")
    encodeInputField.className = null;
    try {
        encodeInputField.value = window.atob(e.target.value);
    } catch {
        encodeInputField.className = "error"
        encodeInputField.value = "Invalid Base64 Encoding";
    }
});

document.getElementById("encode-input").addEventListener("focus", e => e.target.select())

document.getElementById("decode-input").addEventListener("focus", e => e.target.select())
