import '../App.css';
import { Slide } from 'react-slideshow-image';

function SlideShow({images}) {
  return (
    <div style={{objectFit: 'cover'}}>
        <Slide easing="ease" autoplay={false}>
          {images.map((image) => {
            return(
              <>
                <div className="each-slide">
                  <div style={{'backgroundImage': `url(${image})`}} />
                </div>
              </>
            )
          })}
        </Slide>
      </div>
  );
}

export default SlideShow;