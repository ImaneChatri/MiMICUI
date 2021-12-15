<template>
  <div>
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <textarea
            class="textarea"
            placeholder="Input your text here"
            rows="15"
            v-model="Input"
          ></textarea>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-warning">
          <article class="buttons are-normal is-centered">
            <button class="button" @click="summarize()">Summarize</button>
            <button class="button" @click="clear()">Clear</button>
            <br />
          </article>
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
import axios from "axios";

export default {
  name: "Summarize",
  data() {
    return {
      NumSentence: "",
      Input:
        "",
      Output: "Your summarized text will appear here",
      Method: "Extractive",
      Hover: false,
    };
  },
  methods: {
    summarize() {
      axios
        .post(process.env.VUE_APP_SERVER_URL + "summarize", {
          text: this.Input,
        })
        .then((response) => {
          this.Output = response.data.summarizedText;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    clear() {
      this.Input = "";
      this.Output = "Your summarized text will appear here";
    },
  },
};
</script>

<style scoped>
</style>
