```markdown
# Pokédex Application

This project is a Pokédex application built with an Angular frontend and a NestJS backend. The backend interacts with the PokéAPI to fetch Pokémon data, and the frontend displays this data to the user.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v20 or later)
- npm (v10 or later)
- Docker (optional, for containerized setup)
- Docker Compose (optional, for containerized setup)

## Getting Started

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/gustavodsf/pokedex.git
cd pokedex
```

### Step 2: Set Up the Backend (NestJS)

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm run start
    ```

   The backend server should now be running on `http://localhost:3000`.

### Step 3: Set Up the Frontend (Angular)

1. Open a new terminal and navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the Angular application:

    ```bash
    ng serve
    ```

   The frontend application should now be running on `http://localhost:4200`.

### Step 4: Access the Application

Open your web browser and navigate to `http://localhost:4200` to access the Pokédex application.

## Dockerized Setup (Optional)

If you prefer to run the application using Docker, follow these steps:

1. Ensure Docker and Docker Compose are installed on your machine.

2. Navigate to the root directory of the project:

    ```bash
    cd pokedex
    ```

3. Build and start the containers using Docker Compose:

    ```bash
    docker-compose up --build
    ```

   This will build the Docker images for both the backend and frontend, and start the containers. The backend will be available at `http://localhost:3000` and the frontend at `http://localhost:4200`.

## Project Structure

- `api/`: Contains the NestJS backend code.
- `app/`: Contains the Angular frontend code.

## API Endpoints

The backend exposes the following API endpoints:

- `GET /pokemon`: Fetch a list of Pokémon with pagination.
- `GET /pokemon/:name`: Fetch details of a specific Pokémon by name.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
```