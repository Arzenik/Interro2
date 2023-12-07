document.getElementById('button').addEventListener('click', () => {
    var yards = document.getElementById('yards').value;
    var meters = yards * 0.9144;
    document.getElementById('meters').value = meters.toFixed(2);
});
document.getElementById('button21').addEventListener('click', () => {
    var ht = document.getElementById('ht').value;
    var ttc = parseFloat(document.getElementById('ttc').value);
    ttc = ht * 0.21;
    document.getElementById('ht').value = ttc.toFixed(2);
});

document.getElementById('button10').addEventListener('click', () => {
    var ht = document.getElementById('ht').value;
    var ttc = parseFloat(document.getElementById('ttc').value);
    ttc = ttc * 1;
    document.getElementById('ttc').value = ttc.toFixed(2);
});