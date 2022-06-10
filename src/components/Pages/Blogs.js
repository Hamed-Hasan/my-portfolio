import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';



const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 7400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Blogs = () => {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds
  
    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    
    return (
       <div>
            <div className="title-section">
                <h1 className='text-primary'>up coming <span className='text-amber-500'
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in">blogs</span></h1>
                <span className='title-bg text-primary'
                  data-aos-duration="3500"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right">blogs</span>
            </div>
         <div className='flex items-center lg:-mt-40 justify-center h-screen'>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
<div
        data-aos-duration="4500"
        data-aos-easing="ease-in-out"
        data-aos="zoom-in">
<CountdownCircleTimer
        {...timerProps}
        colors="#F7B801"
        duration={daysDuration}
        // colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        initialRemainingTime={remainingTime}

      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
</div>
<div
data-aos-duration="6500"
data-aos-easing="ease-in-out"
data-aos="zoom-in">
             
<CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
        
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
</div>
<div
  data-aos-duration="8500"
  data-aos-easing="ease-in-out"
  data-aos="zoom-in">
<CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
</div>
<div
  data-aos-duration="9500"
  data-aos-easing="ease-in-out"
  data-aos="zoom-in">
    
<CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
</div>
            </div>
 
     
        </div>
       </div>
    );
};

export default Blogs;