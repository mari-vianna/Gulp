/*
* Evento do Subscribe Form
*/

$('#form-submit').on('click', function(e){
   e.preventDefault()

   if($('#emailForm').val() != ''){
      $('#emailForm').animate({
         opacity: "toggle",
         top: "-50"
      }, 500, function(){
         console.log($(this).val())
      })
   }
})

/*
* Modal: Sobre/Contato
*/

$('.nav-modal-open').on('click', function(e){
   e.preventDefault();

   let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())

   let myModal = new bootstrap.Modal($('#modelId'))
   myModal.show()
})

/*
* Modal: Projetos
*/

$('.nav-galleryImg').on('click', function(e){
   e.preventDefault();

   let elem = $(this).attr('rel')

      $('.modalBody').html($('#'+elem).html())
      $('.modalHeader h5.modalTitle').html($(this).text())

   let myModal = new bootstrap.Modal($('#gallery-popup'))
   myModal.show()
})

/*
* Validation
*/

function validate(elem){
   if( elem.val() == '') {
      console.log('O campo de '+ elem.attr('name') + ' é obrigatório.')

      elem.parent().find('#textRequired').show()
      elem.addClass('invalid');
      $('#submitButton').prop('disabled', true)
      return false
   } else {
      elem.parent().find('#textRequired').hide()
      elem.removeClass('invalid')
      $('#submitButton').prop('disabled', false)
   }
}

$('body').on('submit', '.modal-body #myForm', function(e){
   e.preventDefault()

   const inputName = $('#name')
   const inputEmail = $('#email')
   const inputCel = $('#celular')

   validate(inputName)
   validate(inputEmail)
   validate(inputCel)

   if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputCel.hasClass('invalid')){
      alert('Verificar campos obrigatórios.')
      return false
   } else {
      $(this).submit()  
   }

})

$('body').on('blur', '#emailForm', function(){
   validate($(this))
})
$('body').on('blur', '#name', function(){
   validate($(this))
})
$('body').on('blur', '#email', function(){
   validate($(this))
})
$('body').on('keyup', '#celular', function(){
   validate($(this))
   $(this).mask('00000000000');
})

