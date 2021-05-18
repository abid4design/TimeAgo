let terms = [
    {
        time: 45,
        divide: 60,
        text: 'moins d\'une minute'
    },
    {
        time: 90,
        divide: 60,
        text: 'environ une minute'
    },
    {
        time: 45 *60,
        divide: 60,
        text: '%d minutes'
    },
    {
        time: 90 *60,
        divide: 60 * 60,
        text: 'environ une heure'
    },
    {
        time: 24 *60 * 60,
        divide: 60 * 60,
        text: '%d heure'
    },
    {
        time: 42 *60 * 60,
        divide: 24 * 60 * 60,
        text: 'environ un jour'
    },
    {
        time: 30 * 24 * 60 * 60,
        divide: 24 * 60 * 60,
        text: '%d jours'
    },
    {
        time: 45 * 24 * 60 * 60,
        divide: 24 * 60 * 60 * 30,
        text: 'environ un mois'
    },
    {
        time: 365 * 24 * 60 * 60,
        divide: 24 * 60 * 60 * 365,
        text: '%d mois'
    },
    {
        time: 365 * 1.5 * 24 * 60 * 60,
        divide: 24 * 60 * 60 * 365,
        text: 'environ un an'
    },
    {
        time: Infinity,
        divide: 24 * 60 * 60 * 365,
        text: '%d an'
    },
]
document.querySelectorAll('[data-ago]').forEach((node) => {
    function setText(){
        if(node.parentNode){
            let secondes = Math.floor(new Date().getTime() / 1000 - parseInt(node.dataset.ago, 10))
            let prefix = secondes > 0 ? 'Il ya ' : "Dans "
            let wording = ''
            secondes = Math.abs(secondes)
            let term = null
            for( term of terms){
                if(secondes <term.time){
                    break
                }
            }    
        
            node.innerText = prefix + term.text.replace('%d',Math.round(term.time / term.divide)) 
            let nextTick = secondes % term.divide
            if(nextTick === 0){
                nextTick = term.divide
            }
            window.setTimeout(() => {
                window.requestAnimationFrame(setText)
            }, nextTick * 1000)
        }
        
    }
    setText()
})