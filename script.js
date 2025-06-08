const links = document.querySelectorAll('.sidebar nav a')
const pages = document.querySelectorAll('.page')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const target = link.getAttribute('data-page')

    // Atualiza links
    links.forEach((l) => l.classList.remove('active'))
    link.classList.add('active')

    // Alterna páginas
    pages.forEach((p) => {
      p.classList.remove('active')
      if (p.id === target) {
        p.classList.add('active')
      }
    })
  })
})
