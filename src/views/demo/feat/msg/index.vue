<template>
  <EntPageWrapper title="消息示例">
    <CollapseContainer class="w-full h-32 bg-white rounded-md" title="Message">
      <a-button @click="infoMsg('Info message')" class="mr-2"> Info </a-button>
      <a-button @click="successMsg('Success message')" class="mr-2" color="success">
        Success
      </a-button>
      <a-button @click="warningMsg('Warning message')" class="mr-2" color="warning">
        Warning
      </a-button>
      <a-button @click="errorMsg('Error message')" class="mr-2" color="error"> Error </a-button>
      <a-button @click="handleLoading" class="mr-2" type="primary"> Loading </a-button>
    </CollapseContainer>

    <CollapseContainer class="w-full h-32 mt-5 bg-white rounded-md" title="Comfirm">
      <a-button @click="handleConfirm('info')" class="mr-2"> Info </a-button>
      <a-button @click="handleConfirm('warning')" color="warning" class="mr-2"> Warning </a-button>
      <a-button @click="handleConfirm('success')" color="success" class="mr-2"> Success </a-button>
      <a-button @click="handleConfirm('error')" color="error" class="mr-2"> Error </a-button>
    </CollapseContainer>

    <CollapseContainer class="w-full h-32 mt-5 bg-white rounded-md" title="Modal">
      <a-button @click="handleInfoModal" class="mr-2"> Info </a-button>
      <a-button @click="handleSuccessModal" color="success" class="mr-2"> Success </a-button>
      <a-button @click="handleErrorModal" color="error" class="mr-2"> Error </a-button>
      <a-button @click="handleWarningModal" color="warning" class="mr-2"> Warning </a-button>
      <a-button @click="handleAjax" color="warning" class="mr-2"> test ajax error </a-button>
    </CollapseContainer>

    <CollapseContainer
      class="w-full h-32 mt-5 bg-white rounded-md"
      title="Notification 用法与上面一致"
    >
      <a-button @click="handleNotify" color="success" class="mr-2"> Success </a-button>
    </CollapseContainer>
  </EntPageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { EntCollapseContainer } from 'fe-ent-core/lib/components/container';
  import { useMessage } from 'fe-ent-core/lib/hooks/web/use-message';
  import { EntPageWrapper } from 'fe-ent-core/lib/components/page';
  import { defHttp } from 'fe-ent-core/lib/utils/http/axios';

  export default defineComponent({
    components: { CollapseContainer: EntCollapseContainer, EntPageWrapper },
    setup() {
      const {
        createMessage,
        createConfirm,
        createSuccessModal,
        createInfoModal,
        createErrorModal,
        createWarningModal,
        notification,
      } = useMessage();
      const { info, success, warning, error } = createMessage;

      function handleLoading() {
        createMessage.loading('Loading...');
      }
      function handleConfirm(type: 'warning' | 'error' | 'success' | 'info') {
        createConfirm({
          iconType: type,
          title: 'Tip',
          content: 'content message...',
        });
      }
      function handleSuccessModal() {
        createSuccessModal({ title: 'Tip', content: 'content message...' });
      }
      function handleErrorModal() {
        createErrorModal({ title: 'Tip', content: 'content message...' });
      }
      function handleWarningModal() {
        createWarningModal({ title: 'Tip', content: 'content message...' });
      }
      function handleInfoModal() {
        createInfoModal({ title: 'Tip', content: 'content message...' });
      }
      function handleAjax() {
        defHttp.post({
          url: '/hr-organization/add',
          data: {
            orgName: 'd',
            orgCode: 'a',
            orgSort: 1,
            statusFlag: 1,
            orgRemark: 'a',
            orgId: -1,
          },
        });
      }
      function handleNotify() {
        notification.success({
          message: 'Tip',
          description: 'content message...',
        });
      }
      return {
        infoMsg: info,
        successMsg: success,
        warningMsg: warning,
        errorMsg: error,
        handleLoading,
        handleConfirm,
        handleSuccessModal,
        handleErrorModal,
        handleWarningModal,
        handleInfoModal,
        handleNotify,
        handleAjax,
      };
    },
  });
</script>
