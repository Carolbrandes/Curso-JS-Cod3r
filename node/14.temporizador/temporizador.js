// vamos instalar o schedule: npm i node-schedule@1.3.0 -E I

const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function () {
        console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
        tarefa1.cancel()
        console.log('Cancelando a tarefa 1!')
}, 2000)


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1,5))
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
                console.log('Executando tarefa 2!', new Date().getSeconds())
        
})