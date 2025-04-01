// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Homepage</h1>
      <p style={styles.description}>Inicia sesión o Regístrate para continuar.</p>
      
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.button}>Iniciar sesión</Link>
        <Link to="/register" style={styles.button}>Registrarse</Link>
        <img src="/public/icons/Dark.jpg" alt="Descripción" />


      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#bc1bcb', // Fondo morado
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box', 
    backgroundImage: "url('public/icons/Dark.jpg')", // Ruta de la imagen
    backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
    backgroundPosition: 'center', // Centra la imagen
    backgroundRepeat: 'no-repeat',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#ffffff', // Blanco para contraste con el fondo morado
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ddd', // Color más claro para mejor visibilidad
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    backgroundColor: '#c82284', 
    color: 'black',
    padding: '15px 25px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  image: {
    width: '200px', // Ajusta el tamaño
    height: 'auto', // Mantiene la proporción
    marginBottom: '20px', // Espacio debajo de la imagen
    borderRadius: '10px', // Bordes redondeados opcionales
  },
};

export default HomePage;
