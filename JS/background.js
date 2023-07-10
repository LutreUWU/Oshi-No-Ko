

    var Sparkles = [];
    SparkleBackground = document.getElementById("SparkleDiv")

    function generateSparkle() {
      for (var i = 0; i < 50; i++) {
        var size = Math.random() * 30 + 10; // Taille aléatoire entre 30 et 40
        var duration = Math.random() * 10 + 10; // Durée de chute aléatoire entre 10 et 15 secondes
        topPX = Math.random() * window.innerHeight;
        rightPX = Math.random() * window.innerWidth;

        var SparkleImages = ["../BG/sparkle2.png", "../BG/sparkle.png"];
        var randomNumber = Math.random();
        var imageUrl = SparkleImages[Math.floor(randomNumber * SparkleImages.length)];

        var Sparkle = document.createElement("img");
             Sparkle.src = imageUrl;
             Sparkle.classList.add("Sparkle");
             Sparkle.style.width = size + "px"
             Sparkle.style.top = topPX + "px"
             Sparkle.style.right = rightPX + "px"
             Sparkle.style.animationDuration = duration + "s";

             Sparkles.push(Sparkle);
             SparkleBackground.appendChild(Sparkle);

    } 
    
     }

     generateSparkle();

