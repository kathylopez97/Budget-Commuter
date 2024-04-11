const moment = require('moment');

//From https://momentjs.com/
//using moment package to format the date
const timeFormat = (date) => {
    //'Could be MMM Do YYYY'
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};
module.exports = timeFormat;