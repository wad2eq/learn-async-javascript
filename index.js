// create simple execution

function DoSomething(task, timeDelay, callBack) {
  console.log('started' + task);
  setTimeout(() => {
    var data = task + 'completed';
    callBack(data);
  }, timeDelay);
}

DoSomething('task1', 1000, function (dataToLog) {
  console.log(dataToLog);
});

DoSomething('task2', 1000, function (dataToLog) {
  console.log(dataToLog);
});
