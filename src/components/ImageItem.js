function ImageItem(image) {
    console.log(image)
    return ( <div>
        <img className="imageListimg" src={image.image.urls.small} alt={image.image.alt_description} />
    </div> );
}

export default ImageItem;