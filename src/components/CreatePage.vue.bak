<script setup>
import {ref} from 'vue';
import {Cascader, message} from 'ant-design-vue';
import {
  Audio,
  ControlGroup,
  Controls,
  CurrentTime,
  EndTime, PlaybackControl,
  Player,
  ScrubberControl, Ui,
  VolumeControl
} from "@vime/vue-next";

const text = ref('');
const lyrics = ref('');
const lyricsPercent = ref(0);
const lyricsPercentShow = ref(false);
const music = ref('');
const musicPercent = ref(0);
const musicPercentShow = ref(false);
const musicPlayerShow = ref(false);
const speedMarks = ref({
  0: '慢速',
  33: '默认',
  66: '快速',
  100: '极快',
});
const speedValue = ref(33);
const styleMarks = ref({
  0: '保守',
  50: '均衡',
  100: '自由',
});
const styleValue = ref(50);
const rhymeOptions = [
  {
    value: '1',
    label: '花部（发花辙）',
    children: [
      {
        value: '1-1',
        label: '花韵（a, ia, ua）',
      },
    ],
  },
  {
    value: '2',
    label: '歌部（梭波辙）',
    children: [
      {
        value: '2-1',
        label: '歌韵（e）',
      },
      {
        value: '2-2',
        label: '波韵（o, uo）',
      },
    ],
  },
  {
    value: '3',
    label: '些部（乜斜辙）',
    children: [
      {
        value: '3-1',
        label: '些韵（ie, üe）',
      },
    ],
  },
  {
    value: '4',
    label: '姑部（姑苏辙）',
    children: [
      {
        value: '4-1',
        label: '姑韵（u）',
      },
    ],
  },
  {
    value: '5',
    label: '衣部（衣七辙）',
    children: [
      {
        value: '5-1',
        label: '衣韵（i, -i, (er)）',
      },
      {
        value: '5-2',
        label: '居韵（ü）',
      },
    ],
  },
  {
    value: '6',
    label: '开部（怀来辙）',
    children: [
      {
        value: '6-1',
        label: '开韵（ai, uai）',
      },
    ],
  },
  {
    value: '7',
    label: '飞部（灰堆辙）',
    children: [
      {
        value: '7-1',
        label: '飞韵（ei, ui）',
      },
    ],
  },
  {
    value: '8',
    label: '高部（摇条辙）',
    children: [
      {
        value: '8-1',
        label: '高韵（ao, iao）',
      },
    ],
  },
  {
    value: '9',
    label: '收部（由求辙）',
    children: [
      {
        value: '9-1',
        label: '收韵（ou, iu）',
      },
    ],
  },
  {
    value: '10',
    label: '山部（言前辙）',
    children: [
      {
        value: '10-1',
        label: '山韵（an, uan）',
      },
      {
        value: '10-2',
        label: '天韵（ian, üan）',
      },
    ],
  },
  {
    value: '11',
    label: '根部（人辰辙）',
    children: [
      {
        value: '11-1',
        label: '根韵（en, in, un, ün）',
      },
    ],
  },
  {
    value: '12',
    label: '方部（江阳辙）',
    children: [
      {
        value: '12-1',
        label: '方韵（ang, iang, uang）',
      },
    ],
  },
  {
    value: '13',
    label: '东部（中东辙）',
    children: [
      {
        value: '13-1',
        label: '东韵（ong, ueng, iong）',
      },
      {
        value: '13-2',
        label: '声韵（eng, ing）',
      },
    ],
  },
];
const rhymeValue = ref([]);

function generateLyrics() {
  if (text.value === '') {
    message.error('请先输入提示文本');
    return;
  }
  lyricsPercentShow.value = true;
  let i;
  for (i = 1; i < 14; i++) {
    let a = i;
    setTimeout(() => {
      lyricsPercent.value = a * 7;
    }, a * 1260);
  }
  setTimeout(() => {
    lyricsPercent.value = 100;
    lyrics.value = `你挡在历史的面前
放慢我们前进的时间
当野草被智者们点燃
勇敢的人便跟随着火焰
世界不再是你的想像
不是支离破碎的幻想
世界不再是你的想像
不是支离破碎的幻想
你倒在一个荒唐的时代
留下被止禁的存在
也许在另一个世界
你不用躲在盒子里面`;
  }, 14 * 1260);
  setTimeout(() => {
    lyricsPercentShow.value = false;
    lyricsPercent.value = 0;
    message.success('歌词生成完成');
  }, 14 * 1260 + 1000);
}

function generateMusic() {
  if (lyrics.value === '' || text.value === '') {
    message.error('请先填写歌词和提示文本');
    return;
  }
  musicPercentShow.value = true;
  musicPlayerShow.value = false;
  let i;
  for (i = 1; i <= 16; i++) {
    let a = i;
    setTimeout(() => {
      musicPercent.value = a * 6;
    }, a * 1760);
  }
  setTimeout(() => {
    musicPercent.value = 100;
    music.value = 'http://music.163.com/song/media/outer/url?id=1425463056.mp3';
  }, 16 * 1760);
  setTimeout(() => {
    musicPlayerShow.value = true;
    musicPercentShow.value = false;
    musicPercent.value = 0;
    message.success('音乐生成完成');
  }, 16 * 1760 + 1000);
}

