window.onload = () => {
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let cs = document.getElementById('centi_sec');

    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let reset = document.getElementById('reset');

    let clock = document.getElementById('clock');
    let out_clock = document.getElementById('out_clock');
    let min_clock = document.getElementById('min_clock');

    let start_min, start_sec, start_cs;
    let min_flag = true;
    let sec_flag = true;

    start.addEventListener('click', () => {
        start_cs = setInterval(() => {
            cs.innerText = parseInt(cs.innerText) + 1 > 9 ? parseInt(cs.innerText) + 1 : '0' + (parseInt(cs.innerText) + 1);
            if (cs.innerText === '99') {
                cs.innerText = '00';
                if (sec_flag) {
                    sec.innerText = parseInt(sec.innerText) + 1 > 9 ? parseInt(sec.innerText) + 1 : '0' + (parseInt(sec.innerText) + 1);
                    out_clock.style.background = `conic-gradient(#004ffa ${parseInt(sec.innerText)*1.67}%, #7bd3db 0 ${100 - (parseInt(sec.innerText)*1.66)}%)`;
                    sec_start();
                }
            }
            clock.style.background = `conic-gradient(#cce467 ${parseInt(cs.innerText)}%, #ffc750 0 ${100 - (parseInt(cs.innerText))}%)`;
            clock.innerText = parseInt(cs.innerText) > 9 ? parseInt(cs.innerText) : '0' + parseInt(cs.innerText);
        }, 10);
    });

    function sec_start() {
        sec_flag = false;
        start_sec = setInterval(() => {
            if (sec.innerText === '60') {
                sec.innerText = '00';
                if (min_flag) {
                    min.innerText = parseInt(min.innerText) + 1 > 9 ? parseInt(min.innerText) + 1 : '0' + (parseInt(min.innerText) + 1);
                    min_clock.style.background = `conic-gradient(#ff4800 ${parseInt(min.innerText)*1.67}%, #7bd3db 0 ${100 - (parseInt(min.innerText)*1.66)}%)`;
                    min_start();
                }
            }
            sec.innerText = parseInt(sec.innerText) + 1 > 9 ? parseInt(sec.innerText) + 1 : '0' + (parseInt(sec.innerText) + 1);
            out_clock.style.background = `conic-gradient(#004ffa ${parseInt(sec.innerText)*1.67}%, #7bd3db 0 ${100 - (parseInt(sec.innerText)*1.66)}%)`;
        },1000);
    };

    function min_start() {
        min_flag = false;
        start_min = setInterval(() => {
            if (min.innerText === '60') {
                min.innerText = '00';
            }
            min.innerText = parseInt(min.innerText) + 1 > 9 ? parseInt(min.innerText) + 1 : '0' + (parseInt(min.innerText) + 1);
            min_clock.style.background = `conic-gradient(#ff4800 ${parseInt(min.innerText)*1.67}%, #7bd3db 0 ${100 - (parseInt(min.innerText)*1.66)}%)`;
        },1000 * 60);
    };

    stop.addEventListener('click', () => {
        clearInterval(start_cs);
        clearInterval(start_sec);
        clearInterval(start_min);
        sec_flag = true;
        min_flag = true;
    });

    reset.addEventListener('click', () => {
        clearInterval(start_cs);
        cs.innerText = '00';
        clearInterval(start_sec);
        sec.innerText = '00';
        clearInterval(start_min);
        min.innerText = '00';
        min_clock.style.background = `conic-gradient(#ff4800 0%, #7bd3db 0 100%)`;
        out_clock.style.background = `conic-gradient(#004ffa 0%, #7bd3db 0 100%)`;
        clock.style.background = `conic-gradient(#cce467 100%, #ffc750 0%)`;
        clock.innerText = '00';
        sec_flag = true;
        min_flag = true;
    });
};