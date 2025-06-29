# self-service-order-using-vue.js

A simple, responsive self-service ordering application built with HTML, CSS, and JavaScript using Vue.js CDN. This lightweight application allows customers to browse menu items, customize orders, and manage their cart without requiring a complex build setup.

## 🚀 Features

- **Interactive Menu**: Browse through categorized menu items with images and descriptions
- **Order Customization**: Add items to cart with quantity selection and customization options
- **Real-time Cart Management**: Add, remove, and modify items in the shopping cart
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Simple Setup**: No build process required - runs directly in the browser

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Vue.js 3 (CDN)
- **Styling**: Custom CSS
- **Images**: Local image assets
- **No Build Tools**: Direct browser execution

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional, for local development)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/chandu9400/self-service-order-using-vue.js.git
   cd self-service-order-using-vue.js
   ```

2. **Open the application**
   
   **Option 1: Direct file opening**
   - Simply open `index.html` in your web browser
   
   **Option 2: Local server (recommended)**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx serve .
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```
   
   Then navigate to `http://localhost:8000`

## 🏗️ Project Structure

```
self-service-order-using-vue.js/
├── img/                    # Image assets for menu items
├── index.html             # Main HTML file
├── scripts.js             # Vue.js application logic
├── style.css              # Custom styling
└── README.md              # Project documentation
```

## 🎯 Usage

1. **Open the Application**: Launch `index.html` in your browser
2. **Browse Menu**: View available menu items with images and prices
3. **Add to Cart**: Click on items to add them to your order
4. **Manage Cart**: Adjust quantities or remove items as needed

## 📱 File Descriptions

- **`index.html`**: Main application interface with Vue.js structure
- **`scripts.js`**: Contains Vue.js application logic, data management, and methods
- **`style.css`**: Custom styling for responsive design and UI components
- **`img/`**: Directory containing menu item images and assets

## 🔧 Customization

To customize the application for your needs:

1. **Menu Items**: Update the menu data in `scripts.js`
2. **Styling**: Modify `style.css` to change colors, fonts, and layout
3. **Images**: Replace images in the `img/` folder with your menu items
4. **Functionality**: Extend Vue.js methods in `scripts.js` for additional features

## 🚀 Deployment

Since this is a static application, it can be easily deployed on:

- **GitHub Pages**: Enable GitHub Pages in repository settings
- **Netlify**: Drag and drop the project folder
- **Vercel**: Import the repository
- **Any Web Server**: Upload files to your web hosting service

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

- **Vue.js CDN**: The application uses Vue.js via CDN link in the HTML file
- **No Build Process**: Direct development in browser - just edit and refresh
- **Lightweight**: Perfect for small to medium-sized ordering systems
- **Easy Maintenance**: Simple file structure makes updates straightforward

## 🐛 Troubleshooting

- **Images not loading**: Ensure image files are in the `img/` folder and paths are correct
- **JavaScript errors**: Check browser console for Vue.js or JavaScript issues
- **Styling issues**: Verify CSS file is properly linked in `index.html`
- **CORS issues**: Use a local server instead of opening HTML file directly

## 🐛 Known Issues

- List any known bugs or limitations
- Provide workarounds if available

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chandraket**
- GitHub: [@chandu9400](https://github.com/chandu9400)

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Contributors and community for feedback and suggestions
- [Add any other acknowledgments]

⭐ If you found this project helpful, please give it a star!
