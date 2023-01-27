<template>
  <NuxtErrorBoundary>
    <!-- Features -->
    <!-- Features -->
    <!-- Container for demo purpose -->
    <div class="">

      <!-- Section: Design Block -->
      <section class="mb-32 hover:bg-gray-900">
        <div class="relative overflow-hidden hover:bg-gray-900 bg-no-repeat bg-cover" style="
              background-position: 50%;
              background-image: url('https://storage.googleapis.com/stockai-stock-photos-protected/original/1674470739426-0c2f4174-633e-4f55-9b6f-bd5756604247-3072.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-hu3sa%40stockai-362303.iam.gserviceaccount.com%2F20230127%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230127T203007Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=335571688430301bd546622a227c01d7789a640e0ac4c05c6ece224c61e93e24efc265302fa2e490959da58abe1365b6fa204fbae1e5d3586511018e42722416b3c9246bb1b43bc8f317c0478e95e03946859301fb8a63499ea7e407113b21ac8bb53e7ad07da898948eec3b22298f135b215429a1ede0514d486797190e53535478afb11daa01c92662219a51413703975148baa8e72891b290788fa3d3e8a8b59617a1bb13420b84abf0830d369a2573cfe600be38f65e7928b3328f3d1d38a441ccbfc62f3a836fc9caad984dade8ce76b1ab0ee115ad714138898635dd76cf30d93f877df6f8b8cc08d7bf3f94c111995ed2453a912951f2127e286fc5fb');
              height: 550px;
            ">
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.55)">
            <div class="flex justify-center items-center h-full">
              <div data-aos="fade-up" data-aos-duration="3000" class="text-center text-gray-200 px-6 md:px-12">
                <h2 class="text-4xl font-bold tracking-tight leading-tight mb-12">
                  We all have a duty which is to <br /><span>protect the environment</span>
                </h2>
                <NuxtLink to="Service">
                  <button to="Services" type="button"
                    class="inline-block rounded-full bg-green-800 px-10 py-5  text-white font-medium text-sm leading-snug  rounded hover:bg-green-600 hover:bg-opacity-4 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Learn more
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>

    <!-- End Features -->
    <!-- End Features -->
  </NuxtErrorBoundary>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  mounted() {
    AOS.init({})
  }
}
</script>

<style>
.px-20 {
  padding-left: 5rem;
  padding-right: 2rem;
  height: 600px;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 10px;
}


.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
}
</style>