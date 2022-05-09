import { Carousel } from 'react-responsive-carousel';


export const Baner =({url}) => {

    return(
        <Carousel autoPlay={false}  showThumbs={false}>
               <div>
                    <img src={url} alt = '...' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={url}  alt = '...' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={url}  alt = '...' />
                    <p className="legend">Legend 3</p>
                </div>
      </Carousel>
    
  )
}