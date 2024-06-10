function hitungTabung() {
    const radius = parseFloat(document.getElementById('radius-tabung').value);
    const height = parseFloat(document.getElementById('height-tabung').value);
    if (isNaN(radius) || isNaN(height)) {
        alert("Mohon masukkan nilai yang valid");
        return;
    }
    const luasAlas = Math.PI * Math.pow(radius, 2);
    const volume = luasAlas * height;
    document.getElementById('hasil-tabung').innerText = `Luas Alas: ${luasAlas.toFixed(2)} satuan², Volume: ${volume.toFixed(2)} satuan³`;
}

function hitungBola() {
    const radius = parseFloat(document.getElementById('radius-bola').value);
    if (isNaN(radius)) {
        alert("Mohon masukkan nilai yang valid");
        return;
    }
    const luasPermukaan = 4 * Math.PI * Math.pow(radius, 2);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('hasil-bola').innerText = `Luas Permukaan: ${luasPermukaan.toFixed(2)} satuan², Volume: ${volume.toFixed(2)} satuan³`;
}

function hitungLimas() {
    const side = parseFloat(document.getElementById('side-limas').value);
    const height = parseFloat(document.getElementById('height-limas').value);
    if (isNaN(side) || isNaN(height)) {
        alert("Mohon masukkan nilai yang valid");
        return;
    }
    const luasAlas = Math.pow(side, 2);
    const volume = (1 / 3) * luasAlas * height;
    document.getElementById('hasil-limas').innerText = `Luas Alas: ${luasAlas.toFixed(2)} satuan², Volume: ${volume.toFixed(2)} satuan³`;
}
