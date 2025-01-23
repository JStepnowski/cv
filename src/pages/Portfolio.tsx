import {Carousel} from 'nuka-carousel';

import centrumMedyczne from '../assets/centrum_medyczne.jpg';
import jakDojechac from '../assets/jak_dojechać.jpg';

const MyCarousel = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Carousel showArrows showDots={true} className=''>
        <img className='h-1/3' alt='' src={centrumMedyczne} />
        <img className='h-1/3' alt='' src={jakDojechac} />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
