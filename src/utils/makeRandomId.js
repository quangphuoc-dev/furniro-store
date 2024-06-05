// Xuất hàm có tên là makeRandomId
export const makeRandomId = () => {
    // Khởi tạo một chuỗi rỗng để chứa kết quả cuối cùng
    let result = "";

    // Định nghĩa một chuỗi chứa tất cả các ký tự có thể được sử dụng trong ID
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Vòng lặp qua độ dài của chuỗi characters để tạo ra một ID ngẫu nhiên có cùng độ dài
    for (let i = 0; i < characters.length; i++) {
        // Chọn một ký tự ngẫu nhiên từ chuỗi characters
        // Math.random() tạo ra một số ngẫu nhiên giữa 0 và 1
        // Nhân với characters.length sẽ cho một số nằm trong khoảng từ 0 đến độ dài của chuỗi characters
        // Math.floor làm tròn xuống số nguyên gần nhất
        // characters.charAt() chọn ký tự tại chỉ số đã tính toán
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    // Trả về ID ngẫu nhiên đã được tạo ra
    return result;
};
