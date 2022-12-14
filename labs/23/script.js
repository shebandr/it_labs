function change(input, output){
  console.log(input + " " + output)
  var input_data = document.getElementById(input).value
  var output_field = document.getElementById(output)
  output_field.value=input_data*input_data
  if(input = 'c1'){
    var input_data = document.getElementById('c1').value
    var output_field = document.getElementById('c21')
    output_field.value=input_data*input_data*input_data
      
  }
}

