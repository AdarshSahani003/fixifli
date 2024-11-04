
# Fixifli

Welcome to **Fixifli**, your one-stop solution for scheduling and managing service bookings effortlessly. This app provides an intuitive interface for both users and service providers, making the booking process seamless and efficient.

## Features

- **Service Scheduling**: Easily book services like plumbing, electrical work, cleaning, and more.
- **User Authentication**: Secure login and signup system using Django for backend authentication.
- **Location-based Services**: Enter your location to see if our services are available in your area.
- **Responsive UI**: A user-friendly design built with React and styled using Tailwind CSS.
- **Notification System**: Custom notification bar for alerts and updates.
- **Cart Functionality**: Manage your service bookings with add, remove, and empty cart features using Redux.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm** or **yarn**: Comes with Node.js
- **Python**: [Download here](https://www.python.org/)
- **Django**: Install via `pip install django`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/fixifli.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd fixifli
   ```
3. **Install frontend dependencies**:
   ```bash
   npm install
   ```
4. **Set up the Django backend**:
   - Create a virtual environment:
     ```bash
     python -m venv env
     ```
   - Activate the virtual environment:
     - **Windows**: `env\Scripts\activate`
     - **Mac/Linux**: `source env/bin/activate`
   - Install backend dependencies:
     ```bash
     pip install -r requirements.txt
     ```
5. **Start the frontend server**:
   ```bash
   npm start
   ```
6. **Start the Django backend server**:
   ```bash
   python manage.py runserver
   ```

## Usage

- **Book a Service**: Use the intuitive service booking form to select and book services.
- **Location Input**: Enter your location and check if the services are available.
- **Cart Management**: Add or remove services from the cart and proceed to checkout.
- **Notifications**: Stay informed with real-time updates through the custom notification bar.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Redux, Parcel
- **Backend**: Django, REST API
- **Database**: SQLite (for development)
- **API**: Custom hooks for managing location and fetching product data
- **Loading Indicator**: Sky blue rotating circle

## Custom Hooks

### `useLocation`

Manages location-based logic:
- Checks if the location is serviceable.
- Auto-fills the city section when the location is verified.

### `useCategories`

Fetches and manages category data for the search bar suggestions.

## Deployment

Instructions for deploying Fixifli will be added soon.

## Contributing

1. **Fork the repository**
2. **Create your feature branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add feature description"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request**

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For questions or feedback, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Happy coding with Fixifli! 🚀
