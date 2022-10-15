let vowelCount = document.getElementById('vowelCount');
function countVowel(str) {
    str = str.toLowerCase();
    let vowArr = ['a', 'e', 'i', 'o', 'u'],
        counter = 0;

    for (let letter of str) {
        if (vowArr.includes(letter)) {
            counter++;
            vowelCount.classList.add('blink');
        }
        else {
            vowelCount.classList.remove('blink');
        }
    }
    vowelCount.innerHTML = counter;
}