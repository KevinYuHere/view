<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goHome() {
    router.replace({ path: '/' });
}
</script>
<template>
    <a-result status="404" title="404" sub-title="抱歉，您想访问的页面似乎不存在。">
        <template #extra>
            <a-button type="primary" @click="goHome">返回主页</a-button>
        </template>
    </a-result>
</template>