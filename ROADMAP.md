# Apis Project Roadmap

This document outlines the development phases and key tasks for building the Apis application.

---

## ✅ Phase 0: The Blueprint & Setup (Completed)

This phase involved designing the application architecture, setting up the development environment, and establishing the project foundation.

- [x] Design the Database Blueprint (v1.0)
- [x] Set up the Local Development Toolkit (VS Code, Node, Docker, Git)
- [x] Initialize the Node.js Backend Project
- [x] Create the GitHub Repository and Push Initial Code

---

## 🏗️ Phase 1: Core Backend - Authentication & Foundation (Current Phase)

This phase focuses on building the core infrastructure of the API, including the database connection and the essential user authentication system.

- [X] **Connect to Database:**
    - [X] Create the PostgreSQL database instance using Docker.
    - [X] Write the database connection logic in the Node.js application.
    - [X] Test the connection to ensure the API can communicate with the database.
- [X] **Create Core Database Tables (Migrations):**
    - [X] Set up a migration tool (e.g., Knex.js).
    - [X] Write the first migration for `Companies`, `Contacts`, and `Users` tables.
- [ ] **Build User Registration Endpoint:**
    - [ ] Create the API route (`POST /api/auth/register`).
    - [ ] Implement input validation.
    - [ ] Implement password hashing with `bcrypt`.
    - [ ] Write logic to save the new user and associated contact/company.
- [ ] **Build User Login Endpoint:**
    - [ ] Create the API route (`POST /api/auth/login`).
    - [ ] Write logic to validate credentials.
    - [ ] Generate and return a JSON Web Token (JWT).
- [ ] **Implement Authentication Middleware:**
    - [ ] Write middleware to protect routes by verifying the JWT.
    - [ ] Apply middleware to a test route to ensure it's secure.

---

## 📈 Phase 2: Core Backend - Business Logic

Once the foundation is built, we will implement the core business features of the application.

- [ ] **Customer & Site Management:**
    - [ ] Write migrations for `Customers`, `Sites`, `BillToAccounts`.
    - [ ] Build CRUD (Create, Read, Update, Delete) API endpoints for all three.
- [ ] **Equipment & Service Catalog:**
    - [ ] Write migrations for `EquipmentTypes`, `ServiceDetails`, `PricedServices`.
    - [ ] Build CRUD API endpoints for the catalogs.
    - [ ] Build CRUD API endpoints for individual `Equipment`.
- [ ] **Work Order Management:**
    - [ ] Write migrations for `WorkOrders`, `ServiceRecords`, `WorkOrderLineItems`.
    - [ ] Build API endpoints to create and manage `WorkOrders`.
    - [ ] Build API endpoints for technicians to log `ServiceRecords`.
- [ ] **Inspections & Certificates:**
    - [ ] Write migrations for all Inspection and Certificate tables.
    - [ ] Build API endpoints to manage `InspectionTemplates`.
    - [ ] Build API endpoints to submit `InspectionResults`.
    - [ ] Build logic to generate and store `GeneratedCertificates`.

---

## 🖥️ Phase 3: Web Application Frontend (The Cockpit)

With a robust backend, we will build the web interface for office staff.

- [ ] **Project Setup:** Initialize a Next.js (React) project.
- [ ] **Authentication:** Build Login and Logout functionality.
- [ ] **Dashboard:** Create a main dashboard to view key metrics.
- [ ] **Customer & Site Management:** Build the UI to manage customers and sites.
- [ ] **Work Order & Scheduling:** Build the UI to create, schedule, and dispatch work orders.
- [ ] **Reporting:** Build basic reporting features.

---

## 📱 Phase 4: Mobile Application (The Field Tool)

Finally, we will build the mobile app for technicians in the field.

- [ ] **Project Setup:** Initialize a React Native project.
- [ ] **Authentication:** Build Login and Logout functionality.
- [ ] **Job List:** Create the main screen for a technician to view their daily jobs.
- [ ] **Work Order Details:** Build the view to see job details, site info, and contacts.
- [ ] **Service Logging:** Build the interface to manage site equipment and log `ServiceRecords`.
- [ ] **Inspections:** Build the UI to complete inspection checklists.