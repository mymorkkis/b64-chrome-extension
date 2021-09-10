document.getElementById("encode-input").addEventListener("input", e => {
    document.getElementById("encode-input").className = null;
    document.getElementById("decode-input").value = window.btoa(e.target.value)
});

document.getElementById("decode-input").addEventListener("input", e => {
    const encodeInput = document.getElementById("encode-input")
    encodeInput.className = null;
    try {
        encodeInput.value = window.atob(e.target.value);
    } catch {
        encodeInput.className = "error"
        encodeInput.value = "Invalid Base64 Encoding";
    }
});

document.getElementById("encode-input").addEventListener("focus", e => {
    const splitIndex = e.target.value.indexOf(":")
    if (splitIndex !== -1) {
        e.target.setSelectionRange(splitIndex + 1, e.target.value.length)
    } else {
        e.target.select()
    }
})

document.getElementById("decode-input").addEventListener("focus", e => e.target.select())
