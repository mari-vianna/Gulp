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

   if($('#email').val() != ''){
      $('#email').animate({
         opacity: "toggle",
         top: "-50"
      }, 500, function(){
         console.log($(this).val())
      })
   }
})

/*
* Modal
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
* Input Validation with RegEx
*/

$(document).on('submit', '.modal-body .myForm', function(e){
   e.preventDefault()

   let inputName = $('#nome').val();
   let regxName = /^([a-zA-Z]{>2})$/;

      if (!regxName.test(inputName)){
         $('#errorNome').show();
         $('#errorNome').text ('Digite um nome válido.');
      } else  {
         (regxName.test(inputName))
         $('#errorNome').hide();
         $(this).submit()
      }

   let inputEmail = $('#email').val();
   let regxEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)/;
   
      if (!regxEmail.test(inputEmail)){
         $('#errorEmail').show();
         $('#errorEmail').text ('Digite um email válido.');
      } else  {
         (regxEmail.test(inputEmail))
         $('#errorEmail').hide();
         $(this).submit()
      }

   let inputCep = $('#cep').val();
   let regxCep = /^([0-9]{8})/;
   
      if (!regxCep.test(inputCep)){
         $('#errorCep').show();
         $('#errorCep').text ('Digite um CEP válido.');
      } else  {
         (regxCep.test(inputCep))
         $('#errorCep').hide();
         $(this).submit()
      }

   let inputCelular = $('#celular').val();
   let regxCelular = /^[0-9]{11}/;
   
      if (!regxCelular.test(inputCelular)){
         $('#errorCelular').show();
         $('#errorCelular').text ('Digite um Celular válido.');
      } else  {
         (regxCelular.test(inputCelular))
         $('#errorCelular').hide();
         $(this).submit()
      }

   let inputCpf = $('#cpf').val();
   let regxCpf = /^[0-9]{11}/;
      
      if (!regxCpf.test(inputCpf)){
         $('#errorCpf').show();
         $('#errorCpf').text ('Digite um CPF válido.');
      } else  {
         (regxCpf.test(inputCpf))
         $('#errorCpf').hide();
         $(this).submit()
      }
})

/*
* Máscaras 
*/

$(document).ready(function(){
   $('#date').mask('00/00/0000', {placeholder: '__/__/____'});
   $('#time').mask('00:00', {placeholder: '00:00'});
   $('#cep').mask('00000-000', {placeholder: '_____-___'});
   $('#celular').mask('(00)0 0000-0000',{placeholder: '(__)_ ____-____'});
   $('#cpf').mask('000.000.000-00', {reverse: true, placeholder:'___.___.___-__'});
})