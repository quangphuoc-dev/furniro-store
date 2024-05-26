// Hàm `makeOrderNumber` dùng để tạo số đơn hàng ngẫu nhiên
export const makeOrderNumber = () => {
    let result = ""; // Biến lưu trữ số đơn hàng
    const characters = "0123456789"; // Chuỗi ký tự cho phép trong số đơn hàng
  
    // Lặp qua 5 lần để tạo số đơn hàng
    for (let i = 0; i < 5; i++) {
      // Thêm một chữ số ngẫu nhiên vào `result` trong mỗi lần lặp
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result; // Trả về số đơn hàng đã được tạo
  };
  