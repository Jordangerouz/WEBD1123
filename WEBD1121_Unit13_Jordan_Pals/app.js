gsap.registerPlugin(ScrollTrigger);

gsap.to("#box1", {
  onComplete: anime,
  scrollTrigger: ".container3",
});

gsap.to("#box3", {
  onComplete: anime,
  scrollTrigger: ".container3",
});

gsap.to("#box2", {
  onComplete: anime,
  scrollTrigger: ".container3",
});

function anime() {
  $("#box2").animate(
    {
      width: "30%",
      opacity: 0.4,
      marginLeft: "0.6in",
      borderWidth: "10px",
    },
    1500
  );

  $("#box1").animate(
    {
      
      opacity: 0.2,
      marginLeft: "0.6in",
      borderWidth: "10px",
    },
    1500
  );

  $("#box3").animate(
    {
      
      opacity: 0.6,
      marginLeft: "0.6in",
      borderWidth: "10px",
    },
    1500
  );
}

$("container1");

$("container2");

$("container3");

$("box1");

$("box2");

$("box3");
