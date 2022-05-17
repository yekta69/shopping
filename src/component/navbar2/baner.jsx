import { Carousel } from 'react-responsive-carousel';



export const Baner =({url}) => {


//new :
var minutes;
    var seconds;
    var set_inteval;

    const otp_timer =() =>{
      seconds -= 1;
      document.getElementById('seconds').innerHTML = seconds;
      document.getElementById('minutes').innerHTML = minutes;
      if (seconds == 0) {
          if (minutes > 0) {
              seconds = 60;
              minutes -= 1;
          } else {
              minutes = 0;
              document.getElementById('minutes').innerHTML = minutes;
              clearInterval(set_inteval);
              minutes = 0;
              seconds = 0;
              document.getElementById('seconds').innerHTML = '00';
              document.getElementById('minutes').innerHTML = '0';
          }
      }
  }

const startTimer =() => {
  minutes = 1;
  seconds = 60;
  document.getElementById('seconds').innerHTML = seconds;
  document.getElementById('minutes').innerHTML = minutes; 
  set_inteval = setInterval( otp_timer, 1000 );
}

    

    return(
    //     <Carousel autoPlay={false}  showThumbs={false}>
    //            <div>
    //                 <img src={url} alt = '...' />
    //                 <p className="legend">Legend 1</p>
    //             </div>
    //             <div>
    //                 <img src={url}  alt = '...' />
    //                 <p className="legend">Legend 2</p>
    //             </div>
    //             <div>
    //                 <img src={url}  alt = '...' />
    //                 <p className="legend">Legend 3</p>
    //             </div>
    //   </Carousel>

    <div>
                
         <button
          onClick={startTimer}
            type="button"
            className="btn-start-timer"
          >
           شروغ
          </button>
    
        <h2 id="show_counter"></h2>
        <div class="otp-timer">
        <span class="text">زمان باقیمانده تا دریافت مجدد رمز :</span>
         <span id="minutes">0</span>
         <span class="dot">:</span>
          <span id="seconds">00</span>
    </div>
        
    </div>
  )
}