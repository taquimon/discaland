var baseUrl = 'http://discald.com/provider/'
// var baseUrl = 'http://provider.local/'

function getCurrentDate() {
    var d = new Date();
       var dateString = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
       ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) +
       ":" + ("0" + d.getSeconds()).slice(-2);

    return dateString;
}