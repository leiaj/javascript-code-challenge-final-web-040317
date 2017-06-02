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

	addImage(url){
		const image = new Image(url)
		this.images.push(image)
	}


}