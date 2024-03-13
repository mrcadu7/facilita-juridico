const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const calculateDistance = require('../utils/distanceCalculator');

// Função para trocar dois pontos na rota
function twoOptSwap(route, i, k) {
  let newRoute = route.slice(0, i);
  let swap = route.slice(i, k + 1).reverse();
  newRoute = newRoute.concat(swap);
  newRoute = newRoute.concat(route.slice(k + 1));
  return newRoute;
}

// Função para calcular a distância total de uma rota
function calculateTotalDistance(route) {
  let totalDistance = 0;
  for (let i = 0; i < route.length - 1; i++) {
    totalDistance += calculateDistance(route[i].x, route[i].y, route[i + 1].x, route[i + 1].y);
  }
  return totalDistance;
}

// Rota para calcular a rota otimizada
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients');
    let route = result.rows;

    // Adiciona a empresa ao início e ao final da rota***
    const company = { x: 0, y: 0 };
    route.unshift(company);
    route.push(company);

    let bestDistance = calculateTotalDistance(route);
    while (true) {
      let distance = bestDistance;
      for (let i = 1; i < route.length - 2; i++) { // Ignora a empresa nas trocas
        for (let k = i + 1; k < route.length - 1; k++) { // Ignora a empresa nas trocas
          let newRoute = twoOptSwap(route, i, k);
          let newDistance = calculateTotalDistance(newRoute);
          if (newDistance < bestDistance) {
            route = newRoute;
            bestDistance = newDistance;
          }
        }
      }
      if (distance === bestDistance) {
        break;
      }
    }

    res.json(route.reverse().slice(1, -1)); // Envia a rota otimizada como resposta e retira a empresa nas duas extremidades
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
