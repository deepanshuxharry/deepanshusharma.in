
// 2nd approach Scrolling
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        // to prevent event 
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection); 
        interval = setInterval(scrollVertically, 50, targetSection);
//    OR
//    interval = setInterval(function(){
//     scrollVertically(targetSection);
//    }, 50);
    });
}


function scrollVertically(targetSection){
    var targetSectionCoortinates = targetSection.getBoundingClientRect();
    if(targetSectionCoortinates.top <= 0){
        clearInterval(interval);
        return;
        }
        window.scrollBy(0, 100);
}




// 1st type of approach
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// for(var i=0; i < navMenuAnchorTags.length; i++){
//     navMenuAnchorTags[i].addEventListener('click', function(event){
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection); 
//         var interval = setInterval(function(){
//             var targetSectionCoortinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoortinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 100);
//         }, 50);


//     });
// }



// Skill Bar
// Handle scroll event on window
// Check that skills sections container is visible or not
// ensure that initial width of colored skill divs is zero -> initialized/ reset to 0 width value
// start animation on every skill -> increase sill width from 0 to skill level at regular intervals
// Store skill level -> HTML with the help data attribute

var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
// var animationDone = false;
// This event fills the progress bars if they are displayed on the screen when the page is loaded.
window.addEventListener("load", checkScroll);


function initialiseBar(bar){
    bar.setAttribute("data-visited", false);
        bar.style.width = 0 + '%';
    }

for (let bar of progressBars) {
    initialiseBar(bar);
}

function fillBar(bar){
    let currentWidth = 0;
    let targetWidth = bar.getAttribute('data-bar-width');
    let interval = setInterval(function(){
        if(currentWidth >= targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
        }, 5);
    }


// This function uses a for loop for individual progress bars.
function checkScroll(){
    for (let bar of progressBars) {
		let barCoordinates = bar.getBoundingClientRect();
		if (
			bar.getAttribute("data-visited") == "false" &&
			barCoordinates.top <= window.innerHeight - barCoordinates.height
		) {
			bar.setAttribute("data-visited", true);
			fillBar(bar);
		} else if (barCoordinates.top > window.innerHeight) {
			bar.setAttribute("data-visited", false);
			initialiseBar(bar);
		}
	}
}
    // you have to check whether skill container is visible
//     var coordinates = skillsContainer.getBoundingClientRect();
//     if(!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//         console.log('Skill section visible')
//         fillBars();
//     }else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initialiseBars();
//     }
// }






















// beginning learning basics below
// var scrollInterval = setInterval(function(){
//     window.scrollBy(0,50);
// }, 50);

// clearInterval(scrollInterval);

// var targetPos = 1500;
// var currentPos = 0;
// var scrollInterval = setInterval(function(){
//     if(currentPos >= targetPos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
// }, 50);
