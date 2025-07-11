# 🍽️ Swiggy Clone - React Frontend

A fully responsive Swiggy UI clone built with **React**, **Tailwind CSS**, and **Parcel**.  
This project fetches **live data from Swiggy’s public APIs**, giving you real-time restaurant listings, menu details, and item data.

---

## 🚀 Live Demo

🌐 [View Live on Netlify](https://delicate-froyo-bfa261.netlify.app/)  
*(Replace with your actual URL)*

---

## 📂 Project Structure

```
src/
├── index.html          # Entry HTML
├── index.jsx           # React entry point
├── index.css           # Tailwind base styles
├── components/         # All reusable React components
├── cartStore/          # Redux store for cart management
├── utils/              # Static mock data (if fallback needed)
```

---

## 🛠️ Built With

- ⚛️ React 19
- 🎯 Redux Toolkit
- 🎨 Tailwind CSS
- 📦 Parcel 2
- 🌐 React Router 7

---

## 🌐 Real-Time API Integration

Unlike most clones that use static mock data, this project uses **Swiggy’s live API endpoints** to display:

- ✅ Real restaurant data
- ✅ Live menus and items
- ✅ Dynamic restaurant listings and categories

This gave me a **deeper hands-on understanding of API handling**, including:

- Parsing deeply nested JSON
- Handling async data loading
- Error boundary strategies
- Integrating with Redux for live updates

---

## 📦 Installation & Development

### 1. Clone the Repository

```bash
git clone https://github.com/vinay27-code/swiggy-clone-using-React.git
cd swiggy-clone-using-React
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Local Server

```bash
parcel src/index.html
```

Then open [http://localhost:1234](http://localhost:1234) in your browser.

---

## 🧪 Features

- 🔍 Live search with Swiggy data
- 🏠 Homepage with real categories & deals
- 🛒 Cart and checkout view
- ⚡ Fast loading shimmer UI
- 🎯 Centralized Redux store for state
- 🌐 Real-time network requests and data binding

---

## 📤 Deployment

### Deployed with Netlify

Make sure your `package.json` contains:
```json
"scripts": {
  "build": "parcel build src/index.html"
}
```

**Netlify Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

---

## 📸 Screenshots (Optional)

<img width="2304" height="1536" alt="Screenshot 2025-07-11 020524" src="https://github.com/user-attachments/assets/9815117f-ca25-44a7-9cc3-23e703f12b43" />
<img width="2304" height="1536" alt="Screenshot 2025-07-11 020541" src="https://github.com/user-attachments/assets/a871adda-d7ed-4ad7-9e12-3fb5c4e7a5de" />
<img width="2304" height="1536" alt="Screenshot 2025-07-11 020555" src="https://github.com/user-attachments/assets/986cb0b4-5a76-4889-98ac-d2959616a1ae" />
<img width="2304" height="1536" alt="Screenshot 2025-07-11 020611" src="https://github.com/user-attachments/assets/ec3b9fe2-e48d-4801-9dea-3ce05a0c1c24" />
<img width="2304" height="1536" alt="Screenshot 2025-07-11 020631" src="https://github.com/user-attachments/assets/3ee6530c-bbe0-4789-8e14-b916bcfb6dcf" />
<img width="2304" height="1536" alt="Screenshot 2025-07-11 020647" src="https://github.com/user-attachments/assets/656002f7-f9f8-40ae-a210-ccddf6439879" />
<img width="2304" height="1536" alt="Screenshot 2025-07-11 020655" src="https://github.com/user-attachments/assets/3c9e66c0-dccc-4484-8285-954a443afccc" />



---

## 🧑‍💻 Author

👤 [Vinay](https://github.com/vinay27-code)  
I built this project to sharpen my frontend skills and develop a strong, real-world understanding of API interaction in production-like apps.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
