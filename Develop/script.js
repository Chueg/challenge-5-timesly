var day = document.getElementById('currentDay');
day.textContent = moment().format('dddd, MMM Do');

var blocki = document.getElementById('container');

var currentHour = moment().hours();


var bungo = [" "," "," "," "," "," "," "," "," "];


function renderList()
{
    for (var i = 0; i < bungo.length; i++)
 {
    var ranch = bungo[i];

    var row = document.createElement('p');
    row.setAttribute('class', 'row');
    
    

    var time = document.createElement("p");
    time.setAttribute("class", 'hour');
    var num = 9+i;

    if(num<12){
        time.textContent = (num + ":00 am");
    }

    else if(num >12){
        time.textContent = ((num-12) + ":00 pm");
    }
    else if(num = 12){
        time.textContent = (num + ":00 pm");
    }
    


    var limbo = document.createElement('textarea');
    limbo.setAttribute('class', 'time-block');

    limbo.textContent = ranch +" ";

    if(num <currentHour)
    {
        limbo.setAttribute('class', 'past');
    }
    else if(num == currentHour)
    {
        limbo.setAttribute('class', 'present');
    }
    else if(num > currentHour)
    {
        limbo.setAttribute('class', 'future');
    }

    

    var button = document.createElement("button");
    button.setAttribute('class', 'saveBtn')
    button.textContent = "💾";

    row.appendChild(time);
    row.appendChild(limbo);
    row.appendChild(button);
    blocki.appendChild(row);
  }

}

function init() 
{
    
    var storedBungo = JSON.parse(localStorage.getItem("bungo"));

    if (storedBungo !== null) {
      bungo = storedBungo;
    }
    renderList();
  }

function storeBungo() 
{
    localStorage.setItem("bungo", JSON.stringify(bungo));
}

blocki.addEventListener("click", function(event) {
    var element = event.target;
    // TODO: Describe the functionality of the following `if` statement.
    if (element.matches("button") === true) {
      var index = element.parentElement;
      var bimbo = $(index).index();
        
        

      bungo[bimbo] = index.querySelector('textarea').value;

      storeBungo();
      console.log(bungo);
    }
  });



init();

