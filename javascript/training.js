const basketballBtn = document.getElementById("basketball-btn");
const footballBtn = document.getElementById("football-btn");
const calisthenicsBtn = document.getElementById("calisthenics-btn");
const weightBtn = document.getElementById("weight-btn");

const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

var classDescriptionElement = document.querySelector(".class-description");
var classTitleElement = document.querySelector(".class-name");


basketballBtn.addEventListener("click", function () {
    popup.style.display = "block";
    classDescriptionElement.textContent = "Enhance your basketball skills and reach new heights with our personalized basketball training sessions. Our expert trainers provide one-on-one coaching, focusing on improving your shooting, dribbling, agility, and overall game strategy. Whether you're a beginner or an experienced player, our tailored sessions will help you build strength, boost endurance, and refine your techniques. Get ready to elevate your game and achieve your full potential on the court!";
    classTitleElement.textContent = "Basketball";
});

footballBtn.addEventListener("click", function () {
    popup.style.display = "block";
    classDescriptionElement.textContent = "Elevate your football skills with our specialized personal training sessions. Our experienced coaches provide individualized guidance, focusing on improving your technique, agility, speed, and tactical understanding. Whether you're a beginner or an advanced player, our tailored sessions will help you enhance your passing, dribbling, shooting, and defensive abilities. Gain the competitive edge, increase your endurance, and excel on the field with our dynamic football training program.";
    classTitleElement.textContent = "Football";
});

calisthenicsBtn.addEventListener("click", function () {
    popup.style.display = "block";
    classDescriptionElement.textContent = "Unlock your full potential with our personalized calisthenics training sessions. Our skilled trainers will guide you through bodyweight exercises that build strength, improve flexibility, and enhance overall fitness. From mastering impressive skills like handstands and muscle-ups to developing core stability and functional movement patterns, our tailored sessions cater to all fitness levels. Experience the power of calisthenics and achieve incredible results, transforming your body and maximizing your physical capabilities.";
    classTitleElement.textContent = "Calisthenics";
});

weightBtn.addEventListener("click", function () {
    popup.style.display = "block";
    classDescriptionElement.textContent = "Take your fitness journey to the next level with our personalized weight-training sessions. Our certified trainers will guide you through effective and safe techniques, helping you build strength, increase muscle mass, and improve overall body composition. With customized workout plans and expert guidance, you'll learn proper form, target specific muscle groups, and achieve your fitness goals faster. Elevate your strength and transform your physique with our results-driven weight-training program.";
    classTitleElement.textContent = "Weight-Training";
});


closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});