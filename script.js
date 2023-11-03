function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //  if(html.classList.contains('light')){
  //    html.classList.remove('light')
  //  }else{
  //    html.classList.add('light')
  //  }

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem

  //se tiiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  }
  //se tiver sem a img normal
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
