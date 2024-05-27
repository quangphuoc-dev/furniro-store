// Định nghĩa hàm formatNumber để định dạng số thành chuỗi có dấu phân cách
export const formatNumber = (num) => {
    // Khởi tạo biến numString để lưu chuỗi kết quả
    let numString = "";
    
    // Sử dụng vòng lặp while để xử lý từng nhóm ba chữ số từ cuối lên đầu
    while (num > 0) {
      // Lấy ba chữ số cuối cùng của num
      let div = num % 1000;
      // Loại bỏ ba chữ số cuối cùng khỏi num
      num = Math.floor(num / 1000);
      
      // Nếu num vẫn còn lớn hơn 0, nghĩa là vẫn còn các nhóm ba chữ số cần xử lý
      if (num !== 0) {
        // Nếu nhóm ba chữ số có ít hơn ba chữ số, thêm các số 0 vào đầu để đủ ba chữ số
        if (div < 10) {
          div = "00" + div;
        } else if (div < 100) {
          div = "0" + div;
        }
        // Thêm nhóm ba chữ số vừa xử lý vào đầu chuỗi numString, kèm theo dấu chấm phân cách
        numString = "." + div + numString;
      } else {
        // Nếu không còn nhóm ba chữ số nào nữa, thêm nhóm chữ số cuối cùng vào đầu chuỗi numString
        numString = div + numString;
      }
    }
    
    // Trả về chuỗi kết quả đã được định dạng
    return numString;
  };
  