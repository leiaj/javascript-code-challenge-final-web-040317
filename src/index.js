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
		let $image = $('#img-url')
		let $caption = $('#caption-txt')
		let $photolist = $('#photo-list')
		let image = $image.val()
		let caption = $caption.val()
		imageList.addImage(image, caption)
		$photolist.html(imageList.render())
		$image.val('') 
		$caption.val('')
	})



})
