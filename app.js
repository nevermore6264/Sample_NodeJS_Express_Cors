// Import thư viện
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

// Tạo một instance của ứng dụng Express
const app = express();

// Cho phép ứng dụng nhận và xử lý dữ liệu JSON từ client
app.use(bodyParser.json());

// Bật middleware CORS để cho phép các yêu cầu từ các nguồn khác nhau
// Giúp tránh lỗi CORS khi client và server không cùng một nguồn
app.use(cors());

// Định nghĩa routes với prefix /api
// Tất cả các route sẽ được truy cập thông qua prefix /api
app.use("/api", routes);

// Định nghĩa cổng mà server sẽ lắng nghe
const PORT = 3000;

// Khởi động server và lắng nghe các yêu cầu trên cổng đã định nghĩa
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
