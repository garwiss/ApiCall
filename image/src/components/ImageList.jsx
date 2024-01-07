import ImageItem from "./ImageItem";
function ImageList({imagesPlaceholder}) {
    return ( 
//kapsayıcı component divi

        <div className="imageList">
            {imagesPlaceholder.map((image,index)=>{
              return  <ImageItem image={image} key={index}/>
            })}
        </div>
     );
}

export default ImageList;