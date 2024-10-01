<script>
  // core components
  import CardStats from "components/Cards/CardStats.svelte";
  import { subscriptionsQueries } from "../../queries/subscriptions";
  import { onMount } from "svelte";

  let price = 0;
  let activeSubscriptionsLength = 0;

  onMount(async () => {
    let dataRecap = await subscriptionsQueries.getMonthlySubscriptionsRecap("user_01J8VPMWY85B2YSABRSPNHFKD2");
    price = dataRecap.recap.price;    
    activeSubscriptionsLength = dataRecap.recap.payments.length;
  })
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <div>
      <!-- Card stats -->
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
          <CardStats
            statSubtitle="TOTAL SUBSCRIPTIONS PRICE"
            statTitle={`${price}€`}
            statArrow="up"
            statPercent="3.48"
            statPercentColor="text-emerald-500"
            statDescripiron="Since last month"
            statIconName="far fa-chart-bar"
            statIconColor="bg-red-500"
          />
        </div>
        <div class="w-full lg:w-6/12 xl:w-4/12 px-4">
          <CardStats
            statSubtitle="NUMBERS OF ACTIVE SUBSCRIPTIONS"
            statTitle={activeSubscriptionsLength}
            statArrow="down"
            statPercent="3.48"
            statPercentColor="text-red-500"
            statDescripiron="Since last week"
            statIconName="fas fa-chart-pie"
            statIconColor="bg-orange-500"
          />
        </div>
      </div>
    </div>
  </div>
</div>
