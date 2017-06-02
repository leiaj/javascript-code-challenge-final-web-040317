$(document).ready(function(){


	//THIS WORKS/DOESNT USE CLASS METHODS
	// $('#photo-form').submit(function(event){
	// 	event.preventDefault()
	// 	let image = $('#img-url').val()
	// 	let caption = $('#caption-txt').val()

	// 	let $photo = $('#photo-list').append(`<img src='${image}'>`)
	// 	$photo.append(caption)

	// 	$('#img-url').val('')
	// 	$('#caption-txt').val('')

	// })

	let imageList = new ImageList

	$('#photo-form').submit(function(event){
		event.preventDefault()
		let image = $('#img-url').val()
		imageList.addImage(image)
		$('#photo-list').html(imageList.render())
		$('#img-url').val('') 

	})



})
