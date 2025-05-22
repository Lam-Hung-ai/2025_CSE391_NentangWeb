import React, { useEffect, useState, useRef } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    console.log(`seconds thay đổi thành ${seconds}. Bắt đầu lại bộ đếm từ 0`);

    // Thiết lập interval để tăng seconds mỗi giây
    intervalRef.current = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Hàm cleanup
    return () => {
      console.log(`useEffect Cleanup: Dọn dẹp bộ đếm khi initialDelay thay đổi hoặc component unmount.`);
      clearInterval(intervalRef.current);
    };
  }, [seconds]); // Dependency array: useEffect này sẽ re-run khi `initialDelay` thay đổi

  const stop = () => {
    clearInterval(intervalRef.current); // Đảo ngược trạng thái isRunning
    console.log("Đồng hồ đã tạm dừng (unmount)");
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Đồng hồ đếm (Function Component)</h2>
      <p className="text-6xl font-extrabold text-blue-600 font-inter">
        {seconds}
      </p>
      <p className="text-xl text-gray-700 font-semibold">
        Giây đã trôi qua (Bắt đầu từ 0)
      </p>
      <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={stop}>
        Tạm dừng
      </button>
    </div>
  );
}