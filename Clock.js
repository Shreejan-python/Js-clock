const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() =>{
    let a = new Date;
    let total_time = a.getHours() + ` : ` + a.getMinutes() + ` : ` + a.getSeconds() + ' on date ' + a.toLocaleDateString(undefined, options)
    document.getElementById('time').innerHTML = total_time
}, 1000);
