<template>
    <li>
        <h2>{{ name }} {{ isFavorite  ? '(Favourite)' : '' }}</h2>
        <button @click="changeFavourite">Toggle Favourite</button>
        <button @click="toggleDetails">{{ dataAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="dataAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        // Validating props
        // props: ['name','phoneNumber','emailAddress','isFavourite'],
        props : {
            id: {
                type: String,
                required : true
            },
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            emailAddress: {
                type : String,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required : false,
                default : true,
                // validator : function(value) {
                //     return value === "1" || value === "0";
                // }
            },
        },
        data() {
            return {
                dataAreVisible:false                
            };
        },
        methods: {
            toggleDetails() {
                this.dataAreVisible = !this.dataAreVisible;
            },
            changeFavourite() {
             this.$emit('toggle-favourite',this.id);
            },
        }
    };
</script>

<style>
</style>