let arrowRight = document.querySelector('#rarr');
let arrowLeft = document.querySelector('#larr');
let currentMainImage = 2;

arrowRight.addEventListener("click", slide);
arrowLeft.addEventListener("click", slide);

function slide(e){
    console.log(e.target.id);
    for(let i=1; i<=4; i++){
        document.querySelector("#main"+i).classList.remove('previous');
        document.querySelector("#main"+i).classList.remove('next');
        document.querySelector("#main"+i).classList.remove('main');
        document.querySelector("#main"+i).classList.remove('back', 'slideright', 'slideleft');
        document.querySelector("#bac"+i).classList.remove('bb');
    }
    if(e.target.id=="larr"){
        currentMainImage++;
        if(currentMainImage===5){
            currentMainImage=1;
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideright');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main4').classList.add('previous', 'slideright');
            document.querySelector('#main'+(currentMainImage+1)).classList.add('next', 'slideright');
            document.querySelector("#main"+(currentMainImage+2)).classList.add('back');
        }
        else if(currentMainImage===3){
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideright');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main'+(currentMainImage-1)).classList.add('previous', 'slideright');
            document.querySelector('#main'+(currentMainImage+1)).classList.add('next', 'slideright');
            document.querySelector("#main"+1).classList.add('back');
        }
        else if(currentMainImage==4){
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideright');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main'+(currentMainImage-1)).classList.add('previous', 'slideright');
            document.querySelector('#main'+1).classList.add('next', 'slideright');
            document.querySelector("#main"+2).classList.add('back');
        }
        else{
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideright');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main'+(currentMainImage-1)).classList.add('previous', 'slideright');
            document.querySelector('#main'+(currentMainImage+1)).classList.add('next', 'slideright');
            document.querySelector("#main"+(currentMainImage+2)).classList.add('back');
        }
    }
    else if(e.target.id=="rarr"){
        console.log("right");
        currentMainImage--;
        console.log(currentMainImage);
        if(currentMainImage===0){
            currentMainImage=4;
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideleft');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main3').classList.add('previous', 'slideleft');
            document.querySelector('#main'+(currentMainImage-3)).classList.add('next', 'slideleft');
            document.querySelector("#main"+(currentMainImage-2)).classList.add('back');
        }
        else if(currentMainImage===1){
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideleft');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main'+4).classList.add('previous', 'slideleft');
            document.querySelector('#main'+(currentMainImage+1)).classList.add('next', 'slideleft');
            document.querySelector("#main"+3).classList.add('back');
        }
        else if(currentMainImage===2){
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideleft');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main'+(currentMainImage-1)).classList.add('previous', 'slideleft');
            document.querySelector('#main'+(currentMainImage + 1)).classList.add('next', 'slideleft');
            document.querySelector("#main"+4).classList.add('back');
        }
        else{
            document.querySelector('#main'+currentMainImage).classList.add('main', 'slideleft');
            document.querySelector("#bac"+currentMainImage).classList.add('bb');
            document.querySelector('#main'+(currentMainImage-1)).classList.add('previous', 'slideleft');
            document.querySelector('#main'+(currentMainImage+1)).classList.add('next', 'slideleft');
            document.querySelector("#main"+(currentMainImage-2)).classList.add('back');
        }
    }
}
for(let i=1; i<=4; i++){
    document.querySelector("#main"+i).addEventListener("click", next);
}
function next(e){
    console.log(e);
    console.log(e.path[1].id);
    switch (e.path[1].id){
        case "main1":
        case "main2":
        case "main3":
        case "main4":
            console.log("tu normalnie lezy");
            let splitter = e.path[1].id.replace("main", "");
            console.log(splitter);
            document.querySelector("#pass"+splitter).classList.remove('back');
            document.querySelector(".welcome").classList.add('back');
            document.querySelector(".page__arrow").classList.add('back');
            document.querySelector(".page__header").classList.add('back');
            break;
    }
}
document.querySelectorAll(".button-back").forEach((elm)=>{elm.addEventListener("click", () => {
    console.log('time after time');
    document.querySelector(".welcome").classList.remove('back');
    document.querySelector(".page__arrow").classList.remove('back');
    document.querySelector(".page__header").classList.remove('back');
    for(let i=1; i<=4; i++){
        document.querySelector("#pass"+i).classList.add("back");
    }})
})

const krakow = fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Krak%C3%B3w?unitGroup=metric&key=YOUR_API_KEY&contentType=json'
).then(response => response.json());