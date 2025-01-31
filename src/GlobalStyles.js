import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #D758E5; /* A vibrant purple-pink */
    --secondary-color: #FFC107; /* A warm golden yellow */
    --background-color: #F8F9FA; /* A clean, bright background */
    --text-color: #222; /* Darker gray for contrast */
    --text-light: #555; /* Medium gray for secondary text */
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Montserrat', sans-serif;
    --spacing-unit: 1rem; /* Base spacing unit */
    --border-radius: 12px; /* Smoother rounded corners */
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); /* More depth */
    --transition: all 0.3s ease-in-out; /* Smooth transitions */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    line-height: 1.8;
    color: var(--text-color);
    background-color: var(--background-color);
    transition: var(--transition);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: bold;
    transition: var(--transition);

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    margin-bottom: var(--spacing-unit);
    color: var(--text-color);
  }

  p {
    margin-bottom: var(--spacing-unit);
    color: var(--text-light);
    font-size: 1.1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-unit);
  }

  button {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    border: none;
    padding: calc(var(--spacing-unit) * 0.8) calc(var(--spacing-unit) * 1.2);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .card {
    background: white;
    padding: calc(var(--spacing-unit) * 1.5);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    text-align: center;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background: linear-gradient(135deg, rgba(215, 88, 229, 0.8), rgba(255, 193, 7, 0.8)), url('/images/hero-bg.jpg') no-repeat center center/cover;
    color: white;
    padding: var(--spacing-unit);
  }

  .hero h1 {
    font-size: 3.5rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .hero p {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
