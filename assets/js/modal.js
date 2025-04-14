const trigers = document.querySelectorAll('[data-modal]')
const body = document.querySelector('body')
const closeTrigers = document.querySelectorAll('[data-close-modal]')


function showModal(modal, event) {
    event.preventDefault()
    modal.classList.add('d-flex')
    body.classList.add('overflow-hidden')

}

function closeModal(element, event) {
event.preventDefault()
element.closest('.modal').classList.remove('d-flex')
body.classList.remove('overflow-hidden')
}


trigers.forEach(
    function(element) {
        const modalId = element.getAttribute('data-modal') 
        element.addEventListener('click', function(event) {
          const modal = document.getElementById(modalId)
          showModal(modal, event)
        })
    }
)

closeTrigers.forEach(function(element) {
        element.addEventListener('click', function(event) {
            closeModal(element, event)
    })
})