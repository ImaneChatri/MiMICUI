<template>
<div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Our Algorithm</p>
        <p class="subtitle">*explanation of how the algorithm work (using the table below to explain)*</p>
        <div class="content">
           <!-- Content -->
          <table class="table">
  <thead>
    <tr>
      <th>Step</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Preprocessing</th>
      <td>sent_tokenizer: splits text into lists of words, each list representing a sentence.</td>
    </tr>
    <tr>
       <th>Preprocessing</th>
      <td>Preproccess: removes punctuation and stopwords such as ‘the,’ ‘and,’ ‘or,’ etc.</td>
    </tr>
    <tr>
      <th>Preprocessing</th>
      <td>tag_pos: ‘tags’ the grammatical category of words likely to carry important information, such as nouns or past participles
</td>
    </tr>
    <tr>
      <th>Preprocessing</th>
      <td>stem: strips tagged words to their most basic lexical form, or stem. For example, the word ‘cities’ would be stemmed to ‘city,’ or ‘gone’ to ‘go’
</td>
    </tr>
    <tr>
      <th>Similarity Comparison</th>
      <td>Build_similarity_matrix: turns processed text into machine-readable vectors, then creates a cosine similarity matrix, comparing each sentence to each other
</td>
    </tr>
    <tr>
      <th>Ranking</th>
       <td>text_rank: ranks sentences based on the previously created similarity matrix, giving the most favorable rankings to the sentences most similar to one another</td>
    </tr>
    <tr>
      <th>Summary Assembly</th>
      <td>summarize: chooses top X  ranked sentences (X input by user), orders them chronologically as in the input text, puts a line break between each, and returns the summarized paragraph</td>
    </tr>
  </tbody>
</table>
        </div>
      </article>
    </div>
</template>


<script>

export default {
  name: 'Algorithm',
}
</script>

<style scoped>
</style>