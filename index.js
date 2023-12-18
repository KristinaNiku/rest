gsap.from("#navbar",{
  y:-40,ease:"bounce", opacity:0, duration:2, 
})

gsap.from(".scroll-icon", {opacity:0,delay:2.7,
   duration:3, ease:"power1", y:100,
})
gsap.from(".helloOne", {
 opacity:0,delay:1.2, duration:1,
})
gsap.from(".helloTwo", {
  opacity:0,delay:1.5, duration:2,ease:"power7", y:10,
 })
const btnEn = document.querySelector(".btnEn");
const btnRu = document.querySelector(".btnRu");
const helloOne = document.querySelector(".helloOne");
const helloTwo = document.querySelector(".helloTwo");
const helloThree = document.querySelector(".helloThree");
const helloThreeOne = document.querySelector(".helloThreeOne");
const helloFour = document.querySelector(".helloFour");
const partOne = document.querySelector(".partOne");
const partTwo = document.querySelector(".partTwo");
const partThree = document.querySelector(".partThree");
const partFour = document.querySelector(".partFour");
const partFive = document.querySelector(".partFive");
const partSix = document.querySelector(".partSix");
const mySertificate = document.querySelector(".mySertificate");
const myProjects = document.querySelector(".myProjects");
const partFourTwo = document.querySelector(".partFourTwo");
const btnMail =  document.querySelector(".btnMail");
const myProjectsTwo = document.querySelector(".myProjectsTwo");

btnRu.addEventListener("click", (event) =>
{
  helloOne.textContent = "Привет!";
  helloTwo.textContent = "Я Кристина!";
 helloThree.textContent = "Я начинающий веб-разработчик!" ;
 helloThreeOne.textContent = "Я начинающий веб-разработчик!";
 helloFour.textContent = "Обо мне.";
 partOne.textContent = "Мне 32 года, я родилась в Армении, сейчас проживаю в России, Санкт-Петербург. Более 10 лет посвятила работе в ресторанном бизнесе и прошла путь от помощника официанта до ведущего руководителя открывающихся проектов. Я почувствовала, что отдала и получила от этого направления все, что могла, и настало время начать новый путь. ";
 partTwo.textContent = "Я прошла онлайн обучение по следующим направлениям: -HTML5/CSS3,Bootstrap5,Java Script,Gsap и планирую продолжать, потому что хочу работать full-stack разработчиком.";
 partThree.textContent = "Я буду рада начать применять свои знания к работе как можно скорее, поэтому я готова рассмотреть любые предложения и стажировки, в том числе и без оплаты для меня, взамен на полученный опыт до тех пор, пока я не смогу приносить соизмеримый вклад в работу компании."
 partFour.textContent = " И так, ниже мои проекты, которые я делала в процессе обучения и мои ";
myProjects.textContent = "Это мои проекты. Нажми на них.";
partFive.textContent = "Если есть вопросы или предложения о работе, напиши мне.";
btnMail.textContent = "Отправить";
partSix.textContent = "Мои социальные сети";
 btnRu.classList.add("btnActive");
 btnEn.classList.add("btnNoactive");
 mySertificate.textContent = "сертификаты";
 myProjectsTwo.textContent = "Это мои проекты. Нажми на них."
}
)
btnEn.addEventListener("click", (event) =>
{
  helloOne.textContent = "Hi!";
  helloTwo.textContent = "I'm Kristina!";
 helloThree.textContent = "I am a beginner web developer" ;
 helloThreeOne.textContent = "I am a beginner web developer!";
 helloFour.textContent = "About me.";
 partOne.textContent = "I am 32 years old, I was born in Armenia, and now I live in Russia, St. Petersburg.I have more than 10 years of experience in the restaurant industry and have worked my way up from assistant waiter to lead project manager from the construction phase.I felt that I gave and got everything I could from this direction and it was time to start a new way. ";
 partTwo.textContent = "I took online training in the following areas and I'm not stopping, because I want to work as a full-stack developer-HTML5/CSS3 -Bootstrap5 -Java Script -Gsap";
 partThree.textContent = "I would be happy to start applying my knowledge to work as soon as possible, so I'm willing to consider any offers and internships, including no pay for me, in return for the experience until I can make a commensurate contribution to the company."
 partFour.textContent = " Also, below is some of my work, which I did while in training, and my";
myProjects.textContent = "This is my projects. Click on it.";
partFive.textContent = "If you have questions or need more information or have a job for me: ";
btnMail.textContent = "Send";
partSix.textContent = "My social pages:";
btnRu.classList.add("btnNoactive");
btnEn.classList.add("btnActive");
 mySertificate.textContent = "сertificates";
 myProjectsTwo.textContent = "This is my projects. Click on it.";
 
}
);




gsap.registerPlugin(ScrollTrigger);



const maxDeviation = 50,
  maxSkew = 10,
  random = gsap.utils.random(-maxDeviation, maxDeviation, 1, true),
  clamp = gsap.utils.clamp(-maxSkew, maxSkew),
  setSkew = gsap.quickSetter(".hr-scroll", "skewX", "deg"),
  proxy = { skew: 0 };

