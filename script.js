var slideIndex = 1
showSlides(slideIndex)
function plusSlide(n){
    showSlides(slideIndex+=n)
}
function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    var i
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot")

    if(n > slides.length){
        slideIndex=1
    }
    if(n <1){
        slideIndex = slides.length
    }
    for(i = 0; i<slides.length;i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i<dots.length;i++){
        dots[i].className = dots[i].className.replace("active","")
    }
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
}
function changeTextToDesc(n){
    var text = document.getElementsByClassName("main_text")
    if(n.classList[1]=='dl'){
        text[0].style.fontSize = '48px'
        text[0].style.whiteSpace = 'normal'
        text[0].innerHTML = "First-person action survival game set in a post-apocalyptic open world overrun by flesh-hungry zombies. Roam a city devastated by a mysterious virus epidemic. Scavenge for supplies, craft weapons, and face hordes of the infected."
    }
    if(n.classList[1]=='gta'){
        text[0].style.fontSize = '45px'
        text[0].style.whiteSpace = 'normal'
        text[0].innerHTML = "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second."
    }
    if(n.classList[1]=='rw'){
        text[0].style.fontSize = '48px'
        text[0].style.whiteSpace = 'normal'
        text[0].innerHTML = "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more."
    }
    if(n.classList[1]=='ets2'){
        text[0].style.lineHeight = '100px'
        text[0].style.fontSize = '48px'
        text[0].style.whiteSpace = 'normal'
        text[0].innerHTML = "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits."
    }
}
function changeTextToSys(n){
    var text = document.getElementsByClassName("main_text")
    if(n.classList[1]=='dl'){
        text[0].style.fontSize = '28px'
        text[0].style.whiteSpace = 'pre-line'
        text[0].innerHTML = `OS: Windows® 7 64-bit / Windows® 8 64-bit / Windows® 8.1 64-bit \nProcessor: Intel® Core™ i5-4670K @3.4 GHz / AMD FX-8350 @4.0 GHz \nMemory: 8 GB RAM DDR3 \nHard Drive: 40 GB free space \nGraphics: NVIDIA® GeForce® GTX 780 / AMD Radeon™ R9 290 (2GB VRAM)`
    }
    if(n.classList[1]=='rw'){
        text[0].style.fontSize = '28px'
        text[0].style.whiteSpace = 'pre-line'
        text[0].innerHTML = `OS: Windows 7 \nProcessor: Core 2 Duo \nMemory: 4 GB RAM \nGraphics: Intel HD Graphics 4000 or other shader model 4.0 \nStorage: 1 GB available space`
    }
    if(n.classList[1]=='gta'){
        text[0].style.fontSize = '28px'
        text[0].style.whiteSpace = 'pre-line'
        text[0].innerHTML = `OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64\nProcessor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz \nMemory: 8 GB RAM \nGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GB \nStorage: 72 GB available space`
    }
    if(n.classList[1]=='ets2'){
        text[0].style.fontSize = '28px'
        text[0].style.lineHeight = '100px'
        text[0].style.whiteSpace = 'pre-line'
        text[0].innerHTML = `OS: Windows 7/8.1/10 64-bit \nProcessor: Quad core CPU 3.0 GHz \nMemory: 6 GB RAM \nGraphics: GeForce GTX 760-class (2 GB) \nHard Drive: 12 GB available space`
    }
}
function changeTextToDLC(n){
    var text = document.getElementsByClassName("main_text")
    if(n.classList[1]=='dl'){
        text[0].style.fontSize = '48px'
        text[0].style.whiteSpace = 'normal'
        text[0].innerHTML = `The Following`
    }
    if(n.classList[1]=='gta'){
        text[0].style.fontSize = '48px'
        text[0].style.whiteSpace = 'normal'
        text[0].innerHTML = `GTA Online`
    }
    if(n.classList[1]=='rw'){
        text[0].style.fontSize = '48px'
        text[0].style.whiteSpace = 'pre-line'
        text[0].innerHTML = `RimWorld - Biotech, \nRimWorld - Ideology, \nRimWorld - Royalty`
    }
    if(n.classList[1]=='ets2'){
        text[0].style.fontSize = '36px'
        text[0].style.lineHeight = '75px'
        text[0].style.whiteSpace = 'pre-line'
        text[0].innerHTML = `Euro Truck Simulator 2 - Iberia, \nEuro Truck Simulator 2 - Road to the Black Sea, \nEuro Truck Simulator 2 - Beyond the Baltic Sea, \nEuro Truck Simulator 2 - Italia, \nEuro Truck Simulator 2 - Vive la France!, \nEuro Truck Simulator 2 - Scandinavia, \nEuro Truck Simulator 2 - Going East!`
    }
}