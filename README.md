# 📘 Lifecycle Methods & `useEffect` trong React

## 1. Giới thiệu tổng quan

### 1.1 Component là gì?
-	Là những mảng code mang tính dùng lại và hoạt động độc lập, đặc điểm giống hàm trong javascripts và trả về giá trị HTML.

Có hai loại component:
- **Class Component**
- **Function Component**

### 1.2 Lifecycle Method
Mỗi component có một vòng đời: **Tạo – Cập nhật – Gỡ bỏ khỏi DOM**.

-	Lifecycle method cung cấp cho ta các hàm để thay đổi các giai đoạn trong vòng đời của component. Có 3 giai đoạn là: 
- **Mounting** (Gắn vào DOM)
- **Updating** (Cập nhật)
- **Unmounting** (Gỡ khỏi DOM)

![Hình minh họa](https://th.bing.com/th/id/OIP.hSO--5BPT1K_YK6VqRy4vgHaD4?cb=iwp2&rs=1&pid=ImgDetMain)

### 1.3 Hooks là gì?
Hooks là các hàm đặc biệt trong React giúp sử dụng **state** và các tính năng lifecycle trong Function Component.

Ví dụ: `useState`, `useEffect`, `useRef`, `useMemo`, ...

---

## 2. Lifecycle Methods trong Class Component

### 2.1 Mounting Phase (Giai đoạn gắn vào DOM)

| Method | Chức năng |
|--------|----------|
| `constructor(props)` | Khởi tạo state, bind phương thức. |
| `static getDerivedStateFromProps(props, state)` | Cập nhật state từ props trước khi render. |
| `render()` | Trả về JSX để hiển thị. |
| `componentDidMount()` | Gọi API, thao tác DOM sau khi render lần đầu. |

### 2.2 Updating Phase (Cập nhật)

| Method | Chức năng |
|--------|----------|
| `static getDerivedStateFromProps()` | Cập nhật state dựa trên props mới. |
| `shouldComponentUpdate()` | Quyết định có nên re-render hay không. |
| `render()` | Trả về JSX mới. |
| `getSnapshotBeforeUpdate()` | Lưu trạng thái trước khi DOM cập nhật. |
| `componentDidUpdate()` | Gọi sau khi component cập nhật xong. |

### 2.3 Unmounting Phase (Gỡ bỏ)

| Method | Chức năng |
|--------|----------|
| `componentWillUnmount()` | Dọn dẹp như huỷ timer, huỷ đăng ký sự kiện,... |

### 2.4 Error Handling Phase (Xử lý lỗi)

| Method | Chức năng |
|--------|----------|
| `static getDerivedStateFromError()` | Xử lý giao diện fallback nếu có lỗi runtime. |
| `componentDidCatch()` | Ghi log lỗi, báo cáo lỗi đến server,... |

---

## 3. `useEffect` trong Function Component

### 3.1 Khái niệm
`useEffect` là Hook cho phép thực hiện **side effects** như:
- Gọi API
- Lắng nghe sự kiện
- Thao tác DOM
- Set/Clear `setTimeout`, `setInterval`

`useEffect` thay thế cho:
- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

### 3.2 Cú pháp

```jsx
useEffect(() => {
  // Side effect tại đây

  return () => {
    // Hàm cleanup (dọn dẹp)
  };
}, [dependencies]);

```
[]: chỉ chạy một lần sau khi component mount.

[count]: chạy lại khi count thay đổi.

Không có dependency: chạy sau mọi lần render.

## 3.3 Hàm cleanup là gì?

Mục đính hàm clean-up:
- Giảm rò rỉ bộ nhớ
- Tránh lỗi
- Giữ cho ứng dụng sạch sẽ

Hàm cleanup được **return từ `useEffect`** giúp:
- Huỷ event listener
- Dừng timer
- Giải phóng tài nguyên

Chạy khi:
- Component **unmount**
- **Dependencies thay đổi** → chạy effect mới

---

## 4. So sánh: Function Component vs Class Component

| Tiêu chí | Function Component (`useEffect`) | Class Component (Lifecycle Methods) |
|----------|----------------------------------|-------------------------------------|
| **Cấu trúc** | Một hook `useEffect` xử lý tất cả giai đoạn (mount, update, unmount) | Nhiều method riêng biệt (componentDidMount, componentDidUpdate, componentWillUnmount) |
| **Cleanup** | Trả về hàm cleanup trong useEffect (khi unmount hoặc trước khi effect chạy lại) | Dọn dẹp trong componentWillUnmount |
| **Truy cập state / props** | Qua `useState`, `useReducer`, `props` | Qua `this.state`, `this.props` |
| **Tái sử dụng logic** | Cao, dễ đóng gói thành custom hooks để tái sử dụng | Thấp, thường dùng HOC hoặc render props |
| **Độ rõ ràng giai đoạn** | Ít tách biệt, dùng nhiều useEffect với dependency khác nhau để phân chia logi | Rõ ràng, mỗi lifecycle method xử lý riêng từng giai đoạn |
| **Dễ học** | Dễ hiểu, logic hook dễ test và tái sử dụng | Khó với người mới do this và lifecycle phức tạp |

---

## 📌 Tóm tắt
✅ `useEffect` là cách hiện đại, gọn nhẹ, quản lý side effects hiệu quả trong function component.

⚙️ Lifecycle methods rõ ràng nhưng kém linh hoạt và khó tái sử dụng.

💡 **React hiện đại khuyến khích dùng Function Component + Hooks vì**:
- Code ngắn gọn, dễ hiểu
- Dễ tái sử dụng và test
- Hạn chế các lỗi do quản lý `this`

---

## 📚 Tài liệu tham khảo
- [W3Schools: React Lifecycle](https://www.w3schools.com/react/react_lifecycle.asp)
- [W3Schools: useEffect](https://www.w3schools.com/react/react_useeffect.asp)
