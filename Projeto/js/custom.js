/*
* Função que mostra o Carrossel
*/

$(document).ready(function(){

   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') 
   let itens = $('.featured-item') 
   let destaques = $('#featured') 
});

/*
* Evento do Subscribe Form
*/

$('#form-submit').on('click', function(e){
   e.preventDefault()

   if($('#Email').val() != ''){
      $('#Email').animate({
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
* Modal: Produtos
*/

$('.nav-modalProdutos').on('click', function(e){
   e.preventDefault();

   let myModal = new bootstrap.Modal($('#modelProdutos'))
   myModal.show()
})

/*
* Validation
*/

function validate( elem ){
   if( elem.val() == '') {
      console.log('O campo de '+ elem.attr('name') + ' é obrigatório.')

      elem.parent().find('#textRequired').show()
      elem.addClass('invalid')

      return false
   } else {
      elem.parent().find('#textRequired').hide()
      elem.removeClass('invalid')
   }
}

$('body').on('submit', '.modal-body #myForm', function(e){

   e.preventDefault()

   const inputName = $('#name')
   const inputEmail = $('#email')
   const inputCep = $('#cep')
   const inputCel = $('#celular')
   const inputCpf = $('#cpf')

   validate(inputName)
   validate(inputEmail)
   validate(inputCep)
   validate(inputCel)
   validate(inputCpf)

   if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputCep.hasClass('invalid') || inputCel.hasClass('invalid') || inputCpf.hasClass('invalid')){
      alert('Verificar campos obrigatórios.')
      return false
   } else {
      $(this).submit()  
   }

})

$('body').on('blur', '#Email', function(){
   validate($(this))
})
$('body').on('blur', '#name', function(){
   validate($(this))
})
$('body').on('blur', '#email', function(){
   validate($(this))
})
$('body').on('blur', '#date', function(){
   validate($(this))
}) 
$('body').on('blur', '#time', function(){
   validate($(this))
})
$('body').on('blur', '#cep', function(){
   validate($(this))
})
$('body').on('blur', '#celular', function(){
   validate($(this))
})
$('body').on('blur', '#cpf', function(){
   validate($(this))
})

/*
* Masks
*/

$(document).ready(function(){
   $('#date').mask('00/00/0000', {placeholder: '00/00/0000'});
   $('#time').mask('00:00', {placeholder: '00:00'});
   $('#cep').mask('00000-000', {placeholder: '00000-000'});
   $('#celular').mask('(00)0 0000-0000',{placeholder: '(00)0 0000-0000'});
   $('#cpf').mask('000.000.000-00', {reverse: true, placeholder:'000.000.000-00'});
})