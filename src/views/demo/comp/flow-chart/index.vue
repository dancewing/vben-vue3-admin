<template>
  <EntPageWrapper
    title="流程图"
    content="简单流程图示例,具体功能需要自己完善"
    contentFullHeight
    fixedHeight
  >
    <FlowChart :data="demoData" />
  </EntPageWrapper>
</template>

<script lang="ts">
  import { FlowChart } from 'fe-ent-flow-chart';
  import { EntPageWrapper } from 'fe-ent-core/lib/components/page';
  import 'fe-ent-flow-chart/index.less';
  import demoData from './dataTurbo.json';
  export default {
    components: { FlowChart, EntPageWrapper },
    setup() {
      return { demoData };
    },
  };
</script>
