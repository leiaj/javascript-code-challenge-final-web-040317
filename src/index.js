$(document).ready(function(){

	$('#photo-form').submit(function(event){
		event.preventDefault()
		let image = $('#img-url').val()
		let caption = $('#caption-txt').val()

		let $photo = $('#photo-list').append(`<img src='${image}'>`)
		$photo.append(caption)

		$('#img-url').val('')
		$('#caption-txt').val('')

	})



})
