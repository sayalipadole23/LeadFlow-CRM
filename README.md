# LeadFlow CRM – Lead Management System

A full-stack Lead Management CRM application developed using **Java Spring Boot, React.js, and MySQL**. It helps users manage customer leads through a simple and user-friendly dashboard.

## 🚀 Project Overview

LeadFlow CRM is designed to organize and manage potential customers (leads) in one place. Users can add new leads, view lead details, update information, search records, filter leads by status, and delete leads.

The application uses Spring Boot REST APIs to connect the React frontend with the MySQL database.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- Lucide React
- Vite

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Maven
- REST APIs

### Database
- MySQL

### Development Tools
- Eclipse IDE
- Visual Studio Code
- MySQL Workbench
- Postman
- Git and GitHub

## ✨ Features

- Add new leads
- View all leads
- Edit existing lead details
- Delete leads
- Search leads by name, email, or company
- Filter leads by status
- Dashboard statistics
- REST API integration
- MySQL database connectivity
- Responsive and clean user interface

## 📁 Project Structure

```text
LeadFlow-CRM/
│
├── leadflow-backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/leadflow/backend/
│   │       │       ├── controller/
│   │       │       ├── entity/
│   │       │       ├── repository/
│   │       │       ├── service/
│   │       │       └── LeadflowBackendApplication.java
│   │       └── resources/
│   │
│   └── pom.xml
│
├── leadflow-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Java JDK 21
- Eclipse IDE with Spring Tools
- Node.js and npm
- MySQL Server and MySQL Workbench
- Visual Studio Code

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd LeadFlow-CRM
```

### 2. Backend Setup

1. Open the `leadflow-backend` folder in Eclipse.
2. Configure your MySQL database credentials in `application.properties`.
3. Create the database:

```sql
CREATE DATABASE leadflow_crm;
```

4. Update the database username and password in your local configuration.
5. Run `LeadflowBackendApplication.java` as a Spring Boot application.

Backend URL:

```text
http://localhost:8080
```

### 3. Frontend Setup

1. Open the `leadflow-frontend` folder in VS Code.
2. Open the terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the React development server:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## 🔗 REST API Endpoints

Base URL: `http://localhost:8080/api/leads`

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/leads` | Get all leads |
| GET | `/api/leads/{id}` | Get lead by ID |
| POST | `/api/leads` | Create a new lead |
| PUT | `/api/leads/{id}` | Update lead details |
| DELETE | `/api/leads/{id}` | Delete a lead |

## 🗄️ Database

Database Name: `leadflow_crm`

Table Name: `leads`

The lead records contain information such as:

- ID
- Name
- Email
- Phone
- Company
- Source
- Status
- Created At

## 🔄 Application Workflow

1. User interacts with the React frontend.
2. Axios sends HTTP requests to the Spring Boot backend.
3. Spring Boot REST controllers handle incoming requests.
4. Service and repository layers process the operations.
5. Spring Data JPA communicates with the MySQL database.
6. The backend returns responses to the React frontend.

## 👩‍💻 Developer

**Developed as a Full Stack Web Development Project**

## 📌 Future Enhancements

- User authentication and authorization
- Role-based access control
- Lead assignment
- Lead activity tracking
- Advanced reports and analytics
