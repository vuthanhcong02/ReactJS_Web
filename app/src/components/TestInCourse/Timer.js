import React from "react";
import { useEffect ,useState} from "react";
const Timer = () => {
    const [second, setSecond] = useState(60);
    const [minute, setMinute] = useState(60);
    useEffect(() => {
        let interval;
      
          interval = setInterval(() => {
            setSecond(second - 1);
            if(second === 0) {
              setMinute(minute - 1);
              setSecond(59);
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