<template>
  <div>
    <section class="hero is-info">
      <!-- <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
          <a class="navbar-item">
            <img alt="MiMIC logo" src="./assets/Smaller-MiMIC-Logo.png" />
          </a>
        </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a class="button is-info is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Github Repo</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div> -->

      <div class="hero-body">
        <div class="container has-text-centered">
          <img alt="MiMIC logo" src="./assets/Smaller-MiMIC-Logo.png" />
          <p class="subtitle">
            Summarize something
          </p>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li @click="SelectedTab='Summarize'" v-bind:class="{'is-active':SelectedTab==='Summarize'}">
                <a>Summarize</a>
              </li>
              <li @click="SelectedTab='Algorithm'" v-bind:class="{'is-active':SelectedTab==='Algorithm'}">
                <a>Algorithm</a>
              </li>
              <li @click="SelectedTab='Team'" :class="{'is-active':SelectedTab==='Team'}">
                <a>Team</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section>
      <div>
        <Summarize v-if="SelectedTab === 'Summarize'"/>
        <Algorithm v-if="SelectedTab === 'Algorithm'"/>
        <Team v-if="SelectedTab === 'Team'"/>
      </div>
    </section>
  </div>
</template>

<script>
import Summarize from './components/Summarize.vue'
import Algorithm from './components/Algorithm.vue'
import Team from './components/Team.vue'

export default {
  name: "Home",
  components: {
    Summarize,
    Algorithm,
    Team
  },  
  data() {
    return {

    SelectedTab : 'Summarize'
    }
  }
};
</script>

<style></style>
