let aboutMe = '';
// let out = '';

$(document).ready(function() {
    $(document).on('keydown', startCollect);
});

function startCollect(e) {
    if (e.key == '`') {
        console.log('start typing commands');
        $(document).off('keydown', startCollect);
        $(document).on('keydown', collectSimbol);
    };
};

function collectSimbol(e) {
    if (e.key == 'Escape') {
        stopCollect();
    } else {
        aboutMe += e.key;
        console.log(aboutMe);
        if (aboutMe == '/activate mod') {
            $('#exampleModal').modal({
                show : true
            });
        };
        // else if (aboutMe == "alertShift('") {
        //         out += e.key;
        //         // console.log(out);
        //         if (out.length >= 1 && aboutMe == "alertShift('" + out + "'Shift)") {
        //             alert(out);
        //         };
        //     };
        if (aboutMe == "alertShift('hello'Shift)") {
            alert('hello');
        };
    };
};

function stopCollect() {
    console.log('stop');
    aboutMe = '';
    $(document).off('keydown', collectSimbol);
    $(document).on('keydown', startCollect);
};