<template>
  <div>
    <base-dialog :show="!!error">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item v-for="req in receivedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
        </ul>
        <h3 v-else>No requests present.</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Any requests? Fill the form below!</h2>
        </header>
        <contact-coach></contact-coach>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem';
import ContactCoach from '@/pages/requests/ContactCoach';
export default {
  name: 'RequestsReceived',
  components: {ContactCoach, RequestItem},
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>