import React from 'react';

export class TimerClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Khởi tạo state seconds dựa trên initialDelay từ props
      seconds: props.initialDelay || 0,
    };
    this.intervalId = null;
    console.log('[Class Component] Constructor: Component được khởi tạo.');
  }

  componentDidMount() {
    console.log(`[Class Component] componentDidMount: Component đã được gắn vào DOM. Bắt đầu bộ đếm từ ${this.state.seconds}.`);
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    // So sánh prop initialDelay hiện tại với prop initialDelay trước đó
    if (this.props.initialDelay !== prevProps.initialDelay) {
      console.log(`[Class Component] componentDidUpdate: initialDelay thay đổi từ ${prevProps.initialDelay} sang ${this.props.initialDelay}.`);
      this.stopTimer(); // Dừng bộ đếm cũ
      this.setState({ seconds: this.props.initialDelay }); // Đặt lại số giây về giá trị initialDelay mới
      this.startTimer(); // Bắt đầu bộ đếm mới
    }
  }

  componentWillUnmount() {
    console.log('[Class Component] componentWillUnmount: Component sắp bị gỡ khỏi DOM. Dọn dẹp bộ đếm.');
    this.stopTimer();
  }

  startTimer = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1,
        }));
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("Đồng hồ đã tạm dừng");
    }
  };

  render() {
    console.log(`[Class Component] Render: Hiển thị giao diện với ${this.state.seconds} giây.`);
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Đồng hồ đếm (Class Component)</h2>
        <p className="text-6xl font-extrabold text-blue-600 font-inter">
          {this.state.seconds}
        </p>
        <p className="text-xl text-gray-700 font-semibold">
          Giây đã trôi qua (Bắt đầu từ {this.props.initialDelay})
        </p>
        <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={this.stopTimer}>
          Tạm dừng
        </button>
      </div>
    );
  }
}