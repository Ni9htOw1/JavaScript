var questionsEl = document.getElementsByClassName('question');
var result = [];
function checkAnswers() {
    for (var i = 0; i < questionsEl.length; i++) {
        var answers = questionsEl[i].querySelectorAll('input[type=radio]');
        result.push( checkOneAnswer(answers) );
    }
    printResult();
    result =[];
}
function checkOneAnswer(answers) {
    var result = null;
    var noAnswer = true;
    for (var i = 0; i < answers.length; i++) {
        var isTrue = (answers[i].getAttribute('data-true') !== null);
        if (answers[i].checked) {
            noAnswer = false;
            if (isTrue) {
                result = true;
            } else {
                result = false;
            }
        } 
    }
    if (noAnswer) {
        result = null;
    }
    return result;
}
function printResult() {
    var trueAnswers = 0;
    var falseAnswers = 0;
    var noAnswers = 0;
    for (var i = 0; i < result.length; i++) {
        if (result[i] === true) {
            trueAnswers++;
        } else if (result[i] === false) {
            falseAnswers++;
        } else if (result[i] === null) {
            noAnswers++;
        }
    }
    var all = trueAnswers + falseAnswers + noAnswers;
    var percent = Math.round((trueAnswers/all) * 100);
    var msg = 'Правильных ответов: ' + trueAnswers + ' (' + percent + '%)\n'
        + 'Неправильных ответов: ' + falseAnswers + '\n'
        + 'Без ответов: ' + noAnswers + '\n';
    alert(msg);
}