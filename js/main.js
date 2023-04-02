'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['醤油', '味噌', '塩', 'つけ麺'];
    const n = Math.floor(Math.random() * results.length);
    
    result.textContent = results[n];

  })
}