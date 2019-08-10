// NO CLICK DO ELEMENTO QUE CONTEM O ESTILO calc EXECUTA A FUNCAO!
$('.calc').click(function(){
    // PEGA VALOR PELO ID DO INPUT
	val1 = $('#val1').val();
	val2 = $('#val2').val(); 
    
    /*
        *CONDICOES
        *BUSCA O INPUT PELO NOME calc E CHECADO E VALIDA SE O VALOR DO CHECKBOX || RADIO ESTA DE ACORDO!
        *INSERE NO ELEMENTO DE ESTILO res O RESULTADO!
    */
    if($('input[name=calc]:checked').val() == 1){
		resultado = parseInt(val1) + parseInt(val2);
		$('.res').html(resultado);
	} // -> SOMA
	if($('input[name=calc]:checked').val() == 2){
		resultado = parseInt(val1) - parseInt(val2);
		$('.res').html(resultado);
	} // -> SUBTRACAO
	if($('input[name=calc]:checked').val() == 3){
		resultado = parseInt(val1) / parseInt(val2);
		$('.res').html(resultado);
	} // -> DIVISAO
	if($('input[name=calc]:checked').val() == 4){
		resultado = parseInt(val1) * parseInt(val2);
		$('.res').html(resultado);
	} // -> MULTIPLICACAO			
});