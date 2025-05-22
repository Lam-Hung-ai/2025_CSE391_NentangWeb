// src/App.js
import React from 'react';
import { TimerClassComponent } from './TimerClassComponent'; // Đảm bảo đúng đường dẫn file

export default function App() {
  return (
    <div className="App">
      {/* Hiển thị Class Component đồng hồ */}
      <TimerClassComponent />
    </div>
  );
}