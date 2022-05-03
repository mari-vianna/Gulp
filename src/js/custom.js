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
* Input Validation with RegEx
*/

$(document).on('submit', '.modal-body .myForm', function(e) {
   e.preventDefault();

   let erro_Nome = false;
   let erro_Email = false;
   let erro_Cep = false;
   let erro_Celular = false;
   let erro_Cpf = false;

   function check_Nome (){

      let inputName = $('#nome').val();
      let regxName = new RegExp (/^[A-Za-z]/);

         if (!regxName.test(inputName)){
            $('#msg_errorNome').show();
            $('#msg_errorNome').text ('Digite um nome válido.');
            erro_Nome = true
         } else  {
            (regxName.test(inputName))
            $('#msg_errorNome').hide();
         }
   };

   function check_Email(){

      let inputEmail = $('#email').val();
      let regxEmail = new RegExp (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
      
         if (!regxEmail.test(inputEmail)){
            $('#msg_errorEmail').show();
            $('#msg_errorEmail').text ('Digite um email válido.');
            erro_Email = true
         } else  {
            (regxEmail.test(inputEmail))
            $('#msg_errorEmail').hide();
         }
   };

   function check_Cep(){

      let inputCep = $('#cep').val();
      let regxCep = new RegExp (/^[0-9]{8}/);
      
         if (!regxCep.test(inputCep)){
            $('#msg_errorCep').show();
            $('#msg_errorCep').text ('Digite um CEP válido.');
            erro_Cep = true
         } else  {
            (regxCep.test(inputCep))
            $('#msg_errorCep').hide();
         }
   };

   function check_Celular(){

      let inputCelular = $('#celular').val();
      let regxCelular = new RegExp (/^[0-9]{11}/);
      
         if (!regxCelular.test(inputCelular)){
            $('#msg_errorCelular').show();
            $('#msg_errorCelular').text ('Digite um Celular válido.');
            erro_Celular = true
         } else  {
            (regxCelular.test(inputCelular))
            $('#msg_errorCelular').hide();
         }
   }

   function check_Cpf(){

      let inputCpf = $('#cpf').val();
      let regxCpf = new RegExp (/^[0-9]{11}/);
         
         if (!regxCpf.test(inputCpf)){
            $('#msg_errorCpf').show();
            $('#msg_errorCpf').text ('Digite um CPF válido.');
            erro_Cpf = true
         } else  {
            (regxCpf.test(inputCpf))
            $('#msg_errorCpf').hide();
         }
   }

   $(body).submit(function(){

      erro_Nome = false;
      erro_Email = false;
      erro_Cep = false;
      erro_Celular = false;
      erro_Cpf = false;

      check_Nome ();
      check_Email ();
      check_Cep ();
      check_Celular ();
      check_Cpf();

      if(erro_Nome == false && erro_Email == false && erro_Cep == false && erro_Celular == false && erro_Cpf == false){
         return true;
      } else {
         return false
      }
   })
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