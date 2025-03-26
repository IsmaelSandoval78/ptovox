import { HomePage } from './pages/HomePage.js';
import { GeneratePage } from './pages/GeneratePage.js';
import { PreviewPage } from './pages/PreviewPage.js';
import { DashboardPage } from './pages/DashboardPage.js';

// Lógica básica de enrutamiento simple
const routes = {
  '/': HomePage,
  '/generate': GeneratePage,
  '/preview': PreviewPage,
  '/dashboard': DashboardPage,
};

const root = document.getElementById('root');
const navigate = (path) => {
  root.innerHTML = '';
  routes[path]();
};

// Navegación básica (puedes mejorarlo con botones y event listeners)
navigate('/'); // Cargar home por default
