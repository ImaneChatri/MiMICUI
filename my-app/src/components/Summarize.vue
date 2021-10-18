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
          <br />
          <div class="buttons are-normal is-centered">
            <button class="button" @click="SummaryType = 'Extractive'">
              Extractive
            </button>
            <button class="button" @click="SummaryType = 'Abstractive'" disabled>
              Abstractive
            </button>
            <button
              class="button is-rounded is-focused"
              @mouseover="Hover = true"
              @mouseleave="Hover = false"
            >
              ?
            </button>
          </div>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <div class="buttons are-normal is-centered">
              <button class="button is-medium" @click="summarize()">
                Summarize
              </button>
              <button class="button is-medium" @click="clear()">
                Clear
              </button>
          </div>
          <div class="notification is-info is-light is-overlay" v-if="Hover">
            Choose <strong>extractive</strong> if you want to generate a summary with preserved sentences from the original text, and <strong>abstractive</strong> if you want computer generated sentences in your summary.
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
import axios from "axios";

export default {
  name: "Summarize",
  data() {
    return {
      NumSentence: "",
      Input:
        "Macalester College was founded by Edward Duffield Neill in 1874 with help from the Presbyterian Church in Minnesota. Neill had served as a chaplain in the Civil War and traveled to Minnesota Territory in 1849. He became connected politically and socially. He went on to found two local churches, was appointed the first Chancellor of the University of Minnesota and became the state's first superintendent of public education. In leaving the University of Minnesota Board of Regents he desired to build a religious college affiliated with the Presbyterian Church that would also be open to other Christian church members.[6] The college's original name was Baldwin College; it was affiliated with the Baldwin School, a Presbyterian secondary school.[7] After a large donation from Charles Macalester, a prominent businessman and philanthropist from Philadelphia, the institution was renamed Macalester College. Macalester donated a hotel, the Winslow House, as the first permanent classroom building. With additional funding from the Presbyterian Church and its trustees, Macalester College opened for courses in 1885 with five teachers, six freshmen, and 52 preparatory students.[6] James Wallace joined the faculty in 1887 and later became president. He helped stabilize the college's finances and advance the institution.[6] During his tenure, Macalester created a focus on a liberal arts curriculum.",
      Output: "Your summarized text will appear here",
      Method: 'Extractive',
      Hover: false,
    };
  },
  methods: {
    summarize() {
      axios
        .post(
          `http://127.0.0.1:5000/summarize`,
          { text: this.Input }
        )
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
  // created() {
  //   axios
  //     .get(`http://127.0.0.1:5000/`)
  //     .then((response) => {
  //       this.Input = response.data;
  //     })
  //     .catch((e) => {
  //       this.errors.push(e);
  //     });
  // },
};
</script>

<style scoped>
/* .notification.is-info.is-light {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
} */
</style>
