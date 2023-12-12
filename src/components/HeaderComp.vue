<template>
  <div class="header">
    <h2 class="header-text">Bola na Rede</h2>
    <div class="header-buttons">
      <router-link to="/"><button class="header-button">Home</button></router-link>
      <router-link to="/camisa"><button class="header-button">Camisa</button></router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: linear-gradient(to bottom, #3498db, #2980b9);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header-text {
  color: #ffffff;
  font-size: 24px;
  margin: 0;
}

.header-buttons {
  display: flex;
  gap: 20px;
}

.header-button {
  background-color: #e67e22;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.1s;
}

.header-button:hover {
  background-color: #d35400;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .header-text {
    font-size: 20px;
  }
  .header-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .header-text {
    font-size: 18px;
  }
  .header-button {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>

<script>
export default {
  methods: {
    goToProcedimentos() {
    },
    goToHorariosBloqueados() {
    },
    goToPacotes() {
    },
  },
};
</script>
