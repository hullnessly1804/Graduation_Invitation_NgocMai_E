// Đợi trang tải hoàn tất trước khi chạy code
document.addEventListener("DOMContentLoaded", () => {
  // Lấy các phần tử từ DOM
  const yesButton = document.querySelector(".btn--yes"); // Nút "Có"
  const noButton = document.querySelector(".btn--no"); // Nút "Không"
  const notification = document.querySelector("#notification"); // Phần tử thông báo
  let yesButtonScale = 1.1; // Kích thước chữ ban đầu của nút "Có" (1.1em)

  // Xử lý sự kiện khi nhấn nút "Có"
  yesButton.addEventListener("click", () => {
    // Tạo phần tử <img> mới cho ảnh toàn màn hình
    const fullscreenImg = document.createElement("img");
    fullscreenImg.src = "E.png"; // Đường dẫn tới ảnh cục bộ
    fullscreenImg.className = "fullscreen-img"; // Gán class để áp dụng kiểu CSS
    fullscreenImg.alt = "Hình ảnh chúc mừng"; // Văn bản mô tả ảnh

    // Xóa nội dung hiện tại của body và thêm ảnh
    document.body.innerHTML = "";
    document.body.appendChild(fullscreenImg);
  });

  // Xử lý sự kiện khi nhấn nút "Không"
  noButton.addEventListener("click", () => {
    // Hiển thị thông báo trên màn hình
    notification.style.display = "block"; // Hiển thị phần tử thông báo
    notification.classList.add("show"); // Thêm class để kích hoạt hiệu ứng
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.style.display = "none";
      }, 500); // Đợi hiệu ứng mờ dần hoàn tất
    }, 3000);
    // Tăng kích thước nút "Có", giữ nguyên nút "Không"
    yesButtonScale += 0.2; // Tăng kích thước chữ 0.2em
    yesButton.style.fontSize = `${yesButtonScale}em`; // Cập nhật kích thước chữ
    yesButton.style.padding = `${12 + yesButtonScale * 5}px ${24 + yesButtonScale * 5}px`; // Cập nhật đệm
  });
});