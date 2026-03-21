# ⛩️ Kodo 
> **"Turning thoughts into action, one minimalist step at a time."**

**Kodo List** is more than just a typical task management app. Inspired by the Japanese word **Kōdō (行動 - Action)**, it is a digital workspace designed to help you focus entirely on getting things done rather than just listing them.

---

## 🛠 Technical Stack

The project is built with a focus on scalability and modern web standards:

### 1. Frontend (User Interface)
* **HTML5 & CSS3:** Semantic structure and minimalist design. (In progress)
* **TypeScript:** Ensuring type safety and reducing runtime logic errors. (In progress)
* **Tailwind CSS:** Utility-first CSS framework for rapid and responsive UI development.

### 2. Backend & Database (Server-side)
* **Node.js & Express.js:** Building a fast, lightweight, and scalable RESTful API.
* **PostgreSQL:** Advanced relational database to ensure data integrity and robust management.

### 3. Development Tools
* **Git & GitHub:** Version control and source code collaboration. (In progress)
* **Linux & Docker:** Optimized development environment and consistent application containerization.

---
demo Kodo_List/
├── client/                # Mã nguồn Frontend (React + TypeScript)
│   ├── public/            # Các file tĩnh (Images, Icons, Favicon)
│   ├── src/
│   │   ├── components/    # Các thành phần giao diện dùng chung (Button, Input, Card)
│   │   ├── pages/         # Các trang chính (Home, Login, Dashboard)
│   │   ├── services/      # Nơi gọi API từ Backend (Axios/Fetch)
│   │   ├── store/         # Quản lý trạng thái (Redux/Zustand)
│   │   └── App.tsx        # File chạy chính của Frontend
│   └── package.json       # Dependencies của Frontend
│
├── server/                # Mã nguồn Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/        # Cấu hình Database (PostgreSQL), biến môi trường
│   │   ├── controllers/   # Xử lý logic nghiệp vụ cho từng Route
│   │   ├── models/        # Định nghĩa cấu trúc bảng Database
│   │   ├── routes/        # Định nghĩa các đường dẫn API (Endpoints)
│   │   └── index.ts       # Điểm khởi đầu của Server
│   ├── .env.example       # File mẫu cấu hình bảo mật (Mật khẩu DB, Port)
│   └── package.json       # Dependencies của Backend
│
├── docs/                  # Tài liệu hướng dẫn, sơ đồ ERD, thiết kế UI/UX
├── scripts/               # Các script hỗ trợ (Seed data, Migration)
├── .gitignore             # Danh sách các file/thư mục không đẩy lên GitHub (node_modules, .env)
├── docker-compose.yml     # File cấu hình khởi chạy nhanh toàn bộ hệ thống
└── README.md              # Tài liệu hướng dẫn dự án
