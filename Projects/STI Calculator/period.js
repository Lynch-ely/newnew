// PERIOD GRADE
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


/* SETTINGS
const settingsIcon = document.querySelector('.sIcon');
settingsIcon.addEventListener('click', settings);

function settings(){
    document.getElementById('settingsIcon').classList.toggle('hide');
}
*/

// CALCULATION
const act = document.getElementById("act");
const actScore = document.getElementById('actScore');
const actItems = document.getElementById('actItems');
const tp = document.getElementById("tp");
const exam = document.getElementById("exam");

[act, actScore, actItems, tp, exam].forEach(pInput => {
    pInput.addEventListener("input", computePeriod);
})

function computePeriod(){
    aS = parseFloat(actScore.value) || 0;
    aT = parseFloat(actItems.value) || 0;
    t = parseFloat(tp.value) || 0;
    e = parseFloat(exam.value) || 0;


    // ACTIVITIES and QUIZZES
    let a = 0;
    if(aT > 0 && aS <= aT){
        let a = ((aS / aT) * 100);
        a = Number(a.toFixed(2));
        act.value = a;
    }else{
        act.value = "";
    }
    
    // TASK PERFORMANCE
    
    if(t < 0 || t > 100){
        tp.value = "";
        t = 0;
    }
    

    // MAJOR EXAMINATION
    let exGrade = 0;
    if(e >= 0 && e <= 70){
        exGrade = ((e / 70) * 100);
        exGrade = exGrade * 0.5;
        exGrade = Number(exGrade.toFixed(2));
    }else{
        exam.value = "";
    }
    
    console.log(`ACT: ${act.value} | TP: ${t} | EXAM: ${exGrade}`);
    let sg = ((act.value * 0.2) + (t * 0.3) + exGrade).toFixed(2);

    document.getElementById('period').textContent = sg;

    let periodTop = "";
    let pr = "";
    let pcolor = "";

    if(sg >= 97.50 && sg <= 100){
        periodTop = '1.00';
        pr = 'Excellent';
        pcolor = '#00c853';
    }else if(sg >= 94.50 && sg <= 97.49){
        periodTop = '1.25';
        pr = 'Very Good';
        pcolor = '#2979ff';
    }else if(sg >= 91.50 && sg <= 94.49){
        periodTop = '1.50';
        pr = 'Very Good';
        pcolor = '#2979ff';
    }else if(sg >= 86.50 && sg <= 91.49){
        periodTop = '1.75';
        pr = 'Very Good';
        pcolor = '#2979ff';
    }else if(sg >= 81.50 && sg <= 86.49){
        periodTop = '2.00';
        pr = 'Satisfactory';
        pcolor = '#ffe600';
    }else if(sg >= 76.00 && sg <= 81.49){
        periodTop = '2.25';
        pr = 'Satisfactory';
        pcolor = '#ffe600';
    }else if(sg >= 70.50 && sg <= 75.99){
        periodTop = '2.50';
        pr = 'Satisfactory';
        pcolor = '#ffe600';
    }else if(sg >= 65.00 && sg <= 70.49){
        periodTop = '2.75';
        pr = 'Fair';
        pcolor = '#ff9100';
    }else if(sg >= 59.50 && sg <= 64.99){
        periodTop = '3.00';
        pr = 'Fair';
        pcolor = '#ff9100';
    }else if(sg <= 59.49){
        periodTop = '5.00';
        pr = 'Failed';
        pcolor = '#ff1744';
    }

    document.getElementById('pg-conversion').textContent = periodTop;
    document.getElementById('pg-remarks').textContent = pr;
    document.getElementById('pg-remarks').style.color = pcolor;
    document.querySelector('.pg-result').style.borderColor = pcolor;

    
    
}