<template>
<div class="ms-5 mt-4">
    <div class="card text-white">
        <div class="card-body bg-secondary bg-gradient">
            <div class="col-lg-4">
                <label class="fw-bold">Name:</label>
                {{ user.name }}
            </div>
            <div class="col-lg-4">
                <label class="fw-bold">Email:</label>
                {{ user.email }}
            </div>
            <div class="col-lg-4">
                <label class="fw-bold">Address:</label>
                {{ user.address }}
            </div>
            <div class="col-lg-4">
                <label class="fw-bold">Phone:</label>
                {{ user.phone }}
            </div>
            <button class="btn btn-info" @click="viewData(user.name)">View</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        user: Object,
        viewData: Function
    },
    data() {
        return {
            userName:"Peter"      
        }
    },

}
</script>

<style scoped>

</style>
