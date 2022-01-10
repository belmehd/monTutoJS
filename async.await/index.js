const btnJob = document.getElementById('btn-job');

const candidat = {
    isProgrammer : true,
    isCool : true,
}

btnJob.addEventListener('click', applyToJob);

function applyToJob() {
    console.log('La décision est en cours');
    startDecisionProcess()
    .then(result => {
        console.log('result', result);
    })
    .catch((err) => {
        console.log('err', err);
    });
    console.log('juste après startDecisionProcess');
}

function startDecisionProcess() {
    return new Promise((resolve, reject) => {
        console.log("Recruteur - Pendant ce temps je reçoit d'autres candidats");
        setTimeout(() => {
            if (candidat.isProgrammer && candidat.isCool) {
                console.log('avant le resolve');
                resolve('Recruteur - Bienvenue dans notre entreprise')
            } else {
                console.log('avant le reject');
                reject(`Recruteur - Malgré tout l'interêt  de votre candidature bla bla`)
            }
        }, 2000);
    })
}

console.log('Après la function applyToJob');