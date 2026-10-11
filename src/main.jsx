import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import './styles/site.css';

const container = document.getElementById('app');
// 移除静态骨架的可见性覆盖，入场动画从隐藏状态开始
container.classList.remove('boot');

createRoot(container).render(
  <React.StrictMode><App /></React.StrictMode>,
);
