# ⛩️ Kodo 
> **"Turning thoughts into action, one minimalist step at a time."**

**Kodo List** is more than just a typical task management app. Inspired by the Japanese word **Kōdō (行動 - Action)**, it is a digital workspace designed to help you focus entirely on getting things done rather than just listing them.

---

## 🛠 Technical Stack

The project is built with a focus on scalability and modern web standards:

### 1. Frontend (User Interface)
* **HTML5 & CSS3:** Semantic structure and minimalist design. (In progress)
* **TypeScript:** Ensuring type safety and reducing runtime logic errors. (In progress)
* **Tailwind CSS:** Utility-first CSS framework for rapid and responsive UI development. (In progress)

### 2. Backend & Database (Server-side)
* **Node.js & Express.js:** Building a fast, lightweight, and scalable RESTful API.
* **PostgreSQL:** Advanced relational database to ensure data integrity and robust management.

### 3. Development Tools
* **Git & GitHub:** Version control and source code collaboration. (In progress)
* **Linux & Docker:** Optimized development environment and consistent application containerization. (In progress)

---
## 📂 Project Structure

```text
Kodo_List/
├── Frontend/              # Client-side (React/Vite + TS)
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application views
│   │   ├── services/      # API communication (Axios)
│   │   └── types/         # TypeScript definitions
│   ├── tailwind.config.js
│   └── package.json
│
├── Server/                # Backend-side (Node.js + Express)
│   ├── src/
│   │   ├── controllers/   # Request handling logic
│   │   ├── models/        # Database schemas
│   │   ├── routes/        # API endpoints
│   │   ├── middleware/    # Security & Logging
│   │   └── index.ts       # Entry point
│   ├── .env.example       # Environment template
│   └── package.json
│
├── DATA/                  # Project documentation & raw data
├── docker-compose.yml     # Container orchestration
└── README.md.md              # Tài liệu hướng dẫn dự án
