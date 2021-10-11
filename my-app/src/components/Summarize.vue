<template>
  <div>
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <textarea
            class="textarea"
            placeholder="Input your text here"
            rows="13"
          v-model="Input"></textarea>
          <br />
          <div class="buttons are-normal is-centered">
            <button class="button" @click="NumSentences = '1'">
              1
            </button>
            <button class="button" @click="NumSentences = '3'">
              3
            </button>
            <button class="button" @click="NumSentences = '5'">
              5
            </button>
            <button class="button" @click="NumSentences = '10'">
              10
            </button>
            <button class="button" @click="NumSentences = '20'">
              20
            </button>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-medium" @click="summarize()">
                Summarize
              </button>
            </p>
            <p class="control">
              <button class="button is-medium">
                Clear
              </button>
            </p>
          </div>
        </article>
        <article class="tile is-child notification is-warning">
          <article class="message">
            <div class="message-body">
              {{ Output }}
            </div>
          </article>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summarize",
  data() {
    return {
      NumSentence: "",
      Input: "",
      Output:
        "Your summarized text will appear here.",
    };
  },
  methods: {
    summarize() {
      this.Output = this.Input;
    },
    Clear() {
      this.Input = '';
      this.Output = '';
    }
  }
};
</script>

<style></style>
