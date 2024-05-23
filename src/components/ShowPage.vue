<script setup>
import {ref} from 'vue';
import {
  Player,
  Audio,
  Ui,
  Controls,
  ControlGroup,
  PlaybackControl,
  VolumeControl,
  CurrentTime, ScrubberControl, EndTime
} from '@vime/vue-next';

const data_1 = [
  {
    title: '野草',
    text: '改编自鲁迅《野草》',
    tag: '摇滚',
    id: '42',
  },
  {
    title: '永不凋落的朝花',
    text: '《朝花夕拾》，经典之作',
    tag: '流行',
    id: '72',
  },
  {
    title: '投枪谣',
    text: '还记得鲁迅先生的《匕首与投枪》吗？',
    tag: '古典',
    id: '53',
  },
  {
    title: '三味回味',
    text: '重温《从百草园到三味书屋》',
    tag: '爵士',
    id: '41',
  },
];
const data_2 = [
  {
    title: 'SHIJING',
    text: '改编自《诗经》',
    tag: '电子',
    id: '11',
  },
  {
    title: '论语摇一摇',
    text: '经典《论语》与流行文化的碰撞',
    tag: '流行',
    id: '16',
  },
  {
    title: '子不语',
    text: '孔老夫子说过什么呢',
    tag: '古典',
    id: '50',
  },
];
const detailVisible = ref(false);
const detailTitle = ref('');
const detailLyrics = ref('');
const detailCover = ref('');
const musicUrl = ref('');

function showDetail(title, id) {
  detailLyrics.value = id + '';
  detailVisible.value = true;
  detailTitle.value = title;
  detailLyrics.value = `昏沉的夜 灯火温吞地灭
我昏沉的梦里 故事拉开画卷
鲜花和云朵在水影里升腾摇曳
我坐在小船 岸边是村人和月
好的故事都融化在水里
昏沉的夜里我猛然睡醒
脱离了躯干 我是你的影子
但是主人 我不愿再跟随你
离开你 黑暗会吞并我 光明会让我消失
有我所不乐意的在天堂地狱里藏躲交织
我不想沉没于黑暗 死亡于光明 不想遗世独立
呜呼呜呼 我将向黑暗里彷徨于无地
噫 独自远行
不但没有你 并且没有别的影在黑暗里
力 掀天揭地
觅 茕茕孑立
这世界全属于我自己
我在野地里赶路 看疮痍满目
奇怪而高的天上 星 洒下寒露
枣树刺向天空 利 穿破惨雾
引恶鸟发声 但飞蛾扑火义无反顾
得继续走 前面是坟和野百合
走完了坟地和百合是什么呢
我不能留 所以踉跄地返回夜色
要继续走 只有拿水补我的血了

昏沉的夜 灯火温吞地灭
我昏沉的梦里 故事拉开画卷…
鲜花和云朵在水影里升腾摇曳
我坐在小船 岸边是村人和月
好的故事都融化在水里了
昏沉的夜里我猛然睡醒了
脱离了躯干 我是你的影子
但是主人 我不愿再跟随你了

有老人在劝我休息 不
有孩子在向我求乞 不
我看不到悲哀在他眸底 不
所以把疑心塞他手里 不
我顺着剥落的高墙走路
风吹来四面是灰土 四方有雾
我想着我会怎么求乞来继续我的故事
我选择用无所为和沉默讨得虚无来度日
不料讨来她宝剑 和帽 和巾 和一缸屠苏
我回以赤练蛇、猫头鹰 和冰糖葫芦
本来她弯的眼几乎使我留下脚步
不料她翻了脸 我还是走我的路
我看到原野上两人争斗 在赤身裸体
人潮从八方蜂拥 看的忘乎所以
可始终没人端起刀 群众的喉咙被无聊锁紧
两人在复仇的欢喜中 将人们的徒劳啜饮
我看到"神之子"被钉上高架
临终的神情 悲悯 高大
神明在刀下怎会没办法招架？
只是又一个"人之子"的生命被糟蹋
我感到绝望 我感到枯竭
我这一路上再也没有遇到青年…
"希望"是娼妓 等你牺牲了青春就将你抛弃
但绝望不亦是如此？所以继续等我消息

昏沉的夜，灯火温吞地灭
我昏沉的梦里 故事拉开画卷…
鲜花和云朵在水影里升腾摇曳
我坐在小船 岸边是村人和月
好的故事都融化在水里了
昏沉的夜里我猛然睡醒了
脱离了躯干 我是你的影子
但是主人 我不愿再跟随你了

当月光开始降温 凝成大雪倾城
雪花奋力上升 那是雨的精魂
我忽然坠入冰谷 脚下有青灯闪烁
我用体温轻抚 这团冰封的火
我将它叫醒 它烧在我胸膛之左
"你会先烧尽还是结冰？" 它反而问我
"我有更要紧的事情……"我不假思索
"我不如烧尽" 它烧尽我身上的锁
我举起投枪 面对一致的点头
他们说不偏心 但我偏侧一投
我举起投枪 但他们早已脱走
只剩下投枪 和我颤抖的手
我重复地面对起一致的点头
他们"太平"的高喊声堵住我的口
我在狂热时中寒 透过所有看见无所有
但我举起投枪…用我颤抖的手
挖出我的心来品 创痛中怎么细吃？
痛定后再尝 本味又怎么去知？
我像冬日的叶 从斑斓褪向蜡黄
还好勇士的血已将花朵洒满家乡
青年愤怒而粗暴的灵魂已遍布八方
夕阳西下 灯火接续发热发光
我实在不想身上死后被虫豸爬来爬往
于是终于坐起… 太平里举起投枪

昏沉的夜，灯火温吞地灭
我昏沉的梦里 故事拉开画卷…
鲜花和云朵在水影里升腾摇曳
我坐在小船 岸边是村人和月
好的故事都融化在水里了
昏沉的夜里我猛然睡醒了
脱离了躯干 我是你的影子
但是主人 我不愿再跟随你了`
  detailCover.value = "http://p2.music.126.net/YM-W5ixnG_EwzIqTo920pQ==/109951164733957968.jpg";
  musicUrl.value = "http://music.163.com/song/media/outer/url?id=1425463056.mp3";
}

