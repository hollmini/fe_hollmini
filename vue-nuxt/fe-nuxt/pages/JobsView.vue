<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  head: {
    title: 'Jobs',
    meta: [
      // 언어 인코딩 설정
      { charset: 'utf-8' },
      // 반응형 웹 설정
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // 페이지 설명 설정
      // ※ hid 속성 값은 렌더링 후, data-hid 로 설정 (표준 속성이 아님)
      //   hid 속성은 고유 식별자로 사용됨
      { hid: 'Jobs', name: 'Jobs', content: 'Jobs page' }
    ],
  }
}
</script>
