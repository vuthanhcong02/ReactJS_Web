import React from "react";
import { useEffect ,useState} from "react";
const Timer = ({onTimerExpired}) => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(1);
    useEffect(() => {
        let interval;
      
          interval = setInterval(() => {
            setSecond(second - 1);
            if(second === 0) {
              setMinute(minute - 1);
              setSecond(59);
            }
            if(minute ===0 && second === 0) {
              onTimerExpired();
            }
          }, 1000); // Cập nhật thời gian mỗi giây
      
        // Hủy interval khi component unmount hoặc countdown không còn active
        return () => clearInterval(interval);
      }, [second, minute]);
    return <>
        {minute} : {second < 10 ? `0${second}` : second}
    </>;
}
export default Timer;