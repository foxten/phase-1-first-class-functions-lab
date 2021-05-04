// Code your solution in this file!
// function returnFirstTwoDrivers (drivers){
//     const var1 = function(drivers){
//         return drivers.slice(0,2)
//     }
//     return var1(drivers)
// }

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
};

const removeCurrentDriver = function (drivers, current){
    return drivers.filter(x => x !== current)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int1){
    return function(fare){
        return fare * int1;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, otherDriversFunction){
  return otherDriversFunction(drivers)
}