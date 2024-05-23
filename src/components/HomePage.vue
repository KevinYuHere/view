<script setup>
</script>
<template>
  <div style="position: relative;display: flex;width: 100%;justify-content: center;">
    <div class="title-image-container" style="width: 90vw;height: 90vh;">
      <img class="image" src="https://wwwstatic.vivo.com.cn/vivoportal/files/image/home/20240428/ebe9aaad0e874d2e690f27e1f7aa78c5.png">
    </div>
    <p id="home-title">游辞漫说</p>
    <p id="home-subtitle">虚拟人物对话平台</p>
  </div>
</template>
<style>
.title-image-container {
  overflow: hidden;
}

#home-title {
  position: absolute;
  color: white;
  font-size: 80px;
  font-weight: bold;
  right: 150px;
  bottom: 70px;
  @media screen and (max-width: 992px) {
    writing-mode: vertical-lr;
    font-size: 30px;
    right: 70px;
    bottom: 40px;
  }
}

#home-subtitle {
  position: absolute;
  color: white;
  font-size: 40px;
  font-weight: bold;
  right: 150px;
  bottom: 50px;
  @media screen and (max-width: 992px) {
    writing-mode: vertical-lr;
    font-size: 20px;
    right: 50px;
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>