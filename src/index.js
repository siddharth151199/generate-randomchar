import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const TrackImpression = (props) => {
    let counter = 0;
    let timer = null;
    const [name, setname] = useState('@Ac%&sF#')
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '10px', threshold:0.2 })
    useEffect(() => {
    if (inView) {
      // Fire a tracking event to your tracking service of choice.
      timer =   setInterval(() => {
        createChar()
    }, 50);// Here's a GTM dataLayer push
    }
    }, [inView])
  
 const createChar = ()=>{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
  
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
        
      setname(text);
      counter = counter+1;
      console.log(counter);

      if (counter === 50) {
          setname(props.name)
            clearInterval(timer)
      }
    }
    console.log('change',ref);
  return (
    <div ref={ref}>
    <p id="change"> {name} </p>
    </div>
  )
}

export default TrackImpression