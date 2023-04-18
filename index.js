
let fiveLetterWords = ["allow","audit","avoid","black","blind","block","craft","cover","civil"];
let randomNum = Math.floor(Math.random()*(fiveLetterWords.length));

let word = fiveLetterWords[randomNum];
console.log(word);

document.getElementById("00").focus();

let i = 0; // 6
let j;

let inputFields = document.getElementsByTagName("input");
console.log(inputFields);
for(let i=0;i<inputFields.length;i++)
{
    inputFields[i].addEventListener("keyup",checkWord);
}

function checkWord(event)
{
    // && (document.getElementById(i+"4").value != null)
    if((event.key == "Enter")){
        j = 0;
        var inputWord ="";
        while(j<5 )
        {
            var inputValue = document.getElementById(i+""+j);
            inputWord += inputValue.value;
            if(inputValue.value == word[j])
            {
                inputValue.style.backgroundColor = "green";
            }
            else if(word.includes(inputValue.value))
            {
                inputValue.style.backgroundColor = "orange";
            }
            else
            {
                inputValue.style.backgroundColor = "grey";
            }
            j++;
        }
        i++;
        if(word == inputWord)
        {
            document.getElementById("answer").innerHTML = "Yayayy! You guessed the word";
            document.getElementById("answer").classList.add("addAnswerStyles");
            
            var emptyInputFields = (document.getElementsByTagName("input"));
            console.log(emptyInputFields);
            for(var ite = 0;ite<emptyInputFields.length;ite++)
            {
                if(!emptyInputFields[ite].value)
                {
                    emptyInputFields[ite].style.backgroundColor = "rgb(201, 201, 201)";
                    emptyInputFields[ite].removeEventListener("keyup",checkWord);
                    emptyInputFields[ite].disabled = true;
                }
            }
        }
        else if(i!=6){
            document.getElementById(i+"0").focus();
        }
        if(word != inputWord && i==6){
            document.getElementById("answer").innerHTML = "You lost, the word was \""+ word+"\"";
            document.getElementById("answer").classList.add("addAnswerStyles");
        }
        }
}

// onkeydown = (event) => {

//     if((event.key == "Enter") && (document.getElementById(i+"4").value != null)){
//     j = 0;
//     var inputWord ="";
//     while(j<5 )
//     {
//         var inputValue = document.getElementById(i+""+j);
//         inputWord += inputValue.value;
//         if(inputValue.value == word[j])
//         {
//             inputValue.style.backgroundColor = "green";
//         }
//         else if(word.includes(inputValue.value))
//         {
//             inputValue.style.backgroundColor = "orange";
//         }
//         else
//         {
//             inputValue.style.backgroundColor = "grey";
//         }
//         j++;
//     }
//     i++;
//     if(word == inputWord)
//     {
//         document.getElementById("answer").innerHTML = "Yayayy! You guessed the word";

//         removeEventListener(onkeydown);

//         // var inputFields = document.getElementsByTagName("input");
//         // for(var i = 0;i<inputFields.length;i++)
//         // {
//         //     inputFields[i].disabled = true;
//         // }
//     }
//     else{
//         document.getElementById(i+"0").focus();
//     }
//     if(word != inputWord && i==6){
//         document.getElementById("answer").innerHTML = "You lost the word was"+word;
//     }
//     }
// };


