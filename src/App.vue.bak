<script setup>
import {RouterLink} from 'vue-router';
import {ref} from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

const About = ref(false);
</script>

<template>
  <a-config-provider :locale="zhCN" :theme="{
      token: {
        colorPrimary: '#bf1103',
        fontFamily: 'MiSans VF, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\''
      },
    }">
    <a-app>
      <a-modal v-model:open="About" title="关于我们" :footer="null">
        <span>古韵重现 - 面向中华文化传承的AI音乐创作平台<br>成员：李汶颖 杨博涵 李婧瑄 陈旭冉 赵智强</span>
      </a-modal>
      <div id="title">
        <div class="title-item">
          <RouterLink to="/" style="color: inherit;"><img style="margin: 0 10px 0 0;width: 133px; height: auto;"
                                                          src="./assets/logo.png" alt=""></RouterLink>
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
              <p class="title-text">撷章织曲</p></RouterLink>
          </a-button>
          <a-button type="text" size="large" class="title-btn">
            <RouterLink to="/show" style="display: flex;align-items: center">
              <svg class="title-svg" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                <path
                    d="M14 6H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm0 4H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zM4 16h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM19 6c-1.1 0-2 .9-2 2v6.18c-.31-.11-.65-.18-1-.18c-1.84 0-3.28 1.64-2.95 3.54c.21 1.21 1.2 2.2 2.41 2.41c1.9.33 3.54-1.11 3.54-2.95V8h2c.55 0 1-.45 1-1s-.45-1-1-1h-2z"
                    fill="currentColor"></path>
              </svg>
              <p class="title-text">留声溯忆</p></RouterLink>
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
            <p class="footer-title">古韵重现</p>
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
            <p class="footer-item"><a>Vue</a></p>
            <p class="footer-item"><a>SongMass</a></p>
            <p class="footer-item"><a>AntdDesign</a></p>
          </div>
        </div>
        <div style="padding-bottom: 100px;">Produced by the Ancient Charms Revisited team<br>Feel free to contact
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
  background-color: #580e04;
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

