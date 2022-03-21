// used to clear the timer.
let timerID;
const data = [
    {
        question: "How does music say goodbye?",
        answer: "audios!" 
    },
    {
        question: "Why did Spider-Man's evil twin fail his driver's test?",
        answer: "He was a bad parallel Parker."
    },
    {
        question: "What do you call a factory that makes okay products?",
        answer: "A satisfactory."
    },
    {
        question: "What happens if someone slaps you at a high frequency?",
        answer: "It Hertz."
    },
    {
        question: "What happens if you spray deodorant in your mouth?",
        answer: "You get a weird axe scent."
    },
    {
        question: "Why aren't koalas actual bears?",
        answer: "Because they don't meet the koalafications."
    }

]

// displays all the questions and answers on the webpage.
$(".card").each((index) => {
    $("h3:eq(" + index + ")").html(data[index].question);
    $("p:eq(" + index + ")").html(data[index].answer);
    // Hides all the answers be default.
    $("p:eq(" + index + ")").toggle();

})

$("button").click(function() {
    let $obj = $(this);
    let pTag = $obj.prev();
    // toggles the answer displaying or not.
    $(pTag).toggle();
    // Changes the button text accordingly.
    if($(pTag).css('display') === 'none') {
        $obj.html("Show answer");
        clearTimeout(timerID);

    } else {
        $obj.html("Hide answer");
        timerID = setTimeout(hideAnswer, 5000);
    }
function hideAnswer() {
    pTag.toggle();
    $obj.html("Show answer");
}
})