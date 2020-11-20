const $timeForm = document.querySelector('#time-form')

$timeForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let formData = new FormData( event.target )
    let chosenTime = formData.get('time')

    if(chosenTime === '9'){
        standup(chosenTime)
    } else if ( chosenTime === '10' ){
        comeMeditate(chosenTime)
    } else if ( chosenTime === '11' ){
        refactoringIfsWithJon(chosenTime)
    } else if ( chosenTime === '12' ){
        takeLunch(chosenTime)
    } else if ( chosenTime === '1' ){
        beveragesWithBrian(chosenTime)
    } else if ( chosenTime === '2' ){
        talkingCode( chosenTime )
    } else if ( chosenTime === '3' ){
        freeTime(chosenTime)
    } else if ( chosenTime === '4' ){
        feelings(chosenTime)
    } else {
        standdown(chosenTime)
    }
})

function standup(time){
    alert(
        `The time is ${generateTime(time)}... it's time for standup`
    )
}

function comeMeditate(time){
    alert(
        `The time is ${generateTime(time)}... it's time to come meditate`
    )
}

function refactoringIfsWithJon(time){
    alert(
        `The time is ${generateTime(time)}... it's time for refactoring ifs with Jon`
    )
}

function takeLunch(time){
    alert(
        `The time is ${generateTime(time)}... it's time to take a lunch`
    )
}

function beveragesWithBrian(time){
    alert(
        `The time is ${generateTime(time)}... it's time for beverages with brian`
    )
}

function talkingCode(time){
    alert(
        `The time is ${generateTime(time)}... it's time for talking code`
    )
}

function freeTime( time ){
    alert(
        `The time is ${generateTime(time)}... it's time to do you baby`
    )
}
function feelings( time ){
    alert(
        `The time is ${generateTime(time)}... it's time to tell me how the fuck your week was`
    )
}

function standdown( time ){
    alert(
        `The time is ${generateTime(time)}... it's time for standown`
    )
}

function generateTime( timeString ){
    console.log( timeString )
    if(timeString == '9'){
        return '9:00 AM'
    } else if (timeString === '10'){
        return '10:00 AM'
    } else if (timeString === '11'){
        return '11:00 AM'
    } else if (timeString === '12'){
        return '12:00 PM'
    } else if (timeString === '1'){
        return '1:00 PM'
    } else if (timeString === '2'){
        return '2:00 PM'
    } else if (timeString === '3'){
        return '3:00 PM'
    } else if (timeString === '4'){
        return '4:00 PM'
    } else if (timeString === '5'){
        return '5:00 PM'
    }
}