</script>
<template>
  <div id="create-container">
    <a-typography-title style="margin-top: 60px;">撷章遣思</a-typography-title>
    <a-typography-paragraph>
      在此，您可以亲自利用我们的AI技术将中华优秀经典文学融入到您的RAP歌曲创作中。
    </a-typography-paragraph>
    <a-typography-paragraph>
      只需输入一段经典名著或诗词歌赋中的文字作为提示文本，再选择一些设置，我们就可以为您生成一段歌词。随后，您可以在根据自己的意愿调整歌词后让AI为您快速生成伴奏。相信我们的AI技术能帮助您快速创造属于您自己的中国风RAP作品。
    </a-typography-paragraph>
    <div class="create-col">
      <div>
        <a-typography-title :level="2">提示文本</a-typography-title>
        <a-typography-paragraph>
          <a-textarea class="choose unit-space" :bordered="false" allow-clear show-count :maxlength="1000"
                      v-model:value="text"
                      placeholder="请在此处输入提示文本" :auto-size="{ minRows: 5, maxRows: 20 }"/>
        </a-typography-paragraph>
      </div>
      <div>
        <a-typography-title :level="2">限制韵脚</a-typography-title>
        <a-typography-paragraph>
          请选择您可以接受的韵脚，AI将在您划定的各韵脚中选择一个用于押韵。如果您不选择任何韵脚，我们将为您随机生成韵脚；此外，目前只支持单韵脚，如果您有押尾韵、重韵、交叉韵、平仄韵等需求，还请您等待我们的后续更新。
        </a-typography-paragraph>
        <a-typography-paragraph>
          正如在真正的音乐创作中一般，部分歌词可能会不押韵。如果出现不符合您要求的歌词，还请您手动调整。
        </a-typography-paragraph>
        <a-typography-paragraph>
          <a-popover title="关于韵脚" trigger="click" placement="topLeft" :overlayStyle="{'max-width': '410px'}">
            <template #content>
              <p>
                现代标准汉语逐渐形成以后，依照其音韵结构，前人曾整理出多种韵母分类，可统称为“中华新韵”。此处以广西人民出版社于1979年出版的《现代诗韵》（作者秦似）为分类依据。</p>
            </template>
            <a-cascader
                class="choose unit-space"
                expand-trigger="hover"
                v-model:value="rhymeValue"
                style="width: 100%"
                multiple
                allowClear
                showSearch
                :bordered="false"
                max-tag-count="17"
                :options="rhymeOptions"
                placeholder="请在此处选择韵脚，可直接输入关键词进行搜索"
                :show-checked-strategy="Cascader.SHOW_CHILD"
            >
              <template #tagRender="data">
                <a-tag :key="data.value" color="red">{{ data.label.match(/（([^（）]+)）/)[1] }}</a-tag>
              </template>
            </a-cascader>
          </a-popover>
        </a-typography-paragraph>
        <a-typography-title :level="2">划定倾向</a-typography-title>
        <a-typography-paragraph>
          请选择您的创作倾向，越大的值表示给予AI越高的自由度，反之则越保守。如果您不选择倾向，AI将自由发挥。
        </a-typography-paragraph>
        <a-typography-paragraph>
          <a-slider v-model:value="styleValue" :marks="styleMarks" :tooltipOpen="false" style="padding-bottom: 24px">
          </a-slider>
        </a-typography-paragraph>
        <a-typography-title :level="2">选择曲速</a-typography-title>
        <a-typography-paragraph>
          请选择您希望的大致曲速。如果您不选择曲速，则将采用默认设置。
        </a-typography-paragraph>
        <a-typography-paragraph>
          <a-slider v-model:value="speedValue" :marks="speedMarks" :included="false" :tooltipOpen="false" :step="null"
                    style="padding-bottom: 24px">
          </a-slider>
        </a-typography-paragraph>
      </div>
    </div>
    <a-typography-title style="margin-top: 60px;">捉文织曲</a-typography-title>
    <div class="create-col">
      <div>
        <a-typography-title :level="2">创作歌词</a-typography-title>
        <a-typography-paragraph>
          点击下方按钮，AI将为您创作歌词。请注意，AI生成的歌词可能不会完全符合您的预期，您可能需要手动调整。
        </a-typography-paragraph>
        <a-typography-paragraph>
          <a-button @click="generateLyrics" :disabled="lyricsPercentShow">生成歌词</a-button>
        </a-typography-paragraph>
        <a-typography-title :level="3">歌词预览</a-typography-title>
        <a-typography-paragraph>
          <a-progress :percent="lyricsPercent" v-show="lyricsPercentShow" size="small" :stroke-color="{
        '0%': '#bf1103',
        '100%': '#1677ff',
      }"/>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <a-textarea class="choose" :bordered="false" show-count v-model:value="lyrics" placeholder="歌词预览"
                      :auto-size="{ minRows: 2, maxRows: 25 }"/>
        </a-typography-paragraph>
      </div>
      <div>
        <a-typography-title :level="2">编写伴奏</a-typography-title>
        <a-typography-paragraph>
          <a-progress :percent="musicPercent" v-show="musicPercentShow" size="small" :stroke-color="{
        '0%': '#bf1103',
        '100%': '#1677ff',
      }"/>
        </a-typography-paragraph>
        <a-typography-paragraph>
          点击下方按钮，AI将为您智能生成伴奏。
        </a-typography-paragraph>
        <a-typography-paragraph>
          <a-button @click="generateMusic" :disabled="musicPercentShow">生成伴奏</a-button>
        </a-typography-paragraph>
        <a-typography-paragraph>
          <Player autoplay theme="light" loop id="audio-show" v-if="musicPlayerShow">
            <Audio>
              <source :src="music" type="audio/mpeg">
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
        </a-typography-paragraph>
      </div>
    </div>
  </div>
</template>
<style>
#audio-show {
  min-width: 400px;
  @media screen and (max-width: 992px) {
    min-width: 70%;
    max-width: 70%;
    width: 70%;
  }
}

.create-col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 1.2em;
}

.choose {
  border-left: 4px solid #bf1103;
}

#create-container {
  width: 100%;
  padding: 0 200px;

  @media screen and (max-width: 992px) {
    padding: 0 20px;
  }
}
</style>