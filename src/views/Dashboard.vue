<template>
  <div class="dashboard-page">
    <div class="dashboard-header">
      <h1>技能广场</h1>
    </div>
    <div class="dashboard-content">
      <div class="skills-grid">
        <div class="skill-item" v-for="i in 10" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard-page {
  min-height: calc(100vh - 60px);
}

.dashboard-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  z-index: 100;
  padding: 20px;
}

.dashboard-header h1 {
  font-size: 20px;
  color: black;
  margin: 0;
}

.dashboard-content {
  padding: 80px 20px 20px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 16px;
}

.skill-item {
  aspect-ratio: 1.6;
  background-color: #f5f5f5;
  border-radius: 12px;
  cursor: pointer;
}
</style>
