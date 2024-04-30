const config = {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        1400: {
          perView: 2
        },
        850: {
          perView: 1
        }
      }
}
new Glide('.glide', config).mount()

