const moment = require('moment-business-days');
const formatDate = require('./formatDate');

moment.updateLocale('pt-BR', {
    holidays: ['16/06', '07/09'],
    holidayFormat: 'DD/MM',
});

const getBusinessDay = (index) => {
    const businessDay = moment(moment(), 'DD-MM-YYYY').monthBusinessDays();

    index = index.replace('°', '');

    if (index > businessDay.length || index < 0) {
        return 'error';
    }

    if (index === 'último') {
        return formatDate(businessDay[businessDay.length - 1]);
    }

    return formatDate(businessDay[index - 1]);
};

console.log(getBusinessDay('último'));

module.exports = getBusinessDay;
