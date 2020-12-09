const Carousel = () => {
    return ( 
        <>
<div id="my-carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
    <ol className="carousel-indicators">
        <li data-target="#my-carousel" data-slide-to="0" className="active"></li>
        <li data-target="#my-carousel" data-slide-to="1"></li>
        <li data-target="#my-carousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="//placehold.it/1200x400/cc09f0" alt="First slide">
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="//placehold.it/1200x400/5609f0" alt="Second slide">
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="//placehold.it/1200x400/cc54f0" alt="Third slide">
        </div>
    </div>
    <a className="carousel-control-prev" href="#my-carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#my-carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
        </>
     );
}
 
export default Carousel;