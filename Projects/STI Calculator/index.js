function viewBtn() {
    const view = document.getElementById('view-table');
    const viewText = document.querySelector('.viewText');

    view.classList.toggle('hide');

    if(viewText.textContent === "VIEW GRADING SYSTEM"){
        viewText.textContent = "HIDE";
    }else{
        viewText.textContent = "VIEW GRADING SYSTEM";
    }
}

const prelim = document.getElementById("prelim");
const midterm = document.getElementById("midterm");
const prefi = document.getElementById("prefi");
const finals = document.getElementById("finals");


[prelim, midterm, prefi, finals].forEach(input => {
    input.addEventListener("input", computeGWA);
});

function computeGWA(){
    let p = parseFloat(prelim.value) || 0;
    let m = parseFloat(midterm.value) || 0;
    let pr = parseFloat(prefi.value) || 0;
    let f = parseFloat(finals.value) || 0;
    console.log(`Prelim: ${p} | Midterm: ${m} | Prefi: ${pr} | Finals: ${f}`);

    let gwaTop = '0.00';
    let gr = '--';
    let gwa = ((p * 0.2) + (m * 0.2) + (pr * 0.2) + (f * 0.4)).toFixed(2);
    document.getElementById('gwa').textContent = gwa;
    console.log(`GWA: ${gwa}`);

    if(gwa >= 97.50 && gwa <= 100){
        gwaTop = '1.00';
        gr = 'Excellent';
        gcolor = '#00c853';
    }else if(gwa >= 94.50 && gwa <= 97.49){
        gwaTop = '1.25';
        gr = 'Very Good';
        gcolor = '#2979ff';
    }else if(gwa >= 91.50 && gwa <= 94.49){
        gwaTop = '1.50';
        gr = 'Very Good';
        gcolor = '#2979ff';
    }else if(gwa >= 86.50 && gwa <= 91.49){
        gwaTop = '1.75';
        gr = 'Very Good';
        gcolor = '#2979ff';
    }else if(gwa >= 81.50 && gwa <= 86.49){
        gwaTop = '2.00';
        gr = 'Very Good';
        gcolor = '#2979ff';
    }else if(gwa >= 76.00 && gwa <= 81.49){
        gwaTop = '2.25';
        gr = 'Satisfactory';
        gcolor = '#ffe600';
    }else if(gwa >= 70.50 && gwa <= 75.99){
        gwaTop = '2.50';
        gr = 'Satisfactory';
        gcolor = '#ffe600';
    }else if(gwa >= 65.00 && gwa <= 70.49){
        gwaTop = '2.75';
        gr = 'Fair';
        gcolor = '#ff9100';
    }else if(gwa >= 59.50 && gwa <= 64.99){
        gwaTop = '3.00';
        gr = 'Fair';
        gcolor = '#ff9100';
    }else if(gwa <= 59.49){
        gwaTop = '5.00';
        gr = 'Failed';
        gcolor = '#ff1744';
    }

    document.getElementById('gwa-conversion').textContent = gwaTop;
    document.getElementById('gwa-remarks').textContent = gr;
    document.getElementById('gwa-remarks').style.color = gcolor;
    document.querySelector('.gwa-result').style.borderColor = gcolor;
}
