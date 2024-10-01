<script>
  import { onMount } from "svelte";
  // core components
  import CardLineChart from "components/Cards/CardLineChart.svelte";
  import CardPageVisits from "components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "components/Cards/CardSocialTraffic.svelte";
  import { subscriptionsQueries } from "../../queries/subscriptions";

  let subscriptions = [];
  let dataRecap = {};
  let categories = [];

  onMount(async () => {
    dataRecap = await subscriptionsQueries.getMonthlySubscriptionsRecap("user_01J8VPMWY85B2YSABRSPNHFKD2");
    subscriptions = await subscriptionsQueries.fetchSubscrption("user_01J8VPMWY85B2YSABRSPNHFKD2");
    categories = dataRecap.recap.categories.categories;    
  })
</script>

<div>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 xl:mb-0 px-4">
      <CardLineChart />
    </div>
  </div>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
      <CardPageVisits subscriptions={subscriptions.subscriptions} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
      <CardSocialTraffic categories={categories}/>
    </div>
  </div>
</div>
