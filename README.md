

Number Checker is a web application that allows users to verify if a phone number is registered on popular platforms like Swiggy, Amazon, Snapdeal, and Flipkart. Zomato support will be added soon.

## Features

- **Service Selection**: Users can select the platform they want to check.
- **Phone Number Validation**: Ensures the input is a valid 10-digit Indian phone number.
- **Real-Time Status**: Displays whether the number is registered or not.

## Tech Stack

- **Frontend**: React.js with Tailwind CSS for styling.
- **Backend**: Node.js with Express.js handling API requests.
- **Environment**: The app is configured to work in both development and production environments.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akhilnandavara/FindNewUser.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd number-checker
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a `.env` file and configure your environment variables:**
   ```bash
   BACKEND_DEP=dev
   BACKEND_DEV_URL=http://localhost:4000
   BACKEND_DEP_URL=https://your-production-url.com
   ```
5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

1. Select a service from the dropdown.
2. Enter a valid 10-digit phone number.
3. Click on "Check Number" to see if the number is registered.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.
```