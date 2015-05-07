module.exports = function () {
    var months = [
            {name: 'January', index: 0},
            {name: 'February', index: 1},
            {name: 'March', index: 2},
            {name: 'April', index: 3},
            {name: 'May', index: 4},
            {name: 'June', index: 5},
            {name: 'July', index: 6},
            {name: 'August', index: 7},
            {name: 'September', index: 8},
            {name: 'October', index: 9},
            {name: 'November', index: 10},
            {name: 'December', index: 11}
        ],
        days = [
            {index: 1, name: 'Monday'},
            {index: 2, name: 'Tuesday'},
            {index: 3, name: 'Wednesday'},
            {index: 4, name: 'Thursday'},
            {index: 5, name: 'Friday'},
            {index: 6, name: 'Saturday'},
            {index: 0, name: 'Sunday'}
        ];

    //todo
    function getDayOfWeek(){
        var result = days.filter(function (day) {
            return
        });
        return result;
    }

    return {
        getDaysForMonth: function (year, month) {
            var days = [],
                daysInMonth = new Date(year, month, 0).getDate();

            for (var i = 0; i < daysInMonth; i++) {
                days.push({index: i,name: ''});
            }
            return days;
        },
        getMonthName: function (index) {
            var result = months.filter(function (month) {
                return month.index === index;
            });
            return result.length > 0 ? result[0].name : '';
        },
        getMonths: function () {
            return months;
        }
    }
};