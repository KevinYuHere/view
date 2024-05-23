<script setup>
import {RouterLink} from 'vue-router';
import {ref} from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';


const About = ref(false);
</script>

<template>
  <a-config-provider :locale="zhCN" :theme="{
      token: {
        colorPrimary: '#1949b2',
        fontFamily: 'MiSans VF, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\''
      },
    }">
    <a-app>
      <a-modal v-model:open="About" title="关于我们" :footer="null">
        <span>古韵重现 - 面向中华文化传承的AI音乐创作平台<br>成员：李汶颖 杨博涵 李婧瑄 陈旭冉 赵智强</span>
      </a-modal>
      <div id="title">
        <div class="title-item">
          <RouterLink to="/" style="color: inherit;">
              <svg width="2em" height="2em" fill="currentColor" viewBox="0 0 1024 1024">
                <path d="M464 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7z" fill="currentColor"></path>
              </svg></RouterLink>
          <a-button type="text" size="large" class="title-btn">
            <RouterLink to="/create" style="display: flex;align-items: center">
              <svg class="title-svg" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2l2-2z"></path>
                  <path d="M16 7h4"></path>
                  <path d="M18 19H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6"></path>
                </g>
              </svg>
              <p class="title-text">游辞漫谈</p></RouterLink>
          </a-button>
        </div>
        <div style="display: flex;align-items: center">
          <a-button type="text" size="large" class="title-btn" @click="About = true;">
            <div style="display: flex;align-items: center">
              <svg class="title-svg" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <g fill="none">
                  <path
                      d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10.001-10.002 10.001C6.476 22.002 2 17.524 2 12.001C1.999 6.477 6.476 1.999 12 1.999zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5zm-.004 7a.75.75 0 0 1 .744.648l.007.102l.004 5.502a.75.75 0 0 1-1.494.102l-.006-.101l-.004-5.502a.75.75 0 0 1 .75-.75zm.005-3.497a.999.999 0 1 1 0 1.997a.999.999 0 0 1 0-1.997z"
                      fill="currentColor"></path>
                </g>
              </svg>
              <p class="title-text">关于我们</p></div>
          </a-button>
        </div>
      </div>
      <div style="width: 100%;height: 70px;"></div>
      <div id="content">
        <RouterView></RouterView>
      </div>
      <div id="footer">
        <div
            style="display: grid;grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));gap: 40px;padding: 100px 0 40px 0">
          <div class="footer-container">
            <p class="footer-title">游辞漫谈</p>
            <p class="footer-item"><a>代码仓库</a></p>
            <p class="footer-item"><a>相关成果</a></p>
            <p class="footer-item"><a>研究模型</a></p>
          </div>
          <div class="footer-container">
            <p class="footer-title">最新动向</p>
            <p class="footer-item"><a>研究进展</a></p>
            <p class="footer-item"><a>更新日志</a></p>
            <p class="footer-item"><a>反馈问题</a></p>
          </div>
          <div class="footer-container">
            <p class="footer-title">相关链接</p>
            <p class="footer-item"><a>VIVO大模型</a></p>
            <p class="footer-item"><a>Vue</a></p>
            <p class="footer-item"><a>AntdDesign</a></p>
          </div>
        </div>
        <div style="padding-bottom: 100px;">Produced by the 运筹维沃 team<br>Feel free to contact
          KevinYuHere@foxmail.com
        </div>
      </div>
    </a-app>
  </a-config-provider>
</template>
<style>
* {
  font-family: MiSans VF, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  letter-spacing: 0.02em;
}

body {
  background-color: #fff;
}

.title-svg {
  width: 40px;
  height: 40px;
  padding-bottom: 15px
}

.footer-container {
  margin: 0;
}

.footer-item {
  margin: 10px 0;
}

.footer-item a {
  color: inherit;
}

.footer-title {
  font-weight: bold;
  font-size: large;
  margin: 0 0 20px 0;
}

#footer {
  margin-top: 40px;
  background-color: #2d3396;
  color: white;
  padding: 0 200px;

  @media screen and (max-width: 992px) {
    padding: 0 50px;
  }
}

.title-btn {
  font-weight: bold;
  padding: 6px 15px 4px 6px !important;
  @media screen and (max-width: 992px) {
    padding: 6px 0 4px 0 !important;
  }
}

#title {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 70px;
  backdrop-filter: blur(40px);
  background-color: hsla(0, 0%, 100%, .8);
  padding-left: 190px;
  padding-right: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    padding: 0 10px;
  }
}

.title-item {
  display: flex;
  gap: 10px;
  align-items: center;
}

.title-text {
  @media screen and (max-width: 992px) {
    display: none;
  }
}
</style>

