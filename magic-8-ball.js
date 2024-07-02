// first we need to create a function that will be called when the user clicks the button
function magic8Ball() 
{
    // next we need to get the value of the question that the user asked
    let question = document.getElementById('question').value;
    // if the user did not ask a question, we need to tell them to ask a question
    if (question == '')
    {
        // if the user did not ask a question, we need to tell them to ask a question
        document.getElementById('answer').innerHTML = '<p style = "color:red;">Please ask a question.</p>';
        return;
    }
    // if the user asked a question, we need to give them an answer
    // we will use a switch statement to give the user an answer
    // we will generate a random number between 0 and 9
    // we will use the random number to determine the answer
    // we will display the answer to the user
    var number = Math.floor(Math.random() * 10)
    
    // we will use a switch statement to give the user an answer
    switch (number) 
    {
        // if the random number is 0, we will display 'Yes - definitely.'
        case 0:
            
            document.getElementById('answer').innerHTML = 'Yes - definitely.';
            break;
        // if the random number is 1, we will display 'It is decidedly so.'
        case 1:
            document.getElementById('answer').innerHTML = 'It is decidedly so.';
            break;
        // if the random number is 2, we will display 'Without a doubt.'
        case 2:
            document.getElementById('answer').innerHTML = 'Without a doubt.';
            break;
        // if the random number is 3, we will display 'Reply hazy, try again.'
        case 3:
            document.getElementById('answer').innerHTML = 'Reply hazy, try again.';
            break;
        // if the random number is 4, we will display 'Ask again later.'
        case 4:
            document.getElementById('answer').innerHTML = 'Ask again later.';
            break;
        // if the random number is 5, we will display 'Better not tell you now.'
        case 5:
            document.getElementById('answer').innerHTML = 'Better not tell you now.';
            break;
        // if the random number is 6, we will display 'My sources say no.'
        case 6:
            document.getElementById('answer').innerHTML = 'My sources say no.';
            break;
        // if the random number is 7, we will display 'Outlook not so good.'
        case 7:
            document.getElementById('answer').innerHTML = 'Outlook not so good.';
            break;
        // if the random number is 8, we will display 'Very doubtful.'
        case 8:
            document.getElementById('answer').innerHTML = 'Very doubtful.';
            break;
        // if the random number is 9, we will display 'Signs point to yes.'
        case 9:
            document.getElementById('answer').innerHTML = 'Signs point to yes';
            break;
        // if the random number is anything else, we will display 'Error'
        default:
            document.getElementById('answer').innerHTML = 'Error';
            break;

    }
}
