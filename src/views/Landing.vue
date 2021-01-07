<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container">
          <div class="py-5 bg-secondary">
            <div class="container">
              <div class="mb-1">
                <div class="row">
                  <div class="col-lg-1 col-sm-1 col-md-1"></div>
                  <div class="col-lg-3 col-sm-6 col-md-6">
                    <small class="text-uppercase font-weight-bold">
                      Search the awesome job.
                    </small>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-1 col-sm-1 col-md-1"></div>
                <div class="col-lg-8 col-sm-6 col-md-6">
                  <base-input
                    alternative
                    placeholder="Search"
                    v-model="term"
                  ></base-input>
                </div>

                <div class="col-lg-2 col-sm-4 col-md-4">
                  <base-button
                    type="primary"
                    icon="ni ni-zoom-split-in"
                    id="sboton"
                    v-on:click="searchOpportunity"
                  >
                    Search
                  </base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="columns" style="padding-left: 20px;">
            <div v-for="result in results" :card="result" v-bind:key="result.id" style="float: left; padding: 15px;" >
              <div class="card" style="width: 12rem;  height: 18rem; ">
                <img class="card-img-top" :src=" result.organizations[0] ? result.organizations[0].picture ? result.organizations[0].picture : 'img/brand/white.png' : 'img/brand/white.png' " alt="image" style="width: 100px; height: 100px;" />
                <div class="card-body" style="height: 50%;">
                  <h6 class="card-title" style=";">
                    {{ result.organizations[0] ? result.organizations[0].name : '' }}
                  </h6>
                  <p class="card-text" >
                    {{ result.objective }}
                  </p>
                </div>
                  <div class="card-footer text-muted">
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Inputs from './components/Inputs'
import BasicElements from './components/BasicElements'

export default {
  name: 'home',
  components: {
    Inputs,
    BasicElements,
  },
  props: {},
  data() {
    return {
      results: [],
      term: '',
    }
  },
  methods: {
    searchOpportunity() {
      console.log('Searching' + this.term)
      let s = this.term
      this.$http
        .post(
          this.$store.getters.gatewayURL,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          },
          {
            // Consulta graphql
            data: {
              query:
                `
                mutation{
                    findOpportunity(size: 13  ,offset:0, term: "` +
                s +
                `"){
                        size
                        results{
                            id
                            deadline
                            objective,
                            organizations{
                                picture
                                name
                            }
                        
                        },
                        offset
                    }
                }
					`,
            },
          },
        )
        .then((res) => {
          this.results = res.data.data.findOpportunity.results
          console.log(this.results)
        })
    },
  },
}
</script>
