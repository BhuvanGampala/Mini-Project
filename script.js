// Event listener for color selection
//document.getElementById('color-select').addEventListener('change', function() {
//    const shirt = document.getElementById('shirt');
//    shirt.style.backgroundColor = this.value;
//});

function changePattern(pattern) {
    const patternSelect = document.getElementById('pattern-select');
    patternSelect.value = pattern;
    patternSelect.dispatchEvent(new Event('change')); // Trigger change event
}
// Event listener for pattern selection

document.getElementById('pattern-select').addEventListener('change', function() {
    const shirt = document.getElementById('shirt');
    const selectedPattern = this.value;
    let patternUrl = '';

    // Mapping patterns to URLs
    switch(selectedPattern) {
        case 'p1':
            patternUrl = './images/i1.png';
            break;
        case 'p2':
            patternUrl = './images/i2.png';
            break;
        case 'p3':
            patternUrl = './images/i3.png';
            break;
        case 'p4':
            patternUrl = './images/i4.png';
            break;
        case 'p5':
            patternUrl = './images/i5.png';
            break;
        case 'p6':
            patternUrl = './images/i6.png';
            break;
        case 'p7':
            patternUrl = './images/change3.jpg';
            break;
        case 'p8':
            patternUrl = './images/i8.png';
            break;
        case 'p9':
            patternUrl = './images/change1.jpg';
            break;
        case 'p10':
            patternUrl = './images/i10.jpg';
            break;
        case 'p11':
            patternUrl = './images/i11.jpg';
            break;
        case 'p12':
            patternUrl = './images/i12.jpg';
            break;
        case 'p13':
            patternUrl = './images/change2.jpg';
            break;
        case 'p14':
            patternUrl = './images/change4.jpg';
            break;
        case 'p15':
            patternUrl = './images/change5.jpg';
            break;
        default:
            patternUrl = './images/default.png'; // Fallback pattern
    }

    // Update shirt background pattern
    shirt.style.backgroundImage = `url(${patternUrl})`;
});
