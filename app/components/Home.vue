<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label
        class="action-bar-title"
        text="Home"
      />
    </ActionBar>

    <GridLayout>
      <Label
        class="info"
        horizontal-alignment="center"
        vertical-alignment="center"
      >
        <FormattedString>
          <Span
            class="fa"
            text.decode="&#xf135; "
          />
          <Span :text="message" />
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
import { isAndroid, isIOS } from 'tns-core-modules/platform';

export default {
  computed: {
    message() {
      return 'Blank {N}-Vue app';
    },
  },

  created() {
    if (isAndroid) {
      console.log('Android!');
    } else if (isIOS) {
      console.log('iOS!');
    }
  },
};
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '../app-variables';
  // End custom common variables

  // Custom styles
  .fa {
    color: $accent-dark;
  }

  .info {
    font-size: 20;
  }
</style>
