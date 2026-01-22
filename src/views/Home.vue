<template>
  <div class="home-page">
    <div class="home-content">
      <div class="image-container">
        <img
          v-if="!showSlogan"
          src="/animation.webp"
          alt="animation"
          class="animation-image"
          @click="toggleImage"
        />
        <div
          v-else
          class="slogan"
          @click="toggleImage"
        >
          常用"有底"  跬步千里
        </div>
      </div>
      <div class="search-box">
        <input
          type="text"
          v-model="searchText"
          maxlength="38"
          placeholder="办事没底？问一下吧..."
          class="search-input"
          @keyup.enter="handleSearch"
        />
        <div class="clear-icon" v-if="searchText.trim()" @click="clearSearch">
          清空
        </div>
        <div class="search-icon" v-if="!searchText.trim()">
          <MingcuteSearchLine />
        </div>
        <div class="dropdown-icon" @click="toggleDropdown">
          <MingcuteDownLine />
        </div>
      </div>
      <div class="dropdown-menu" v-if="showDropdown">
        <button class="deep-think-btn">深度思考(Beta)</button>
      </div>
      <div class="quick-access">
        <div class="quick-access-title">快捷入口</div>
        <div class="quick-access-grid">
          <div class="app-item" v-for="i in 8" :key="i"></div>
        </div>
      </div>
    </div>
    <div class="top-right-icons">
      <div class="icon-item">
        <HugeiconsId />
      </div>
      <div class="icon-item">
        <HugeiconsAiIdea />
      </div>
    </div>
    <div class="top-left-icon" @click="toggleSidebar">
      <HugeiconsMenu01 />
    </div>
    <div class="sidebar-overlay" v-if="showSidebar" @click="toggleSidebar"></div>
    <div class="sidebar" :class="{ 'show': showSidebar }">
      <div class="sidebar-header">
        <span>历史记录</span>
        <div class="close-icon" @click="toggleSidebar">
          <MingcuteAlignArrowLeftFill />
        </div>
      </div>
      <div class="sidebar-content">
        <div class="no-records">暂无记录</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MingcuteSearchLine from '../components/MingcuteSearchLine.vue'
import MingcuteDownLine from '../components/MingcuteDownLine.vue'
import HugeiconsId from '../components/HugeiconsId.vue'
import HugeiconsAiIdea from '../components/StreamlineManualBook.vue'
import HugeiconsMenu01 from '../components/HugeiconsMenu01.vue'
import MingcuteAlignArrowLeftFill from '../components/MingcuteAlignArrowLeftFill.vue'

const showSlogan = ref(false)
const showSidebar = ref(false)
const showDropdown = ref(false)
const searchText = ref('')
const STORAGE_KEY = 'search_history'

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    searchText.value = saved
  }
})

const toggleImage = () => {
  showSlogan.value = !showSlogan.value
}

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}

const clearSearch = () => {
  searchText.value = ''
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleSearch = () => {
  if (searchText.value.trim()) {
    localStorage.setItem(STORAGE_KEY, searchText.value)
    window.location.href = `https://www.baidu.com/s?wd=${encodeURIComponent(searchText.value)}`
    searchText.value = ''
  }
}
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding-top: 80px;
}

.image-container {
  position: relative;
  max-width: 200px;
  width: 60%;
  min-height: 100px;
  cursor: pointer;
}

.animation-image {
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.slogan {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: black;
  user-select: none;
  transition: opacity 0.3s ease;
}

.search-box {
  position: relative;
  width: 98%;
  margin-bottom: 24px;
}

.search-input {
  width: 100%;
  padding: 12px 80px 12px 20px;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 16px;
  outline: none;
  box-sizing: border-box;
}

.clear-icon {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #676767;
  cursor: pointer;
  font-weight: bold;
}

.search-icon {
  position: absolute;
  right: 44px;
  top: 55%;
  transform: translateY(-50%);
  font-size: 20px;
  color: black;
}

.dropdown-icon {
  position: absolute;
  right: 18px;
  top: 55%;
  transform: translateY(-50%);
  font-size: 18px;
  color: black;
  cursor: pointer;
  z-index: 20;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  padding: 8px;
  min-width: 160px;
  z-index: 1003;
}

.deep-think-btn {
  background-color: white;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 14px;
  color: black;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.deep-think-btn:hover {
  background-color: #f5f5f5;
}

.top-right-icons {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  z-index: 1000;
}

.top-left-icon {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 28px;
  color: black;
  cursor: pointer;
  z-index: 1000;
}

.icon-item {
  cursor: pointer;
  font-size: 28px;
  color: black;
}

.quick-access {
  width: 88%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quick-access-title {
  font-size: 16px;
  font-weight: bold;
  color: black;
}

.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.app-item {
  aspect-ratio: 1;
  background-color: #f5f5f5;
  border-radius: 12px;
  cursor: pointer;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: white;
  z-index: 1002;
  transition: left 0.3s ease;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar.show {
  left: 0;
}

.sidebar-header {
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-icon {
  cursor: pointer;
  font-size: 24px;
  color: black;
}

.sidebar-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.no-records {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: 40px;
}
</style>
