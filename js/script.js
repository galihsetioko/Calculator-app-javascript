getCharacter = document.querySelector('.character');
getColumn = document.querySelector('.result')
let objectOperasi = {
    operasi:'',
    angka1:'',
    angka2:'',
    response:''
}
getCharacter.addEventListener('click', function(e) {
    if (e.target.attributes.number) {
        if (objectOperasi.operasi != '') {
            objectOperasi.angka2 += e.target.innerHTML
            getColumn.innerHTML += objectOperasi.angka2[objectOperasi.angka2.length - 1]
        } else {
            objectOperasi.angka1 += e.target.innerHTML
            getColumn.innerHTML = objectOperasi.angka1
        }
    } if (e.target.attributes.code) {
        objectOperasi.operasi = e.target.innerHTML
        getColumn.innerHTML += objectOperasi.operasi
    } if (e.target.innerHTML == '=') {
        if (objectOperasi.operasi == "+") {
            objectOperasi.response = parseInt(objectOperasi.angka1) + parseInt(objectOperasi.angka2)
            getColumn.innerHTML = objectOperasi.response;
        } if (objectOperasi.operasi == "-") {
            objectOperasi.response = parseInt(objectOperasi.angka1) - parseInt(objectOperasi.angka2)
            getColumn.innerHTML = objectOperasi.response;
        } if (objectOperasi.operasi == "x") {
            objectOperasi.response = parseInt(objectOperasi.angka1) * parseInt(objectOperasi.angka2)
            getColumn.innerHTML = objectOperasi.response;
        } if (objectOperasi.operasi == "/") {
            objectOperasi.response = parseInt(objectOperasi.angka1) / parseInt(objectOperasi.angka2)
            getColumn.innerHTML = objectOperasi.response;
        }
        // for ( let x in objectOperasi ) {
        //     objectOperasi[x] = ''
        // }
        objectOperasi.angka1 = getColumn.innerHTML;
        objectOperasi.angka2 = '';
        objectOperasi.response = '';
        objectOperasi.operasi = ''
    } if ( e.target.innerHTML == 'c') {
        objectOperasi.angka1 = ''
        objectOperasi.angka2 = ''
        objectOperasi.operasi = ''
        getColumn.innerHTML = 0
    }
    console.log(objectOperasi)
})