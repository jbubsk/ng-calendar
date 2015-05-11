function AppService($log) {
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

    function getDaysOfMonth(year, month) {
        var days = [],
            daysInMonth = new Date(year, month + 1, 0).getDate(),
            weekIndex;

        for (var i = 1; i <= daysInMonth; i++) {
            weekIndex = new Date(year, month, i).getDay();
            days.push({
                index: i,
                weekIndex: weekIndex,
                name: getDayOfWeek(weekIndex)
            });
        }
        return days;
    }

    function getDaysWeeklyStructured(year, month) {
        var result = [],
            daysOfMonth = getDaysOfMonth(year, month),
            weekIndexOfFirstDay = daysOfMonth[0].weekIndex,
            haveToAddNextWeek = true,
            mode = 'pre',
            day,
            i;

        while (haveToAddNextWeek) {
            i = 1;
            for (i; i <= 7; i++) {
                if (mode === 'pre') {
                    if (weekIndexOfFirstDay === i || weekIndexOfFirstDay + 7 === 7) {
                        result.push(daysOfMonth.shift());
                        mode = 'current';
                    } else {
                        result.push({});
                    }
                } else if (mode === 'current') {
                    day = daysOfMonth.shift();
                    result.push(day || {});
                    mode = day ? 'current' : 'post';
                } else if (mode === 'post') {
                    result.push({});
                    haveToAddNextWeek = false;
                }
            }
        }

        return result;
    }

    function getNumberDaysOfMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }


    function getDayOfWeek(index) {
        var result = days.filter(function (day) {
            return day.index === index;
        });
        return result.length > 0 ? result[0].name : '';
    }

    function getMonthName(index) {
        var result = months.filter(function (month) {
            return month.index === index;
        });
        $log.debug_ext({
            monthIndex: index,
            monthName: result.length > 0 ? result[0].name : 'Error!'
        });
        return result.length > 0 ? result[0].name : '';
    }

    function getMonths() {
        return months;
    }

    function getCurrentDate() {
        var date = new Date();

        return {
            year: date.getFullYear(),
            month: date.getMonth()
        }
    }

    return {
        getMonths: getMonths,
        getMonthName: getMonthName,
        getDayOfWeek: getDayOfWeek,
        getNumberDaysOfMonth: getNumberDaysOfMonth,
        getDaysOfMonth: getDaysOfMonth,
        getDaysWeeklyStructured: getDaysWeeklyStructured,
        getCurrentDate: getCurrentDate
    }
}
module.exports = AppService;