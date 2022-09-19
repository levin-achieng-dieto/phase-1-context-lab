// /* Your Code Here */
const employeeRecord =["Gray", "Worm", "Security", "1"]

function createEmployeeRecord(employeeRecord){
    const testEmployee = {
        timeInEvents: [],
        timeOutEvents: []
    }

    testEmployee.firstName = employeeRecord[0];
    testEmployee.familyName = employeeRecord[1];
    testEmployee.title = employeeRecord[2];
    testEmployee.payPerHour = employeeRecord[3]

    return testEmployee
}

function createEmployeeRecords(employeesRecord){
    return employeesRecord.map(employeeRecord => 
        createEmployeeRecord(employeeRecord))
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate(date){
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === date);
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === date)
    return ((outEvent.hour - inEvent.hour) / 100)
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.apply(this, [date]) * this.payPerHour
}

function findEmployeeByFirstName(employee, targetName){
    for( let i=0; i<employee.length; i++){
        if(employee[i].firstName === targetName){
            return employee[i]
        }
    }
}

function calculatePayroll(empRecords){
    let payRoll = []
    empRecords.forEach(element => {
        payRoll.push(allWagesFor.call(element))
    });
    return payRoll.reduce((a,b) => {return a+b})
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}