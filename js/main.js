/*Datos alerta*/
let botton = document.getElementById("botton");
botton.addEventListener("click", function(){
    alert("Enviado con exito");
})
/*Fin Datos alerta*/

/*Menu responsive*/
let iconmenu = document.getElementById("button-menu");
let menu = document.querySelector("nav");

iconmenu.addEventListener("click", function(){
    menu.classList.toggle("activemenu");
})
/*Fin Menu responsive*/

/*Cambio de color en el nav*/
const menuLinks = document.querySelectorAll('.item__link');

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entradas) => {
      const id = entradas.target.getAttribute("id");
      const menuLink = document.querySelector(`.item__link[href="#${id}"]`);

      if (entradas.isIntersecting) {
        document.querySelector(".item__link.active").classList.remove("active");
        menuLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("activemenu");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
/*Fin Cambio de color en el nav*/