// Randomly shift images up or down, 50px max
gsap.utils
  .toArray(".hr-scroll img")
  .forEach((img) => gsap.set(img, { y: random() }));

// Function for skewing a section
const skew = (section) => {
  gsap.to(proxy, {
    skew: 0,
    overwrite: true,
    onUpdate: () => setSkew(proxy.skew)
  });
};

const hrScroll = (section) => {
  const direction = (section.dataset.direction || "left") == "left" ? -1 : 1;
  const title = section.querySelector(".section-title");
  let finalX = direction == -1 ? -75 : 0;

  // If the direction is set to right, the section is already x-translated by -75%.
  // We need to move the title to the left of the viewport, so it becomes visible.
  if (direction == 1) {
    gsap.set(title, { x: -section.getBoundingClientRect().x });
  }

  gsap.to(section, {
    x: `${finalX}%`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      pin: true,
      start: "top top",
      end: `+=${section.getBoundingClientRect().width / 3}`,
      scrub: 0.75,
      // When scrolling is done, we move the title to the left of the viewport
      onScrubComplete: () => {
        gsap.to(title, {
          x: -section.getBoundingClientRect().x,
          duration: 0.5,
          ease: "power3.out"
        });
      },
      // Skew section on scrollTrigger update
      onUpdate: (self) => {
        let skewAmount = clamp(self.getVelocity() / 300);
        // Only apply skew if skewAmount is greater than the previous value
        if (Math.abs(skewAmount) > Math.abs(proxy.skew)) {
          proxy.skew = direction * skewAmount;
          skew(section);
        }
      }
    }
  });
};

gsap.utils.toArray(".hr-scroll").forEach((section) => hrScroll(section));







let section = document.querySelector("section");
let text = document.querySelector(".text");
let innerText = document.querySelector(".inner-text");
const slides = document.querySelectorAll(".slide");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  section.style.clipPath = `circle(${value}px at center center)`;
  text.style.left = `${100 - value / 5}%`;
  innerText.style.left = `${100 - value / 5}%`;

  const triggerBottom = (window.innerHeight / 5) * 4;
  slides.forEach((slide) => {
    const slideTop = slide.getBoundingClientRect().top;
    if (slideTop < triggerBottom) {
      slide.classList.add("in");
    } else {
      slide.classList.remove("in");
    }
  });
});