</script>
<template>

  <div id="show-container">
    <a-drawer
        destroyOnClose
        :maskStyle="{backgroundImage: 'url(' + detailCover + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}"
        :maskClosable="false"
        v-model:open="detailVisible"
        root-class-name="root-class-name"
        width="100%"
        height="100%"
        style="-webkit-backdrop-filter: blur(40px);backdrop-filter: blur(40px);background-color: hsla(0, 0%, 100%, .8) !important;"
        :title="detailTitle"
        placement="bottom"
    >
      <div id="show-drawer">
        <div id="show-cover-container">
          <img id="cover" width="400" height="348" :src="detailCover" style="object-fit: cover;"/>
          <Player autoplay theme="light" loop id="player">
            <Audio>
              <source :src=musicUrl type="audio/mpeg">
              抱歉，您的浏览器不支持音频播放，请换用最新版火狐浏览器！
            </Audio>
            <Ui>
              <Controls>
                <ControlGroup style="align-items: center;">
                  <PlaybackControl hideTooltip/>
                  <VolumeControl hideTooltip/>
                  <CurrentTime/>
                  <ScrubberControl style="height: 100%"/>
                  <EndTime style="margin-right: 10px"/>
                </ControlGroup>
              </Controls>
            </Ui>
          </Player>
        </div>
        <p id="detail-lyrics">{{ detailLyrics }}</p>
      </div>

    </a-drawer>
    <a-typography-title style="margin-top: 60px;">留声典藏</a-typography-title>
    <a-carousel autoplay>
      <div><img class="show-img" style="object-position: 50% 26% !important;" src="http://p2.music.126.net/YM-W5ixnG_EwzIqTo920pQ==/109951164733957968.jpg"></div>
      <div><img class="show-img" src="https://www.dpm.org.cn/Uploads/Picture/2024/02/29/s65dfe55d35dbc.jpg"></div>
      <div><img class="show-img" src="https://www.dpm.org.cn/Uploads/Picture/2023/12/26/s658a871ca9f08.jpg"></div>
      <div><img class="show-img" src="https://www.dpm.org.cn/Uploads/Picture/2023/08/30/s64eedf76d4e95.jpg"></div>
    </a-carousel>
    <a-typography-title style="margin-top: 60px;">览文溯忆</a-typography-title>
    <a-tabs>
      <a-tab-pane key="1" tab="鲁迅">
        <a-list item-layout="horizontal" :data-source="data_1">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                  :description="item.text">
                <template #title>
                  <a @click="showDetail(item.title,item.id);">{{ item.title }}</a>
                  <a-tag style="margin-left: 10px;" color="red">{{ item.tag }}</a-tag>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </a-tab-pane>
      <a-tab-pane key="2" tab="孔子" force-render>
        <a-list item-layout="horizontal" :data-source="data_2">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta
                  :description="item.text">
                <template #title>
                  <a @click="showDetail(item.title,item.id);">{{ item.title }}</a>
                  <a-tag style="margin-left: 10px;" color="red">{{ item.tag }}</a-tag>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </a-tab-pane>
      <a-tab-pane key="3" tab="余华">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="4" tab="庄子">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="5" tab="李白">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="6" tab="杜甫">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="7" tab="瞿秋白">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="8" tab="蒲松龄">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="9" tab="胡适">歌曲精选中，敬请期待</a-tab-pane>
      <a-tab-pane key="10" tab="苏轼">歌曲精选中，敬请期待</a-tab-pane>
    </a-tabs>
  </div>
</template>
<style>
@import '@vime/core/themes/default.css';
@import '@vime/core/themes/light.css';

vm-player {
  --vm-player-theme: #bf1103;
}

#player {
  min-width: 400px;
  @media screen and (max-width: 992px) {
    min-width: 70%;
    max-width: 70%;
    width: 70%;
  }
}

#cover {
  @media screen and (max-width: 992px) {
    display: none;
  }
}

#show-cover-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    display: block;
  }
}

#detail-lyrics {
  font-size: 24px;
  line-height: 40px;
  max-height: 80%;
  width: 100%;
  overflow: auto;
  @media screen and (max-width: 992px) {
    text-align: center;
  }
}

#show-drawer {
  white-space: pre-wrap;
  display: flex;
  gap: 12%;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 1%;
  }
}

.show-img {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}

#show-container {
  width: 100%;
  padding: 0 200px;

  @media screen and (max-width: 992px) {
    padding: 0 20px;
  }
}
</style>