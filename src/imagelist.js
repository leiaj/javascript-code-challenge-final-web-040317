class ImageList{
	constructor(){
		this.images = []

	}


	render(){
		let lis = this.images.map(function(image){
			return `${image.render()}`
		}).join(' ')
		return `<ul>${lis}</ul>`
	}

	addImage(url, txt){
		const image = new Image(url)
		const caption = new Caption(txt)
		this.images.push(image, caption)
	}


}