$(function () {
  // Vars
  var pointsA = [],
    pointsB = [],
    $canvas = null,
    canvas = null,
    context = null,
    vars = null,
    points = 8,
    viscosity = 20,
    mouseDist = 70,
    damping = 0.05,
    showIndicators = false;
  (mouseX = 0),
    (mouseY = 0),
    (relMouseX = 0),
    (relMouseY = 0),
    (mouseLastX = 0),
    (mouseLastY = 0),
    (mouseDirectionX = 0),
    (mouseDirectionY = 0),
    (mouseSpeedX = 0),
    (mouseSpeedY = 0);

  /**
   * Get mouse direction
   */
  function mouseDirection(e) {
    if (mouseX < e.pageX) mouseDirectionX = 1;
    else if (mouseX > e.pageX) mouseDirectionX = -1;
    else mouseDirectionX = 0;

    if (mouseY < e.pageY) mouseDirectionY = 1;
    else if (mouseY > e.pageY) mouseDirectionY = -1;
    else mouseDirectionY = 0;

    mouseX = e.pageX;
    mouseY = e.pageY;

    relMouseX = mouseX - $canvas.offset().left;
    relMouseY = mouseY - $canvas.offset().top;
  }
  $(document).on("mousemove", mouseDirection);

  /**
   * Get mouse speed
   */
  function mouseSpeed() {
    mouseSpeedX = mouseX - mouseLastX;
    mouseSpeedY = mouseY - mouseLastY;

    mouseLastX = mouseX;
    mouseLastY = mouseY;

    setTimeout(mouseSpeed, 50);
  }
  mouseSpeed();

  /**
   * Init button
   */
  function initButton() {
    // Get button
    var button = $(".btn-liquid");
    var buttonWidth = button.width();
    var buttonHeight = button.height();

    // Create canvas
    $canvas = $("<canvas></canvas>");
    button.append($canvas);

    canvas = $canvas.get(0);
    canvas.width = buttonWidth + 100;
    canvas.height = buttonHeight + 100;
    context = canvas.getContext("2d");

    // Add points

    var x = buttonHeight / 2;
    for (var j = 1; j < points; j++) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
    }
    addPoints(buttonWidth - buttonHeight / 5, 0);
    addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
    for (var j = points - 1; j > 0; j--) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
    }
    addPoints(buttonHeight / 5, buttonHeight);

    addPoints(-buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonHeight / 5, 0);
    // addPoints(x, 0);
    // addPoints(0, buttonHeight/2);

    // addPoints(0, buttonHeight/2);
    // addPoints(buttonHeight/4, 0);

    // Start render
    renderCanvas();
  }

  /**
   * Add points
   */
  function addPoints(x, y) {
    pointsA.push(new Point(x, y, 1));
    pointsB.push(new Point(x, y, 2));
  }

  /**
   * Point
   */
  function Point(x, y, level) {
    this.x = this.ix = 50 + x;
    this.y = this.iy = 50 + y;
    this.vx = 0;
    this.vy = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.level = level;
  }

  Point.prototype.move = function () {
    this.vx += (this.ix - this.x) / (viscosity * this.level);
    this.vy += (this.iy - this.y) / (viscosity * this.level);

    var dx = this.ix - relMouseX,
      dy = this.iy - relMouseY;
    var relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

    // Move x
    if (
      (mouseDirectionX > 0 && relMouseX > this.x) ||
      (mouseDirectionX < 0 && relMouseX < this.x)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vx = (mouseSpeedX / 4) * relDist;
      }
    }
    this.vx *= 1 - damping;
    this.x += this.vx;

    // Move y
    if (
      (mouseDirectionY > 0 && relMouseY > this.y) ||
      (mouseDirectionY < 0 && relMouseY < this.y)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vy = (mouseSpeedY / 4) * relDist;
      }
    }
    this.vy *= 1 - damping;
    this.y += this.vy;
  };

  /**
   * Render canvas
   */
  function renderCanvas() {
    // rAF
    rafID = requestAnimationFrame(renderCanvas);

    // Clear scene
    context.clearRect(0, 0, $canvas.width(), $canvas.height());
    context.fillStyle = "#fff";
    context.fillRect(0, 0, $canvas.width(), $canvas.height());

    // Move points
    for (var i = 0; i <= pointsA.length - 1; i++) {
      pointsA[i].move();
      pointsB[i].move();
    }

    // Create dynamic gradient
    var gradientX = Math.min(
      Math.max(mouseX - $canvas.offset().left, 0),
      $canvas.width()
    );
    var gradientY = Math.min(
      Math.max(mouseY - $canvas.offset().top, 0),
      $canvas.height()
    );
    var distance =
      Math.sqrt(
        Math.pow(gradientX - $canvas.width() / 2, 2) +
          Math.pow(gradientY - $canvas.height() / 2, 2)
      ) /
      Math.sqrt(
        Math.pow($canvas.width() / 2, 2) + Math.pow($canvas.height() / 2, 2)
      );

    var gradient = context.createRadialGradient(
      gradientX,
      gradientY,
      300 + 300 * distance,
      gradientX,
      gradientY,
      0
    );
    gradient.addColorStop(0, "#102ce5");
    gradient.addColorStop(1, "#E406D6");

    // Draw shapes
    var groups = [pointsA, pointsB];

    for (var j = 0; j <= 1; j++) {
      var points = groups[j];

      if (j == 0) {
        // Background style
        context.fillStyle = "#1CE2D8";
      } else {
        // Foreground style
        context.fillStyle = gradient;
      }

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var nextP = points[i + 1];
        var val = 30 * 0.552284749831;

        if (nextP != undefined) {
          // if (nextP.ix > p.ix && nextP.iy < p.iy) {
          // 	p.cx1 = p.x;
          // 	p.cy1 = p.y-val;
          // 	p.cx2 = nextP.x-val;
          // 	p.cy2 = nextP.y;
          // } else if (nextP.ix > p.ix && nextP.iy > p.iy) {
          // 	p.cx1 = p.x+val;
          // 	p.cy1 = p.y;
          // 	p.cx2 = nextP.x;
          // 	p.cy2 = nextP.y-val;
          // }  else if (nextP.ix < p.ix && nextP.iy > p.iy) {
          // 	p.cx1 = p.x;
          // 	p.cy1 = p.y+val;
          // 	p.cx2 = nextP.x+val;
          // 	p.cy2 = nextP.y;
          // } else if (nextP.ix < p.ix && nextP.iy < p.iy) {
          // 	p.cx1 = p.x-val;
          // 	p.cy1 = p.y;
          // 	p.cx2 = nextP.x;
          // 	p.cy2 = nextP.y+val;
          // } else {

          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;
          p.cx2 = (p.x + nextP.x) / 2;
          p.cy2 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
          // 	continue;
          // }

          // context.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, nextP.x, nextP.y);
        } else {
          nextP = points[0];
          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
        }
      }

      // context.closePath();
      context.fill();
    }

    if (showIndicators) {
      // Draw points
      context.fillStyle = "#000";
      context.beginPath();
      for (var i = 0; i < pointsA.length; i++) {
        var p = pointsA[i];

        context.rect(p.x - 1, p.y - 1, 2, 2);
      }
      context.fill();

      // Draw controls
      context.fillStyle = "#f00";
      context.beginPath();
      for (var i = 0; i < pointsA.length; i++) {
        var p = pointsA[i];

        context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
        context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
      }
      context.fillg();
    }
  }

  // Init
  initButton();
});



